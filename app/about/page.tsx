import Link from "next/link";
import Image from "next/image";
import React from "react";
import image1 from "../../public/image1.jpg";
import image2 from "../../public/image2.jpg";

export const metadata = {
  title: "About",
};

export default function page() {
  return (
    <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-5 gap-x-8 gap-y-16 xs:gap-x-12 xs:gap-y-24 lg:gap-x-24 lg:gap-y-32 text-lg items-center px-4 xs:px-6 lg:px-12 py-8 ">
      {/* Hero Section */}
      <div className="lg:col-span-3 col-span-1">
        <h1 className="text-3xl xs:text-4xl mb-6 xs:mb-10 text-accent-400 font-medium">
          Welcome to Crypto Insights
        </h1>
        <div className="space-y-6 xs:space-y-8">
          <p>
            Dive into the world of blockchain with Crypto Insights. Discover
            thought-provoking articles, market trends, and in-depth analyses
            designed to educate and empower crypto enthusiasts and investors.
          </p>
          <p>
            Our platform provides a blend of daily news, expert opinions, and
            exclusive interviews with leaders shaping the future of
            cryptocurrencies and blockchain technology. Whether you’re new to
            crypto or a seasoned investor, we’ve got you covered.
          </p>
          <p>
            Stay ahead of the curve with up-to-date insights on decentralized
            finance (DeFi), NFTs, Web3, and beyond. From understanding market
            volatility to uncovering untapped opportunities, Crypto Insights is
            your gateway to the evolving crypto landscape.
          </p>
        </div>
      </div>

      <div className="lg:col-span-2 xs:col-span-1">
        <Image
          src={image1}
          alt="Crypto analysis illustration"
          placeholder="blur"
          quality={80}
          width={500}
          height={400}
          className="rounded-xl"
        />
      </div>

      <div className="relative aspect-square col-span-1 xs:col-span-2 lg:col-span-2">
        <Image
          src={image2}
          fill
          className="object-cover rounded-xl"
          alt="Crypto Insights team working together"
        />
      </div>

      {/* Legacy Section */}
      <div className="lg:col-span-3 col-span-1">
        <h1 className="text-3xl xs:text-4xl mb-6 xs:mb-10 text-accent-400 font-medium">
          Empowering Crypto Enthusiasts Since 2010
        </h1>
        <div className="space-y-6 xs:space-y-8">
          <p>
            Since our inception in 2010, Crypto Insights has been at the
            forefront of blockchain journalism. Our commitment is to deliver
            reliable, accurate, and transparent news in a rapidly changing
            industry.
          </p>
          <p>
            Over the years, we’ve built a strong reputation for connecting our
            readers to the latest market trends, innovations, and expert
            perspectives. From Bitcoin’s early days to the emergence of new
            technologies like smart contracts, our mission has been to educate
            and inspire.
          </p>
          <div>
            <Link
              href="/news"
              className="inline-block mt-4 bg-accent-500 px-8 py-4 text-primary-800 text-lg font-semibold hover:bg-accent-600 transition-all rounded-lg"
            >
              Explore the Latest Crypto News
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
