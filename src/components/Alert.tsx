interface Props {
  error: string | null;
  onDismiss: () => void;
}
export default function Alert({ error, onDismiss }: Props) {
  return (
    <div
      className="dark:bg-red-20 mb-4 rounded-lg border border-red-300 bg-red-50 p-4"
      role="alert"
    >
      <div className="flex items-center">
        <svg
          className="mr-2 h-5 w-5 text-red-900 dark:text-red-800"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
            clipRule="evenodd"
          ></path>
        </svg>

        <span className="sr-only">Info</span>

        <h3 className="text-lg font-medium text-red-900 dark:text-red-800">
          Something went wrong!
        </h3>
      </div>

      <div className="mt-2 mb-4 capitalize text-red-900 dark:text-red-800">
        {error ? error.toString() : "Error"}
      </div>

      <div className="flex">
        <button onClick={onDismiss} className="rounded-lg border border-red-900 bg-transparent px-3 py-1.5 text-center text-xs font-medium text-red-900 hover:bg-red-900 hover:text-white focus:outline-none focus:ring-4 focus:ring-red-300 dark:border-red-800 dark:hover:text-white">
          Dismiss
        </button>
      </div>
    </div>
  );
}
