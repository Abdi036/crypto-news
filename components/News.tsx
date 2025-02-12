/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Card } from "@/components/ui/card";
import Link from "next/link";

interface NewsItem {
  url: string;
  title: string;
  description: string;
  thumbnail: string;
  createdAt: string;
}

export default async function News() {
  const url = "https://cryptocurrency-news2.p.rapidapi.com/v1/cryptodaily";
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "cfece4cd5dmsh23a9e718664b389p14581ajsn9fbff94e4638",
      "x-rapidapi-host": "cryptocurrency-news2.p.rapidapi.com",
    },
  };

  let data;

  try {
    const response = await fetch(url, options);
    data = await response.json();
  } catch (error) {
    console.error("Failed to fetch news:", error);
    return <div>Failed to load news.</div>;
  }

  if (!data || !data.data) {
    return <div>No news data available.</div>;
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-10">
      {data.data.map((news: NewsItem, index: number) => (
        <Card key={index} className="mx-auto border rounded-lg shadow-lg">
          <div className="h-40 w-full overflow-hidden rounded-t-lg">
            <img
              src={news.thumbnail}
              alt={news.title}
              className="h-full w-full object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="p-4">
            <h3 className="text-lg font-semibold">{news.title}</h3>
            <p className="mt-2 text-gray-700 line-clamp-3">
              <p className="text-sm text-gray-500">
                {news.createdAt.replace("+0000", "")}
              </p>
              {news.description}
            </p>
          </div>
          <div className="p-4 text-right">
            <Link
              href={news.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-blue-600 hover:underline"
            >
              Read more
            </Link>
          </div>
        </Card>
      ))}
    </div>
  );
}
