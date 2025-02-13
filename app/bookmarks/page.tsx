"use client";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { useBookmarks } from "../_hook/useBookmarks";

export default function Page() {
  const { bookmarks, removeBookmark } = useBookmarks();

  if (bookmarks.length === 0) {
    return (
      <div className="text-primary-500 font-extrabold text-center mt-20 text-3xl">
        No bookmarks yet!
      </div>
    );
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-10">
      {bookmarks.map((bookmark, index) => (
        <Card
          key={index}
          className="mx-auto border border-primary-700 rounded-lg shadow-lg"
        >
          <div className="h-40 w-full overflow-hidden rounded-t-lg">
            <Image
              src={bookmark.thumbnail}
              alt={bookmark.title}
              className="h-full w-full object-cover"
              width={300}
              height={300}
            />
          </div>
          <div className="p-4">
            <h3 className="text-lg font-semibold text-primary-100">
              {bookmark.title}
            </h3>
            <p className="text-sm text-primary-500 mt-2">
              {bookmark.createdAt.replace("+0000", "")}
            </p>
            <p className="mt-2 text-primary-500 line-clamp-3">
              {bookmark.description}
            </p>
          </div>
          <div className="p-4 text-right flex justify-between items-center">
            <button
              className="border border-primary-600 p-3 rounded-full text-sm hover:bg-red-500 hover:text-white transition-all"
              onClick={() => removeBookmark(bookmark.url)}
            >
              Remove
            </button>
            <Link
              href={bookmark.url}
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
