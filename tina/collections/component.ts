import type { Collection } from "tinacms";

export const ComponentCollection: Collection = {
  name: "component",
  label: "Components",
  path: "content/components",
  format: "md",
  fields: [
    {
      type: "string",
      name: "title",
      label: "Component Name",
      isTitle: true,
      required: true,
    },
    {
      type: "string",
      name: "description",
      label: "Description",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "string",
      name: "category",
      label: "Category",
      options: [
        "Layout",
        "Navigation",
        "Data Display",
        "Inputs",
        "Feedback",
        "Overlay",
        "Other",
      ],
    },
    {
      type: "string",
      name: "status",
      label: "Status",
      options: ["Stable", "Beta", "Deprecated", "In Development"],
    },
    {
      type: "object",
      name: "props",
      label: "Props",
      list: true,
      fields: [
        {
          type: "string",
          name: "name",
          label: "Prop Name",
          required: true,
        },
        {
          type: "string",
          name: "type",
          label: "Type",
          required: true,
        },
        {
          type: "string",
          name: "description",
          label: "Description",
        },
        {
          type: "boolean",
          name: "required",
          label: "Required",
        },
        {
          type: "string",
          name: "defaultValue",
          label: "Default Value",
        },
      ],
      ui: {
        itemProps: (item) => ({
          label: item?.name || "New Prop",
        }),
      },
    },
    {
      type: "rich-text",
      name: "usage",
      label: "Usage Examples",
    },
    {
      type: "string",
      name: "codeExample",
      label: "Code Example",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "object",
      name: "variants",
      label: "Variants",
      list: true,
      fields: [
        {
          type: "string",
          name: "name",
          label: "Variant Name",
        },
        {
          type: "string",
          name: "description",
          label: "Description",
        },
        {
          type: "string",
          name: "code",
          label: "Code Example",
          ui: {
            component: "textarea",
          },
        },
      ],
      ui: {
        itemProps: (item) => ({
          label: item?.name || "New Variant",
        }),
      },
    },
  ],
  ui: {
    router: ({ document }) => `/components/${document._sys.filename}`,
  },
};