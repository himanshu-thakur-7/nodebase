import {betterAuth} from 'better-auth';
import {prismaAdapter} from 'better-auth/adapters/prisma';
import prisma from '@/lib/db';
import {checkout,polar,portal} from "@polar-sh/better-auth";
import { polarClient } from '@/lib/polar';
export const auth = betterAuth({
    database: prismaAdapter(prisma, {
        provider: 'postgresql'
    }),
    emailAndPassword: {
        enabled: true,
        autoSignIn: true
    },
    plugins:[
        polar({
            client: polarClient,
            createCustomerOnSignUp: true,
            use:[
                checkout({
                    products:[
                        {
                            productId:"15590ff5-254e-4e62-b63c-f562e28230ca",
                            slug:"pro"
                        }
                    ],
                    successUrl: process.env.POLAR_SUCCESS_URL,
                    authenticatedUsersOnly:true
                }),
                portal()
            ]
        })
    ]
});