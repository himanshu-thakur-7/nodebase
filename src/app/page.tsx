import { Logout } from "@/features/auth/components/logout";
import { requireAuth } from "@/lib/auth-utils"
import { caller } from "@/trpc/server";

const  Page = async ()=>{
  await requireAuth();

  const data = await caller.getUsers();
  return (
    <div className="min-h-screen min-w-screen flex items-center justify-center flex-col gap-y-6">
      Protected Server Component {JSON.stringify(data)}
      {/* <Logout></Logout> */}
      <Logout/>
    </div>
  )
}


export default Page