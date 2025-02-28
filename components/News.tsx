/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import Pagination from "./Pagination";
import SearchAndSort from "./SearchAndSort";
import { useBookmarks } from "@/app/_hook/useBookmarks";

export const metadata = {
  title: "News",
};

interface NewsItem {
  url: string;
  title: string;
  description: string;
  thumbnail: string;
  createdAt: string;
}

interface NewsProps {
  data: NewsItem[];
}

export default function News({ data }: NewsProps) {
  const { addBookmark } = useBookmarks();

  const handleAddBookmark = (news: NewsItem) => {
    addBookmark(news);
  };

  const itemsPerPage = 9;
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOption, setSortOption] = useState("new-to-old");

  const filteredNews = data.filter((news: NewsItem) =>
    news.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const sortedNews = filteredNews.sort((a: NewsItem, b: NewsItem) => {
    if (sortOption === "new-to-old") {
      return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    } else if (sortOption === "old-to-new") {
      return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
    }
    return 0;
  });

  const indexOfLastNews = currentPage * itemsPerPage;
  const indexOfFirstNews = indexOfLastNews - itemsPerPage;
  const currentNews = sortedNews.slice(indexOfFirstNews, indexOfLastNews);

  const totalPages = Math.ceil(filteredNews.length / itemsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  if (!data || data.length === 0) {
    return (
      <div className="text-primary-500 font-extrabold text-center mt-20 text-3xl">
        No news data available !!!
      </div>
    );
  }

  return (
    <div>
      <SearchAndSort
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        sortOption={sortOption}
        setSortOption={setSortOption}
        setCurrentPage={setCurrentPage}
      />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-10">
        {currentNews.map((news: NewsItem, index: number) => (
          <Card
            key={index}
            className="mx-auto border border-primary-700 rounded-lg shadow-lg"
          >
            <div className="h-40 w-full overflow-hidden rounded-t-lg">
              <img
                src={news.thumbnail}
                alt={news.title}
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-primary-100">
                {news.title}
              </h3>
              <p className="text-sm text-primary-500 mt-2">
                {news.createdAt.replace("+0000", "")}
              </p>
              <p className="mt-2 text-primary-500 line-clamp-3">
                {news.description}
              </p>
            </div>
            <div className="p-4 text-right flex justify-between items-center">
              <button
                className="border border-primary-600 p-3 rounded-full text-sm hover:bg-primary-500 hover:text-primary-800 transition-all"
                onClick={() => handleAddBookmark(news)}
              >
                Add to bookmark
              </button>
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

      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        handlePageChange={handlePageChange}
      />
    </div>
  );
}
