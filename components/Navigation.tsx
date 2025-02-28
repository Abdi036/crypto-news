"use client";

import { useBookmarks } from "@/app/_hook/useBookmarks";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiBookmark } from "react-icons/fi";

export default function Navigation() {
  const pathName = usePathname();
  const { bookmarks } = useBookmarks();

  return (
    <nav className="z-10 text-xl">
      <ul className="flex gap-4 items-center justify-between sm:gap-12 md:gap-16 w-full flex-wrap sm:flex-nowrap">
        <li>
          <Link
            href="/news"
            className={`${
              pathName === "/news" ? "text-accent-500 font-extrabold" : ""
            } hover:text-accent-400 transition-colors text-xs xs:text-xl`}
          >
            News
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className={`${
              pathName === "/about" ? "text-accent-500 font-extrabold" : ""
            }hover:text-accent-400 transition-colors text-xs xs:text-xl`}
          >
            About
          </Link>
        </li>
        <li>
          <Link href="/bookmarks">
            <div className="flex items-center gap-1 relative">
              <FiBookmark
                className={`${
                  pathName === "/bookmarks"
                    ? "text-accent-500 font-extrabold"
                    : ""
                }hover:text-accent-400 transition-colors text-xs xs:text-xl`}
                size={24}
              />
              <span className="text-red-500 text-sm font-semibold absolute top-[1] right-2">
                {bookmarks.length}
              </span>
            </div>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
