import { sanityFetch } from "@/sanity/lib/fetch";
import { PageQuery } from "@/sanity/lib/queries";

export default async function Page() {
  const data = await sanityFetch<any>({ query: PageQuery });
  console.log(data);
  return <div>Page</div>;
}
