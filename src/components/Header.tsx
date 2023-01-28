/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-html-link-for-pages */

export default function Header() {
    return (
      <div className="p-6 lg:px-8 bg-brand">
        <div>
          <nav
            className="flex h-9 items-center justify-between"
            aria-label="Global"
          >
            <div className="flex lg:min-w-0 lg:flex-1" aria-label="Global">
              <a href="/" className="-m-1.5 p-1.5">
                <img
                  className="h-8"
                  src="/logo.png"
                  alt="Logo"
                />
              </a>
            </div>
            <div className="hidden lg:flex lg:min-w-0 lg:flex-1 lg:justify-end">
              <a
                href="https://github.com/rmatovu987"
                className="flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-2 text-sm font-medium text-brand-600 shadow-sm hover:bg-brand-50"
                target="_blank"
                rel="noreferrer"
              >
                Developer
              </a>
            </div>
          </nav>
        </div>
      </div>
    );
  }