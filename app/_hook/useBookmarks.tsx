"use client";
import { useContext } from "react";
import { BookmarkContext } from "@/app/_context/BookmarkContext";

export const useBookmarks = () => {
  const context = useContext(BookmarkContext);
  if (!context) {
    throw new Error("useBookmarks must be used within a BookmarkProvider");
  }
  return context;
};
