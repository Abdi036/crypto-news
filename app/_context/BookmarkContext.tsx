"use client";
import { createContext, useState, ReactNode } from "react";

interface Bookmark {
  url: string;
  title: string;
  description: string;
  thumbnail: string;
  createdAt: string;
}

interface BookmarkContextProps {
  bookmarks: Bookmark[];
  addBookmark: (bookmark: Bookmark) => void;
  removeBookmark: (url: string) => void;
}

export const BookmarkContext = createContext<BookmarkContextProps | undefined>(
  undefined
);

export const BookmarkProvider = ({ children }: { children: ReactNode }) => {
  const [bookmarks, setBookmarks] = useState<Bookmark[]>([]);

  const addBookmark = (bookmark: Bookmark) => {
    const exists = bookmarks.some((b) => b.url === bookmark.url);

    if (!exists) {
      setBookmarks([...bookmarks, bookmark]);
    }
  };

  const removeBookmark = (url: string) => {
    setBookmarks(bookmarks.filter((b) => b.url !== url));
  };

  return (
    <BookmarkContext.Provider
      value={{ bookmarks, addBookmark, removeBookmark }}
    >
      {children}
    </BookmarkContext.Provider>
  );
};
