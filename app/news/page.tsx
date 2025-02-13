import React, { Suspense } from "react";
import { FiSearch } from "react-icons/fi";
import Filter from "@/components/Filter";
import News from "@/components/News";
import Spinner from "@/components/Spinner";
export default function page() {
  return (
    <div className=" p-5">
      <ul className="flex gap-4 items-center justify-between xs:gap-12 md:gap-16 w-full flex-wrap xs:flex-nowrap">
        <li className="relative flex items-center w-full xs:w-auto max-w-xs xs:max-w-md">
          <input
            type="text"
            placeholder="Search..."
            className="w-full py-2 px-4 rounded-full bg-primary-700 text-primary-100 placeholder-primary-300 focus:outline-none focus:ring-2 focus:ring-accent-500"
          />
          <FiSearch className="absolute right-4 text-primary-300" size={20} />
        </li>
        <Filter />
      </ul>

      <div className="mt-8">
        <h1 className="text-3xl font-bold text-accent-500 xs:text-1xl">
          Crypto News
        </h1>
        <p className="text-accent-500 xs:text-xl mt-2">
          Get the latest and Trending news from around the world.
        </p>
      </div>
      <Suspense fallback={<Spinner text={"loading news..."} />}>
        <News />
      </Suspense>
    </div>
  );
}
