"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiBookmark } from "react-icons/fi";

export default function Navigation() {
  const pathName = usePathname();
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
            <FiBookmark
              className={`${
                pathName === "/bookmarks"
                  ? "text-accent-500 font-extrabold"
                  : ""
              }hover:text-accent-400 transition-colors text-xs xs:text-xl`}
              size={24}
            />
          </Link>
        </li>
      </ul>
    </nav>
  );
}
