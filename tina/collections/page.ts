import type { Collection } from "tinacms";

export const PageCollection: Collection = {
  fields: [
    {
      label: "Header",
      name: "header",
      type: "string",
    },
    {
      fields: [
        { label: "URL", name: "url", type: "image" },
        { label: "Alt Text", name: "alt", type: "string" },
      ],
      label: "Logo",
      name: "logo",
      type: "object",
    },
    {
      fields: [
        { name: "header", type: "string" },
        { name: "description", type: "string" },
        { name: "url", type: "string" },
      ],
      label: "Links",
      list: true,
      name: "links",
      type: "object",
      ui: {
        itemProps: (item) => {
          return {
            label: item.header,
          };
        },
      },
    },
  ],
  format: "md",
  label: "Page",
  name: "page",
  path: "content/pages",
  ui: {
    router: () => "/",
  },
};
