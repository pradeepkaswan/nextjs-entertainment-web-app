import Image from "next/image";
import { redirect } from "next/navigation";

import iconSearch from "/public/images/icon-search.svg";
import { auth } from "@/lib/auth";
import { SearchInput } from "@/components/ui/search-input";

export default async function HomePage() {
  const session = await auth();

  if (!session?.user) {
    redirect("/api/auth/signin?callbackUrl=/");
  }

  return (
    <div className="px-4 py-6 flex flex-col gap-6 | md:px-0 md:py-8 md:gap-8">
      <div className="flex flex-row items-center justify-center">
        <Image
          src={iconSearch}
          alt="Search icon"
          className="h-6 w-6 mr-4 | md:h-8 md:w-8 md:mr-6"
        />
        <SearchInput
          placeholder="Search for movies or TV series"
          className="bg-transparent border-none text-[16px] font-light w-full | md:text-heading-m"
        />
      </div>
      <div>
        <h2 className="text-[20px] font-light md:text-heading-l">Trending</h2>
      </div>
      <div>
        <h2 className="text-[20px] font-light md:text-heading-l">
          Recommended for you
        </h2>
      </div>
    </div>
  );
}
