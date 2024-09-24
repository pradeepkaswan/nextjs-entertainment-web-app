"use client";

export default function SignoutButton({ signOut }: { signOut: () => void }) {
  return <button onClick={() => signOut()}>Log Out</button>;
}
