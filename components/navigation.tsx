"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navigation = [
  { href: "/", name: "Home" },
  { href: "/components", name: "Components" },
  { href: "/design-tokens", name: "Design Tokens" },
  { href: "/guidelines", name: "Guidelines" },
  { external: true, href: "/admin/index.html", name: "Admin" },
];

export const Navigation = () => {
  const pathname = usePathname();

  return (
    <nav className="bg-white shadow-sm border-b border-gray-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link className="text-xl font-bold text-gray-900" href="/">
                Design System
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              {navigation.map((item) => {
                const isActive =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname?.startsWith(item.href);

                if (item.external) {
                  return (
                    <a
                      className="text-gray-500 hover:text-gray-700 inline-flex items-center px-1 pt-1 text-sm font-medium transition-colors"
                      href={item.href}
                      key={item.name}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      {item.name}
                    </a>
                  );
                }

                return (
                  <Link
                    className={`${
                      isActive
                        ? "border-blue-500 text-gray-900"
                        : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                    } inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-colors`}
                    href={item.href}
                    key={item.name}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="sm:hidden flex items-center">
            <button
              aria-expanded="false"
              className="text-gray-500 hover:text-gray-700 inline-flex items-center justify-center p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              type="button"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 6h16M4 12h16M4 18h16"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className="sm:hidden hidden">
        <div className="pt-2 pb-3 space-y-1">
          {navigation.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname?.startsWith(item.href);

            if (item.external) {
              return (
                <a
                  className="text-gray-500 hover:text-gray-700 block pl-3 pr-4 py-2 text-base font-medium"
                  href={item.href}
                  key={item.name}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {item.name}
                </a>
              );
            }

            return (
              <Link
                className={`${
                  isActive
                    ? "bg-blue-50 border-blue-500 text-blue-700"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:bg-gray-50"
                } block pl-3 pr-4 py-2 border-l-4 text-base font-medium`}
                href={item.href}
                key={item.name}
              >
                {item.name}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
};
