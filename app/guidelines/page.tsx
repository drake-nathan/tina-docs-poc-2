import Link from "next/link";

import { client } from "../../tina/__generated__/databaseClient";

const GuidelinesIndex = async () => {
  const res = await client.queries.guidelineConnection();

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Accessibility": {
        return "bg-green-100 text-green-800";
      }
      case "Brand Guidelines": {
        return "bg-indigo-100 text-indigo-800";
      }
      case "Code Standards": {
        return "bg-gray-100 text-gray-800";
      }
      case "Content Guidelines": {
        return "bg-blue-100 text-blue-800";
      }
      case "Design Principles": {
        return "bg-purple-100 text-purple-800";
      }
      case "Interaction Patterns": {
        return "bg-yellow-100 text-yellow-800";
      }
      case "Visual Guidelines": {
        return "bg-pink-100 text-pink-800";
      }
      default: {
        return "bg-gray-100 text-gray-800";
      }
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "High": {
        return "bg-red-100 text-red-800";
      }
      case "Low": {
        return "bg-green-100 text-green-800";
      }
      case "Medium": {
        return "bg-yellow-100 text-yellow-800";
      }
      default: {
        return "bg-gray-100 text-gray-800";
      }
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Accessibility": {
        return "♿";
      }
      case "Brand Guidelines": {
        return "🏢";
      }
      case "Code Standards": {
        return "💻";
      }
      case "Content Guidelines": {
        return "📝";
      }
      case "Design Principles": {
        return "🎯";
      }
      case "Interaction Patterns": {
        return "🤝";
      }
      case "Visual Guidelines": {
        return "👁️";
      }
      default: {
        return "📋";
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900">Guidelines</h1>
          <p className="mt-4 text-xl text-gray-600">
            Best practices and standards for creating consistent, accessible
            experiences
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {res.data.guidelineConnection.edges?.map((edge) => {
            const guideline = edge?.node;
            if (!guideline) return null;

            return (
              <Link
                className="group block rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md hover:border-blue-300"
                href={`/guidelines/${guideline._sys.filename}`}
                key={guideline._sys.filename}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-3">
                      <span className="text-2xl">
                        {getCategoryIcon(guideline.category || "")}
                      </span>
                      <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600">
                        {guideline.title}
                      </h3>
                    </div>
                    <p className="text-gray-600 text-sm line-clamp-3 mb-4">
                      {guideline.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span
                        className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${getCategoryColor(guideline.category || "")}`}
                      >
                        {guideline.category}
                      </span>
                      {guideline.priority ? (
                        <span
                          className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${getPriorityColor(guideline.priority)}`}
                        >
                          {guideline.priority} Priority
                        </span>
                      ) : null}
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Category Overview */}
        <div className="mt-16">
          <h2 className="text-2xl font-semibold text-gray-900 mb-8">
            Guideline Categories
          </h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7">
            {[
              "Design Principles",
              "Accessibility",
              "Content Guidelines",
              "Visual Guidelines",
              "Interaction Patterns",
              "Brand Guidelines",
              "Code Standards",
            ].map((category) => (
              <div
                className="text-center p-4 rounded-lg bg-white border border-gray-200"
                key={category}
              >
                <div className="text-2xl mb-2">{getCategoryIcon(category)}</div>
                <div
                  className={`text-xs font-medium rounded-full px-2 py-1 ${getCategoryColor(category)}`}
                >
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

export default GuidelinesIndex;
