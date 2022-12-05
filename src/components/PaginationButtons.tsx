import React from "react";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import IconButton from "@mui/material/IconButton";

export default function PaginationButtons(props: { setPageNumber: any }) {
  return (
    <div className="buttonContainer">
      <IconButton
        onClick={() => {
          props.setPageNumber((prev: number) => prev - 1);
        }}
      >
        <ChevronLeftIcon />
      </IconButton>
      <IconButton
        onClick={() => {
          props.setPageNumber((prev: number) => prev + 1);
        }}
      >
        <ChevronRightIcon />
      </IconButton>
    </div>
  );
}
