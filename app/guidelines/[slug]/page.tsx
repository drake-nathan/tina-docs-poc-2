import { client } from "../../../tina/__generated__/databaseClient";
import { GuidelinePageClient } from "./page-client";

interface GuidelinePageProps {
  params: {
    slug: string;
  };
}

const GuidelinePage = async ({ params }: GuidelinePageProps) => {
  const res = await client.queries.guideline({
    relativePath: `${params.slug}.md`,
  });

  return (
    <GuidelinePageClient
      data={JSON.parse(JSON.stringify(res.data))}
      query={res.query}
      variables={res.variables}
    />
  );
};

export default GuidelinePage;
