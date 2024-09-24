import Link from "next/link";
import { signIn } from "next-auth/react";

import { Input } from "@/components/ui/input";

export default function LoginPage() {
  return (
    <>
      <h2 className="text-[32px] font-light mb-10">Login</h2>
      <form
        action={async () => {
          "use server";
          await signIn();
        }}
        className="mb-6">
        <div className="flex flex-col gap-6 mb-10">
          <Input type="email" id="email" name="email" placeholder="Email address" />
          <Input type="password" id="password" name="password" placeholder="Password" />
        </div>
        <button
          type="submit"
          className="h-12 w-full text-[15px] text-white hover:text-dark-blue bg-primary hover:bg-white rounded-md font-light">
          Login to your account
        </button>
      </form>
      <p className="text-[15px] font-light text-center">
        Don&apos;t have an account?
        <Link className="text-primary ml-2" href="/sign-up">
          Sign Up
        </Link>
      </p>
    </>
  );
}
