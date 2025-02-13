import { FiSearch } from "react-icons/fi";

interface SearchAndSortProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  sortOption: string;
  setCurrentPage: (page: number) => void;
  setSortOption: (option: string) => void;
}

export default function Search({
  searchQuery,
  setSearchQuery,
  sortOption,
  setSortOption,
  setCurrentPage,
}: SearchAndSortProps) {
  return (
    <>
      <div className="flex flex-col sm:flex-row items-center justify-between mb-8 ">
        <li className="relative flex items-center w-full xs:w-auto max-w-xs xs:max-w-md">
          <input
            className="w-full py-2 px-4 rounded-full bg-primary-700 text-primary-100 placeholder-primary-300 focus:outline-none focus:ring-2 focus:ring-accent-500"
            type="text"
            placeholder="search..."
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setCurrentPage(1);
            }}
          />
          <FiSearch className="absolute right-4 text-primary-300" size={20} />
        </li>

        <select
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
          className="px-4 py-2 border text-primary-100 focus:outline-none focus:ring-2 focus:ring-accent-500 bg-primary-700  rounded-full"
        >
          <option value="new-to-old">Newest to Oldest</option>
          <option value="old-to-new">Oldest to Newest</option>
        </select>
      </div>
    </>
  );
}
