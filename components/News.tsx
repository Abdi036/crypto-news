import React from "react";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";

interface NewsItem {
  url: string;
  title: string;
  description: string;
  thumbnail: string;
  createdAt: string;
}

export default async function News() {
  const response = await fetch("http://localhost:8000/news");
  const data = await response.json();
  if (!data || data.length === 0) {
    return (
      <div className="text-primary-500 font-extrabold text-center mt-20 text-3xl">
        No news data available !!!.
      </div>
    );
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-10">
      {data.map((news: NewsItem, index: number) => (
        <Card
          key={index}
          className="mx-auto border border-primary-700 rounded-lg shadow-lg"
        >
          <div className="h-40 w-full overflow-hidden rounded-t-lg">
            <Image
              src={news.thumbnail}
              alt={news.title}
              className="h-full w-full object-cover"
              width={300}
              height={300}
              
               
            />
          </div>
          <div className="p-4">
            <h3 className="text-lg font-semibold text-primary-100">
              {news.title}
            </h3>
            <p className="text-sm text-primary-500 mt-2">
              {news.createdAt.replace("+0000", "")}
            </p>
            <p className="mt-2 text-primary-500 line-clamp-3 ">
              {news.description}
            </p>
          </div>
          <div className="p-4 text-right">
            <Link
              href={news.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-accent-600 hover:underline"
            >
              Read more
            </Link>
          </div>
        </Card>
      ))}
    </div>
  );
}
