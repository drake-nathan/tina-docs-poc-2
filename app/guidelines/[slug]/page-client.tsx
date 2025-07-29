"use client";

import { tinaField, useTina } from "tinacms/dist/react";
import { TinaMarkdown } from "tinacms/dist/rich-text";

import type { GuidelineQuery } from "../../../tina/__generated__/types";

import { Breadcrumb } from "../../../components/breadcrumb";

interface GuidelinePageClientProps {
  data: GuidelineQuery;
  query: string;
  variables: object;
}

export const GuidelinePageClient = (props: GuidelinePageClientProps) => {
  const { data } = useTina(props);
  const guideline = data.guideline;

  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
  if (!guideline) {
    return <div>Guideline not found</div>;
  }

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

  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
        <Breadcrumb
          items={[
            { href: "/guidelines", name: "Guidelines" },
            { name: guideline.title || "Guideline" },
          ]}
        />
        {/* Header */}
        <div className="border-b border-gray-200 pb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1
                className="text-4xl font-bold text-gray-900"
                data-tina-field={tinaField(guideline, "title")}
              >
                {guideline.title}
              </h1>
              <p
                className="mt-2 text-xl text-gray-600"
                data-tina-field={tinaField(guideline, "description")}
              >
                {guideline.description}
              </p>
            </div>
            <div className="flex items-center space-x-3">
              <span
                className={`inline-flex items-center rounded-full px-3 py-1 text-sm font-medium ${getCategoryColor(guideline.category || "")}`}
              >
                {guideline.category}
              </span>
              {guideline.priority ? (
                <span
                  className={`inline-flex items-center rounded-full px-3 py-1 text-sm font-medium ${getPriorityColor(guideline.priority)}`}
                >
                  {guideline.priority} Priority
                </span>
              ) : null}
            </div>
          </div>
        </div>

        {/* Content */}
        {guideline.content ? (
          <div className="mt-8">
            <div
              className="prose max-w-none"
              data-tina-field={tinaField(guideline, "content")}
            >
              <TinaMarkdown content={guideline.content} />
            </div>
          </div>
        ) : null}

        {/* Key Principles */}
        {guideline.principles && guideline.principles.length > 0 ? (
          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              Key Principles
            </h2>
            <div className="space-y-6">
              {guideline.principles.map((principle) => (
                <div
                  className="border border-gray-200 rounded-lg p-6 bg-gray-50"
                  key={principle?.title || Math.random()}
                >
                  <h3 className="text-lg font-medium text-gray-900 mb-2">
                    {principle?.title}
                  </h3>
                  <p className="text-gray-700 mb-3">{principle?.description}</p>
                  {principle?.example ? (
                    <div className="mt-3 p-4 bg-white rounded border-l-4 border-blue-400">
                      <p className="text-sm text-gray-600">
                        <span className="font-medium text-gray-900">
                          Example:
                        </span>{" "}
                        {principle.example}
                      </p>
                    </div>
                  ) : null}
                </div>
              ))}
            </div>
          </div>
        ) : null}

        {/* Do's and Don'ts */}
        {guideline.dosDonts &&
        (guideline.dosDonts.dos?.length || guideline.dosDonts.donts?.length) ? (
          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              Do&apos;s and Don&apos;ts
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              {/* Do's */}
              {guideline.dosDonts.dos && guideline.dosDonts.dos.length > 0 ? (
                <div>
                  <h3 className="text-lg font-medium text-green-800 mb-4 flex items-center">
                    <span className="mr-2">✅</span>
                    Do&apos;s
                  </h3>
                  <div className="space-y-3">
                    {guideline.dosDonts.dos.map((item) => (
                      <div
                        className="flex items-start p-3 bg-green-50 rounded-lg border border-green-200"
                        key={item?.text || Math.random()}
                      >
                        <span className="text-green-600 mr-2 mt-0.5">•</span>
                        <p className="text-sm text-green-800">{item?.text}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ) : null}

              {/* Don'ts */}
              {guideline.dosDonts.donts &&
              guideline.dosDonts.donts.length > 0 ? (
                <div>
                  <h3 className="text-lg font-medium text-red-800 mb-4 flex items-center">
                    <span className="mr-2">❌</span>
                    Don&apos;ts
                  </h3>
                  <div className="space-y-3">
                    {guideline.dosDonts.donts.map((item) => (
                      <div
                        className="flex items-start p-3 bg-red-50 rounded-lg border border-red-200"
                        key={item?.text || Math.random()}
                      >
                        <span className="text-red-600 mr-2 mt-0.5">•</span>
                        <p className="text-sm text-red-800">{item?.text}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        ) : null}

        {/* Related Resources */}
        {guideline.resources && guideline.resources.length > 0 ? (
          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              Related Resources
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              {guideline.resources.map((resource) => (
                <a
                  className="block p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:shadow-sm transition-all"
                  href={resource?.url || "#"}
                  key={resource?.title || Math.random()}
                  {...(resource?.url?.startsWith("http") && {
                    rel: "noopener noreferrer",
                    target: "_blank",
                  })}
                >
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium text-gray-900">
                      {resource?.title}
                    </h3>
                    <span className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded">
                      {resource?.type}
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};
