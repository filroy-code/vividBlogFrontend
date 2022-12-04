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

  if (data) {
    console.log(data);
  }

  return <div>Blog</div>;
}
