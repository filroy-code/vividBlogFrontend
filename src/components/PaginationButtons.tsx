import React from "react";
import Pagination from "@mui/material/Pagination";

export default function PaginationButtons(props: {
  pageNumber: number;
  setPageNumber: Function;
  blogCount: number;
}): JSX.Element {
  const { blogCount, pageNumber, setPageNumber } = props;
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPageNumber(value - 1);
  };
  return (
    <Pagination
      className="paginationContainer"
      onChange={handleChange}
      count={Math.ceil(blogCount / 6)}
      page={pageNumber + 1}
    />
  );
}
