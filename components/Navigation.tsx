// Navigation Component
import Link from "next/link";
import { FiBookmark } from "react-icons/fi";

export default function Navigation() {
  return (
    <nav className="z-10 text-xl">
      <ul className="flex gap-4 items-center justify-between sm:gap-12 md:gap-16 w-full flex-wrap sm:flex-nowrap">
        <li>
          <Link
            href="/"
            className="hover:text-accent-400 transition-colors text-xs xs:text-xl"
          >
            News
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className="hover:text-accent-400 transition-colors text-xs xs:text-xl"
          >
            About
          </Link>
        </li>
        <li>
          <Link href="/bookmarks">
            <FiBookmark
              className="hover:text-accent-400 transition-colors text-xs xs:text-xl"
              size={24}
            />
          </Link>
        </li>
      </ul>
    </nav>
  );
}
