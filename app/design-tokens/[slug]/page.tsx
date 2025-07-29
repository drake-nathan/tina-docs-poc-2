import { client } from "../../../tina/__generated__/databaseClient";
import { DesignTokenPageClient } from "./page-client";

interface DesignTokenPageProps {
  params: {
    slug: string;
  };
}

const DesignTokenPage = async ({ params }: DesignTokenPageProps) => {
  const res = await client.queries.designToken({
    relativePath: `${params.slug}.md`,
  });

  return (
    <DesignTokenPageClient
      data={JSON.parse(JSON.stringify(res.data))}
      query={res.query}
      variables={res.variables}
    />
  );
};

export default DesignTokenPage;
