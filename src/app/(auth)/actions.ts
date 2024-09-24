"use server";

import { db } from "@/lib/db";
import { users } from "@/lib/schema";
import { passwordToSalt } from "@/lib/auth";

export async function signup(formData: FormData) {
  const email = (await formData.get("email")) as string;
  const password = (await formData.get("password")) as string;

  if (!email || !password) {
    return;
  }

  const user = await db.insert(users).values({
    id: crypto.randomUUID(),
    email,
    password: passwordToSalt(password),
  });

  return user;
}
