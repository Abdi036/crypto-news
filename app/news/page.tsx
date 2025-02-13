import React, { Suspense } from "react";
import News from "@/components/News";
import Spinner from "@/components/Spinner";

export default function page() {
  return (
    <div className=" p-5">
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
