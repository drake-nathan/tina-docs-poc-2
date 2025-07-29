import Link from "next/link";

interface BreadcrumbItem {
  href?: string;
  name: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export const Breadcrumb = ({ items }: BreadcrumbProps) => {
  return (
    <nav aria-label="Breadcrumb" className="flex mb-6">
      <ol className="flex items-center space-x-2 text-sm text-gray-500">
        <li>
          <Link className="hover:text-blue-600 transition-colors" href="/">
            Home
          </Link>
        </li>
        {items.map((item, index) => (
          <li className="flex items-center" key={item.name}>
            <svg
              className="flex-shrink-0 h-4 w-4 text-gray-400 mx-2"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                clipRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                fillRule="evenodd"
              />
            </svg>
            {item.href && index < items.length - 1 ? (
              <Link
                className="hover:text-blue-600 transition-colors"
                href={item.href}
              >
                {item.name}
              </Link>
            ) : (
              <span className="text-gray-900 font-medium">{item.name}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};
