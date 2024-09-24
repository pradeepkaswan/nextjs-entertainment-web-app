import NextAuth, { NextAuthConfig } from "next-auth";
import { DrizzleAdapter } from "@auth/drizzle-adapter";
import CredentialsProvider from "next-auth/providers/Credentials";
import bcrypt from "bcrypt";
import { eq } from "drizzle-orm";

import { db } from "@/lib/db";
import { users } from "@/lib/schema";

export function passwordToSalt(password: string) {
  const saltRounds = 10;
  const hash = bcrypt.hashSync(password, saltRounds);
  return hash;
}

async function getUserFromDb(email: string) {
  const user = await db.query.users.findFirst({
    where: eq(users.email, email),
  });
  return user;
}

async function addUserToDb(email: string, saltedPassword: string) {
  const user = await db
    .insert(users)
    .values({
      id: crypto.randomUUID(),
      email,
      password: saltedPassword,
    })
    .returning();
  return user.pop();
}

export const authConfig = {
  adapter: DrizzleAdapter(db),
  providers: [
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        let user = null;
        const email = credentials.email as string;
        const password = credentials.password as string;

        if (!email || !password) {
          return null;
        }

        user = await getUserFromDb(email);

        if (user) {
          if (!user.password) {
            return null;
          }

          const isAuthenticated = await bcrypt.compare(password, user.password);

          if (isAuthenticated) {
            return user;
          } else {
            return null;
          }
        }

        if (!user) {
          user = await addUserToDb(email, passwordToSalt(password));
        }

        if (!user) {
          throw new Error("User not found");
        }

        return user;
      },
    }),
  ],
  callbacks: {
    async session({ session }) {
      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
} satisfies NextAuthConfig;

export const { handlers, signIn, signOut, auth } = NextAuth(authConfig);
