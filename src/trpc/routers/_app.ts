import { createTRPCRouter,protectedProcedure } from '@/trpc/init';
import prisma from '@/lib/db';
import { inngest } from '@/inngest/client';
import { email } from 'zod';
export const appRouter = createTRPCRouter({
  getWorkflows: protectedProcedure.query(({ctx})=>{
    return prisma.workflow.findMany()
  }),
  createWorkflow: protectedProcedure.mutation(async ()=>{

    await inngest.send({
      name:"test/hello.world",
      data:{
        email:"nodebase@gmail.com"
      }
    })
    
    return {success: true, message: "Job queued"}
  })
});
// export type definition of API
export type AppRouter = typeof appRouter;