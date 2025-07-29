import Link from "next/link";

import { client } from "../../tina/__generated__/databaseClient";

const ComponentsIndex = async () => {
  const res = await client.queries.componentConnection();

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900">Components</h1>
          <p className="mt-4 text-xl text-gray-600">
            Reusable UI components for building consistent interfaces
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {res.data.componentConnection.edges?.map((edge) => {
            const component = edge?.node;
            if (!component) return null;

            return (
              <Link
                className="group block rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
                href={`/components/${component._sys.filename}`}
                key={component._sys.filename}
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600">
                    {component.title}
                  </h3>
                  <span
                    className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                      component.status === "Stable"
                        ? "bg-green-100 text-green-800"
                        : component.status === "Beta"
                          ? "bg-yellow-100 text-yellow-800"
                          : component.status === "Deprecated"
                            ? "bg-red-100 text-red-800"
                            : "bg-gray-100 text-gray-800"
                    }`}
                  >
                    {component.status}
                  </span>
                </div>
                <p className="mt-2 text-gray-600">{component.description}</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-sm text-gray-500">
                    {component.category}
                  </span>
                  <span className="text-sm text-blue-600 group-hover:text-blue-800">
                    View details →
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ComponentsIndex;
