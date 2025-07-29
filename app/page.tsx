import Link from "next/link";

import { client } from "../tina/__generated__/databaseClient";

const Home = async () => {
  // Get counts for each collection to show on homepage
  const [componentsRes, tokensRes, guidelinesRes] = await Promise.all([
    client.queries.componentConnection(),
    client.queries.designTokenConnection(),
    client.queries.guidelineConnection(),
  ]);

  const stats = [
    {
      color: "bg-blue-50 text-blue-600 border-blue-200",
      count: componentsRes.data.componentConnection.edges?.length ?? 0,
      description: "Reusable UI components with props and variants",
      href: "/components",
      icon: "🧩",
      name: "Components",
    },
    {
      color: "bg-purple-50 text-purple-600 border-purple-200",
      count: tokensRes.data.designTokenConnection.edges?.length ?? 0,
      description: "Colors, typography, spacing, and other design values",
      href: "/design-tokens",
      icon: "🎨",
      name: "Design Tokens",
    },
    {
      color: "bg-green-50 text-green-600 border-green-200",
      count: guidelinesRes.data.guidelineConnection.edges?.length ?? 0,
      description: "Design principles and best practices",
      href: "/guidelines",
      icon: "📋",
      name: "Guidelines",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Design System
              <span className="text-blue-600"> Documentation</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
              A comprehensive design system built with TinaCMS. Explore our
              components, design tokens, and guidelines to build consistent,
              accessible user interfaces.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-colors"
                href="/components"
              >
                Browse Components
              </Link>
              <Link
                className="text-sm font-semibold leading-6 text-gray-900 hover:text-blue-600 transition-colors"
                href="/admin/index.html"
              >
                Edit Content <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {stats.map((stat) => (
            <Link
              className="group relative overflow-hidden rounded-lg border bg-white p-6 shadow-sm transition-all hover:shadow-md hover:scale-105"
              href={stat.href}
              key={stat.name}
            >
              <div className="flex items-center">
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-lg border ${stat.color}`}
                >
                  <span className="text-2xl">{stat.icon}</span>
                </div>
                <div className="ml-4 flex-1">
                  <h3 className="text-lg font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
                    {stat.name}
                  </h3>
                  <p className="text-2xl font-bold text-gray-600">
                    {stat.count}
                  </p>
                </div>
              </div>
              <p className="mt-4 text-sm text-gray-500">{stat.description}</p>
            </Link>
          ))}
        </div>
      </div>

      {/* Features Section */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Built with TinaCMS
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            This design system documentation is powered by TinaCMS, enabling
            content creators to easily update and maintain design
            specifications.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="text-center">
            <div className="flex justify-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                <span className="text-2xl">✏️</span>
              </div>
            </div>
            <h3 className="mt-4 text-lg font-medium text-gray-900">
              Easy Editing
            </h3>
            <p className="mt-2 text-sm text-gray-600">
              Update component documentation, design tokens, and guidelines
              directly through TinaCMS admin interface.
            </p>
          </div>

          <div className="text-center">
            <div className="flex justify-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-50 text-purple-600">
                <span className="text-2xl">🔄</span>
              </div>
            </div>
            <h3 className="mt-4 text-lg font-medium text-gray-900">
              Live Preview
            </h3>
            <p className="mt-2 text-sm text-gray-600">
              See changes instantly as you edit content, with real-time preview
              of documentation pages.
            </p>
          </div>

          <div className="text-center">
            <div className="flex justify-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-50 text-green-600">
                <span className="text-2xl">📝</span>
              </div>
            </div>
            <h3 className="mt-4 text-lg font-medium text-gray-900">
              Version Control
            </h3>
            <p className="mt-2 text-sm text-gray-600">
              All content changes are tracked in Git, providing full version
              history and collaboration workflows.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
