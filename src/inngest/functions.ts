import prisma from "@/lib/db";
import {inngest} from "./client";

export const helloWorld = inngest.createFunction(
    {id: "hello-world"},
    {event: "test/hello.world"},
    async ({event,step})=>{

        // uploading video
        await step.sleep("uploading video","10s");

        // transcribing video
        await step.sleep("transcribing video","10s");

        // sending to ai
        await step.sleep("sending to ai ","10s");
        

        return step.run("create-workflow",()=>{
            return prisma.workflow.create({
                data:{
                    name: "workflow from ingesstt"
                }
            })
        })
    }
)