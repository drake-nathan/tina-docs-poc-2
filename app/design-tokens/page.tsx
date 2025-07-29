import Link from "next/link";

import { client } from "../../tina/__generated__/databaseClient";

const DesignTokensIndex = async () => {
  const res = await client.queries.designTokenConnection();

  const categories = [
    "Colors",
    "Typography",
    "Spacing",
    "Borders",
    "Shadows",
    "Breakpoints",
    "Animation",
    "Z-Index",
  ];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Animation": {
        return "🎬";
      }
      case "Borders": {
        return "⭕";
      }
      case "Breakpoints": {
        return "📱";
      }
      case "Colors": {
        return "🎨";
      }
      case "Shadows": {
        return "🌑";
      }
      case "Spacing": {
        return "📏";
      }
      case "Typography": {
        return "📝";
      }
      case "Z-Index": {
        return "📚";
      }
      default: {
        return "⚙️";
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900">Design Tokens</h1>
          <p className="mt-4 text-xl text-gray-600">
            Design decisions encoded as data — our single source of truth for
            design values
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {res.data.designTokenConnection.edges?.map((edge) => {
            const token = edge?.node;
            if (!token) return null;

            return (
              <Link
                className="group block rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md hover:border-blue-300"
                href={`/design-tokens/${token._sys.filename}`}
                key={token._sys.filename}
              >
                <div className="text-center">
                  <div className="text-4xl mb-3">
                    {getCategoryIcon(token.category || "")}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600">
                    {token.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-600 line-clamp-2">
                    {token.description}
                  </p>
                  <div className="mt-4 inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700">
                    {token.category}
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Category Overview */}
        <div className="mt-16">
          <h2 className="text-2xl font-semibold text-gray-900 mb-8">
            Token Categories
          </h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {categories.map((category) => (
              <div
                className="text-center p-4 rounded-lg bg-white border border-gray-200"
                key={category}
              >
                <div className="text-2xl mb-2">{getCategoryIcon(category)}</div>
                <div className="text-sm font-medium text-gray-900">
                  {category}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesignTokensIndex;
