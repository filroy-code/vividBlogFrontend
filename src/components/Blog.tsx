import React from "react";
import useSWR from "swr";
import { useParams } from "react-router-dom";
import { EnvironmentContext } from "../contexts/EnvironmentContext";
import ReturnToBrowse from "./ReturnToBrowse";

export default function Blog(): JSX.Element {
  const backendURL = React.useContext(EnvironmentContext);

  type Params = {
    slug: string;
  };
  const { slug } = useParams<keyof Params>() as Params;

  const { data } = useSWR(`${backendURL}/blogs/posts/${slug}`);

  const contentRef = React.useRef<HTMLDivElement>(null);
  const [contentLoaded, setContentLoaded] = React.useState<boolean>(false);

  React.useEffect(() => {
    if (contentRef.current != null && data.blogPost[0]) {
      contentRef.current.innerHTML = data.blogPost[0].content;
      setContentLoaded(true);
    }
  }, [data]);

  return (
    data && (
      <div>
        <ReturnToBrowse></ReturnToBrowse>
        <div className="blogPostContent" ref={contentRef}></div>
        {contentLoaded && <ReturnToBrowse></ReturnToBrowse>}
      </div>
    )
  );
}
