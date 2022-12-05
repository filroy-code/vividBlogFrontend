import React from "react";
import Pagination from "@mui/material/Pagination";

export default function PaginationButtons(props: {
  setPageNumber: any;
  blogCount: number;
}): JSX.Element {
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    props.setPageNumber(value - 1);
  };
  return (
    <Pagination
      className="paginationContainer"
      onChange={handleChange}
      count={Math.ceil(props.blogCount / 6)}
    />
  );
}
