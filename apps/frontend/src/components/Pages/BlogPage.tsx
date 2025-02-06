type BlogPageProps = {
  data: {
    title: string;
    slug: {
      current: string;
    };
  };
};

export default function BlogPage(props: BlogPageProps) {
  const { title, slug } = props.data;
  return (
    <div>
      <div>{title}</div>
      <div>{slug.current}</div>
    </div>
  );
}
