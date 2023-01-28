import type { ChangeEvent } from "react";

interface Props {
    query: any;
    onQuery: (e: ChangeEvent<HTMLInputElement>) => void;
    onQueryClear: () => void
}

export default function SearchBar({ query, onQuery, onQueryClear }: Props) {
  return (
    <form action="">
      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="h-5 w-5 text-gray-500 dark:text-gray-400"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>

        <input
          type="text"
          placeholder="Search location"
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
          value={query || ""}
          onChange={onQuery}
          className="dark:placeholderbg-gray-400 block w-full rounded-lg border border-gray-300 bg-gray-50 p-4 pl-10 text-sm text-brand focus:border-brand focus:outline-none focus:ring-brand dark:border-gray-200 dark:bg-gray-100 dark:text-black dark:focus:border-brand dark:focus:ring-brand"
        />

        {query && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            onClick={onQueryClear}
            className="absolute right-2.5 bottom-4 h-6 w-6 cursor-pointer text-gray-500 dark:text-gray-400"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        )}
      </div>
    </form>
  );
}
