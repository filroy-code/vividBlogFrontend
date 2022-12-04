import React from "react";
import Button from "@mui/material/Button";
import useSWR from "swr";
import { IBlog } from "../types/blog";

export default function Search(): JSX.Element {
  const [pageNumber, setPageNumber] = React.useState(0);
  const { data, error, isValidating, mutate } = useSWR(
    `http://localhost:4321/blogs/${pageNumber}`
  );

  return (
    <div className="searchPage">
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
      {data &&
        data.blogList.map((datum: IBlog) => {
          return (
            <div className="blogPreview" key={datum.id}>
              {datum.title}
            </div>
          );
        })}
    </div>
  );
}
