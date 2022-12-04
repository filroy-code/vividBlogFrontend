import React from "react";
import Button from "@mui/material/Button";
import useSWR from "swr";
import { IBlog } from "../types/blog";
import PreviewBox from "./PreviewBox";

export default function Search(): JSX.Element {
  const [pageNumber, setPageNumber] = React.useState(0);
  const { data, error, isValidating, mutate } = useSWR(
    `http://localhost:4321/blogs/search/${pageNumber}`
  );

  return (
    <div className="searchPage">
      <div className="blogList">
        {data &&
          data.blogList.map((datum: IBlog) => {
            return <PreviewBox key={datum.id} blogData={datum} />;
          })}
      </div>
      <div className="buttonContainer">
        <Button
          onClick={() => {
            setPageNumber((prev) => prev + 1);
          }}
        >
          Next
        </Button>
        <Button
          onClick={() => {
            setPageNumber((prev) => prev - 1);
          }}
        >
          Previous
        </Button>
      </div>
    </div>
  );
}
