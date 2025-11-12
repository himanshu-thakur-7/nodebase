import prisma from "@/lib/db"
import { cn } from "@/lib/utils"

const  Page = async ()=>{
  const users = await prisma.user.findMany();
  return (<div className={"text-red-500 min-h-screen min-w-screen flex items-center justify-center"}>
    {JSON.stringify(users)}
  </div>)
}


export default Page