import React, { Suspense } from "react";
import News from "@/components/News";
import Spinner from "@/components/Spinner";

export const metadata = {
  title: "News",
};

export default function page() {
  return (
    <div className=" p-5">
      <div>
        <h1 className="text-3xl font-bold text-accent-500 xs:text-1xl">
          Crypto News
        </h1>
        <p className="text-accent-500 xs:text-xl mt-2 mb-8">
          Get the latest and Trending news from around the world.
        </p>
      </div>
      <Suspense fallback={<Spinner text={"loading news..."} />}>
        <News />
      </Suspense>
    </div>
  );
}
