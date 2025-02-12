import Image from "next/image";
import Link from "next/link";
import React from "react";
import bg from "@/public/bg.jpg";

export default function Page() {
  return (
    <main className="h-full w-screen">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-transparent z-10" />
      <div className="absolute inset-0 bg-gradient-to-l from-black via-transparent to-transparent z-10" />
      <Image
        src={bg}
        fill
        placeholder="blur"
        quality={100}
        className="object-cover object-top "
        alt="Abstract background of digital data and technology"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10" />
      <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent z-10" />

      <div className="relative z-10 flex flex-col items-center justify-center h-full lg:ml-[-200px] mt-16">
        <h1 className="text-3xl md:text-5xl lg:text-7xl text-primary-100 mb-4 md:mb-8 tracking-tight font-bold leading-tight text-center">
          Stay Ahead in Crypto.
        </h1>
        <p className="text-center text-sm xs:text-lg lg:text-xl text-primary-50 mb-6 max-w-xl">
          Get the latest updates on cryptocurrency trends, market insights, and
          blockchain innovations.
        </p>
        <Link
          href="/crypto-news"
          className="bg-accent-500 px-4 md:px-6 py-3 md:py-4 text-primary-800 text-sm md:text-base font-semibold hover:bg-accent-600 transition-all rounded-md"
        >
          Explore Crypto News
        </Link>
      </div>
    </main>
  );
}
