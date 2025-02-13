"use client";
import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import data from "@/lib/apiFetch";

interface NewsItem {
  url: string;
  title: string;
  description: string;
  thumbnail: string;
  createdAt: string;
}

export default function News() {
  const itemsPerPage = 9;
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOption, setSortOption] = useState("new-to-old"); // Sorting state

  // Filter news based on search query
  const filteredNews = data.filter((news: NewsItem) =>
    news.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Sort news based on selected option
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
      {/* Search Input and Sort Dropdown */}
      <div className="flex flex-col sm:flex-row items-center justify-between mb-6">
        {/* Search Input */}
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
            setCurrentPage(1);
          }}
          placeholder="Search news by title..."
          className="px-4 py-2 border rounded-md text-primary-700 focus:outline-none focus:ring-2 focus:ring-accent-500 w-full max-w-lg mb-4 sm:mb-0"
        />

        {/* Sort Dropdown */}
        <select
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
          className="px-4 py-2 border rounded-md text-primary-700 focus:outline-none focus:ring-2 focus:ring-accent-500"
        >
          <option value="new-to-old">Newest to Oldest</option>
          <option value="old-to-new">Oldest to Newest</option>
        </select>
      </div>

      {/* News Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-10">
        {currentNews.map((news: NewsItem, index: number) => (
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
              <p className="mt-2 text-primary-500 line-clamp-3">
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

      {/* Pagination */}
      <div className="flex justify-center mt-8">
        {currentPage !== 1 ? (
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-primary-700 rounded-md text-primary-200"
          >
            {"<<"}
          </button>
        ) : null}

        <span className="mx-4 text-primary-500">
          Page {currentPage} of {totalPages}
        </span>

        {currentPage !== totalPages ? (
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-4 py-2 bg-primary-700 text-primary-200 rounded-md"
          >
            {">>"}
          </button>
        ) : null}
      </div>
    </div>
  );
}
