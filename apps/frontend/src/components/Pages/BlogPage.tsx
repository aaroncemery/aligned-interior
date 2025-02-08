"use client";

import { BlogPostQueryResult } from "../../../sanity.types";
import { useEffect, useState } from "react";

export default function BlogPage(props: { data: BlogPostQueryResult }) {
  const [hasRendered, setHasRendered] = useState(false);
  const { title = "Add a title" } = props.data || {};

  useEffect(() => {
    setHasRendered(true);
  }, []);

  // Don't render content until after first mount
  if (!hasRendered) {
    return null;
  }

  return (
    <div>
      <div>hero</div>
    </div>
  );
}
