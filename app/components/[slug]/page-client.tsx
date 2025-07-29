"use client";

import { tinaField, useTina } from "tinacms/dist/react";

import type { ComponentQuery } from "../../../tina/__generated__/types";

interface ComponentPageClientProps {
  data: ComponentQuery;
  query: string;
  variables: object;
}

export const ComponentPageClient = (props: ComponentPageClientProps) => {
  const { data } = useTina(props);
  const component = data.component;

  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
  if (!component) {
    return <div>Component not found</div>;
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="border-b border-gray-200 pb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1
                className="text-4xl font-bold text-gray-900"
                data-tina-field={tinaField(component, "title")}
              >
                {component.title}
              </h1>
              <p
                className="mt-2 text-xl text-gray-600"
                data-tina-field={tinaField(component, "description")}
              >
                {component.description}
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-500">
                {component.category}
              </span>
              <span
                className={`inline-flex items-center rounded-full px-3 py-1 text-sm font-medium ${
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
          </div>
        </div>

        {/* Props Table */}
        {component.props && component.props.length > 0 ? (
          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Props</h2>
            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
              <table className="min-w-full divide-y divide-gray-300">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500">
                      Name
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500">
                      Type
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500">
                      Required
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500">
                      Default
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500">
                      Description
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {component.props.map((prop) => (
                    <tr key={prop?.name || Math.random()}>
                      <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900">
                        {prop?.name}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500">
                        <code className="rounded bg-gray-100 px-2 py-1 text-xs">
                          {prop?.type}
                        </code>
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                        {prop?.required ? (
                          <span className="inline-flex items-center rounded-full bg-red-100 px-2.5 py-0.5 text-xs font-medium text-red-800">
                            Required
                          </span>
                        ) : (
                          <span className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800">
                            Optional
                          </span>
                        )}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500">
                        {prop?.defaultValue ? (
                          <code className="rounded bg-gray-100 px-2 py-1 text-xs">
                            {prop.defaultValue}
                          </code>
                        ) : null}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500">
                        {prop?.description}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ) : null}

        {/* Code Example */}
        {component.codeExample ? (
          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Usage</h2>
            <div className="rounded-md bg-gray-900 p-4">
              <pre
                className="text-sm text-gray-100 overflow-x-auto"
                data-tina-field={tinaField(component, "codeExample")}
              >
                <code>{component.codeExample}</code>
              </pre>
            </div>
          </div>
        ) : null}

        {/* Variants */}
        {component.variants && component.variants.length > 0 ? (
          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Variants
            </h2>
            <div className="space-y-6">
              {component.variants.map((variant) => (
                <div
                  className="border border-gray-200 rounded-lg p-6"
                  key={variant?.name || Math.random()}
                >
                  <h3 className="text-lg font-medium text-gray-900 mb-2">
                    {variant?.name}
                  </h3>
                  <p className="text-gray-600 mb-4">{variant?.description}</p>
                  {variant?.code ? (
                    <div className="rounded-md bg-gray-900 p-4">
                      <pre className="text-sm text-gray-100 overflow-x-auto">
                        <code>{variant.code}</code>
                      </pre>
                    </div>
                  ) : null}
                </div>
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};
