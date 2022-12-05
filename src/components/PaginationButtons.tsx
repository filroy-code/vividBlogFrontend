import React from "react";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import IconButton from "@mui/material/IconButton";
import Pagination from "@mui/material/Pagination";

export default function PaginationButtons(props: {
  setPageNumber: any;
  blogCount: number;
}) {
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
