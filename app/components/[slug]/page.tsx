import { client } from "../../../tina/__generated__/databaseClient";
import { ComponentPageClient } from "./page-client";

interface ComponentPageProps {
  params: {
    slug: string;
  };
}

const ComponentPage = async ({ params }: ComponentPageProps) => {
  const res = await client.queries.component({
    relativePath: `${params.slug}.md`,
  });

  return (
    <ComponentPageClient
      data={JSON.parse(JSON.stringify(res.data))}
      query={res.query}
      variables={res.variables}
    />
  );
};

export default ComponentPage;
