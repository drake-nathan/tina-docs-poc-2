module.exports = {
  projects: {
    app: {
      documents: [
        "tina/__generated__/queries.gql",
        "tina/__generated__/frags.gql",
        "tina/queries/queries.gql",
        "tina/queries/frags.gql",
        "pages/**/*.{graphql,js,ts,jsx,tsx}",
      ],
      schema: ["tina/__generated__/schema.gql"],
    },
  },
};
