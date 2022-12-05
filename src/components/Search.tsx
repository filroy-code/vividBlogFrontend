import React from "react";
import Button from "@mui/material/Button";
import useSWR from "swr";
import { IBlog } from "../types/blog";
import PreviewBox from "./PreviewBox";
import PaginationButtons from "./PaginationButtons";
import SearchLoadingSkeleton from "./SearchLoadingSkeleton";

export default function Search(): JSX.Element {
  const [pageNumber, setPageNumber] = React.useState(0);
  const { data } = useSWR(`http://localhost:4321/blogs/search/${pageNumber}`);

  const [blogCount, setBlogCount] = React.useState<number | null>(null);

  React.useEffect(() => {
    if (data && data.blogCount) {
      setBlogCount(parseInt(data.blogCount[0].count));
    }
  }, [data]);

  return (
    <div className="searchPage">
      {data && data.blogList ? (
        <div className="blogList">
          {data.blogList.map((datum: IBlog) => {
            return <PreviewBox key={datum.id} blogData={datum} />;
          })}
        </div>
      ) : (
        <SearchLoadingSkeleton />
      )}
      {blogCount && (
        <PaginationButtons
          setPageNumber={setPageNumber}
          blogCount={blogCount}
        />
      )}
    </div>
  );
}
