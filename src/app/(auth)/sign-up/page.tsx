import Link from "next/link";

import { Input } from "@/components/ui/input";
import { signup } from "@/app/(auth)/actions";

export default function SignUpPage() {
  return (
    <>
      <h2 className="text-[32px] font-light mb-10">Sign Up</h2>
      <form action={signup} className="mb-6">
        <div className="flex flex-col gap-6 mb-10">
          <Input type="email" id="email" name="email" placeholder="Email address" />
          <Input type="password" id="password" name="password" placeholder="Password" />
          <Input
            type="password"
            id="confirm-password"
            name="confirm-password"
            placeholder="Repeat password"
          />
        </div>
        <button
          type="submit"
          className="h-12 w-full text-[15px] text-white hover:text-dark-blue bg-primary hover:bg-white rounded-md font-light">
          Create an account
        </button>
      </form>
      <p className="text-[15px] font-light text-center">
        Already have an account?
        <Link className="text-primary ml-2" href="/login">
          Login
        </Link>
      </p>
    </>
  );
}
