import Image from "next/image";

import logo from "/public/images/logo.svg";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col justify-center gap-16 items-center h-screen mx-6">
      <Image src={logo} alt="logo" className="w-8 h-auto" />
      <div className="bg-dark-blue-light rounded-lg p-6 w-full max-w-[400px]">
        {children}
      </div>
    </div>
  );
}
