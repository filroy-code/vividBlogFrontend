import React from "react";
import useSWR from "swr";
import { useParams } from "react-router-dom";

export default function Blog(): JSX.Element {
  type Params = {
    slug: string;
  };
  const { slug } = useParams<keyof Params>() as Params;

  const { data, error, isValidating, mutate } = useSWR(
    `http://localhost:4321/blogs/posts/${slug}`
  );

  const contentRef = React.useRef<HTMLDivElement>(null);

  if (data) {
    console.log(data);
    if (contentRef.current != null) {
      contentRef.current.innerHTML = data.blogPost[0].content;
    }
  }

  return (
    data && (
      <div>
        <div className="blogPostContent" ref={contentRef}></div>
      </div>
    )
  );
}
