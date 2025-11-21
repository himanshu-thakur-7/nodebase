"use client";

import { Button } from "@/components/ui/button";
import { Logout } from "@/features/auth/components/logout";
import { requireAuth } from "@/lib/auth-utils"
import { useTRPC } from "@/trpc/client";
import { caller } from "@/trpc/server";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

const  Page = ()=>{
  const trpc = useTRPC();
  const queryClient = useQueryClient();
  const {data} = useQuery(trpc.getWorkflows.queryOptions());
  const create = useMutation(trpc.createWorkflow.mutationOptions({
    onSuccess: ()=>{
      toast.success("Job queued")
    }
  }));
  

  const testai = useMutation(trpc.testAi.mutationOptions({
    onSuccess: ()=>{
      toast.success("Job Queued successfully")
    }
  }));


  return (
    <div className="min-h-screen min-w-screen flex items-center justify-center flex-col gap-y-6">
      Protected Server Component 
      <div>
        {JSON.stringify(data)}

      </div>
      <Button disabled={testai.isPending} onClick={()=>testai.mutate()}>
          Test AI
      </Button>
      <Button disabled={create.isPending} onClick={()=>create.mutate()}>
        Create Workflow
      </Button>
      {/* <Logout></Logout> */}
      <Logout/>
    </div>
  )
}


export default Page