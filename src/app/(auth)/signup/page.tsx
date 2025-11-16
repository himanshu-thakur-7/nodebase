import { RegisterForm } from "@/features/auth/components/register-form";
import { requireUnAuth } from "@/lib/auth-utils";

const Page = async () => {
    await requireUnAuth()
    return <div><RegisterForm/></div>;
}

export default Page;

// http://localhost:3000/signup