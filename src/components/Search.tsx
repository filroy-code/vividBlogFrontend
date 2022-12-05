import React from "react";
import Button from "@mui/material/Button";
import useSWR from "swr";
import { IBlog } from "../types/blog";
import PreviewBox from "./PreviewBox";
import PaginationButtons from "./PaginationButtons";
import SearchLoadingSkeleton from "./SearchLoadingSkeleton";

export default function Search(): JSX.Element {
  const [pageNumber, setPageNumber] = React.useState(0);
  const { data, error, isValidating, mutate } = useSWR(
    `http://localhost:4321/blogs/search/${pageNumber}`
  );

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
      <PaginationButtons setPageNumber={setPageNumber} />
    </div>
  );
}
