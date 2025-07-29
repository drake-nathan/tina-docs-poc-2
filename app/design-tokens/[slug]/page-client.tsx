"use client";

import { tinaField, useTina } from "tinacms/dist/react";
import { TinaMarkdown } from "tinacms/dist/rich-text";

import type { DesignTokenQuery } from "../../../tina/__generated__/types";

import { Breadcrumb } from "../../../components/breadcrumb";

interface DesignTokenPageClientProps {
  data: DesignTokenQuery;
  query: string;
  variables: object;
}

export const DesignTokenPageClient = (props: DesignTokenPageClientProps) => {
  const { data } = useTina(props);
  const designToken = data.designToken;

  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
  if (!designToken) {
    return <div>Design token not found</div>;
  }

  const getColorPreview = (value: string) => {
    if (
      value.startsWith("#") ||
      value.startsWith("rgb") ||
      value.startsWith("hsl")
    ) {
      return (
        <div
          className="w-8 h-8 rounded border border-gray-300 mr-3 flex-shrink-0"
          style={{ backgroundColor: value }}
        />
      );
    }
    return null;
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        <Breadcrumb
          items={[
            { href: "/design-tokens", name: "Design Tokens" },
            { name: designToken.title || "Token" },
          ]}
        />
        {/* Header */}
        <div className="border-b border-gray-200 pb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1
                className="text-4xl font-bold text-gray-900"
                data-tina-field={tinaField(designToken, "title")}
              >
                {designToken.title}
              </h1>
              <p
                className="mt-2 text-xl text-gray-600"
                data-tina-field={tinaField(designToken, "description")}
              >
                {designToken.description}
              </p>
            </div>
            <span className="inline-flex items-center rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-800">
              {designToken.category}
            </span>
          </div>
        </div>

        {/* Tokens Table */}
        {designToken.tokens && designToken.tokens.length > 0 ? (
          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              Tokens
            </h2>
            <div className="space-y-4">
              {designToken.tokens.map((token) => (
                <div
                  className="border border-gray-200 rounded-lg p-6 bg-gray-50"
                  key={token?.name || Math.random()}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-center flex-1">
                      {getColorPreview(token?.value || "")}
                      <div className="flex-1">
                        <div className="flex items-center space-x-4">
                          <h3 className="text-lg font-medium text-gray-900">
                            {token?.name}
                          </h3>
                          <code className="rounded bg-white px-3 py-1 text-sm font-mono border">
                            {token?.value}
                          </code>
                        </div>
                        {token?.cssVariable ? (
                          <p className="mt-1 text-sm text-gray-600 font-mono">
                            {token.cssVariable}
                          </p>
                        ) : null}
                        {token?.description ? (
                          <p className="mt-2 text-gray-700">
                            {token.description}
                          </p>
                        ) : null}
                      </div>
                    </div>
                  </div>

                  {token?.usage ? (
                    <div className="mt-4 p-4 bg-white rounded border">
                      <h4 className="text-sm font-medium text-gray-900 mb-2">
                        Usage
                      </h4>
                      <p className="text-sm text-gray-600">{token.usage}</p>
                    </div>
                  ) : null}

                  {token?.figmaToken ? (
                    <div className="mt-2 text-sm text-gray-500">
                      <span className="font-medium">Figma:</span>{" "}
                      {token.figmaToken}
                    </div>
                  ) : null}
                </div>
              ))}
            </div>
          </div>
        ) : null}

        {/* Examples */}
        {designToken.examples ? (
          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Usage Examples
            </h2>
            <div
              className="prose max-w-none"
              data-tina-field={tinaField(designToken, "examples")}
            >
              <TinaMarkdown content={designToken.examples} />
            </div>
          </div>
        ) : null}

        {/* Related Tokens */}
        {designToken.relatedTokens && designToken.relatedTokens.length > 0 ? (
          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Related Token Categories
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              {designToken.relatedTokens.map((related) => (
                <div
                  className="border border-gray-200 rounded-lg p-4"
                  key={related?.category || Math.random()}
                >
                  <h3 className="font-medium text-gray-900">
                    {related?.category}
                  </h3>
                  <p className="mt-1 text-sm text-gray-600">
                    {related?.relationship}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};
