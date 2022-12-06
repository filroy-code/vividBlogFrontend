import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export default function ReturnToBrowse(): JSX.Element {
  const navigate = useNavigate();

  return (
    <Button onClick={() => navigate("/")}>
      <div className="returnToBrowseContainer">
        <ArrowBackIcon style={{ paddingLeft: "12px" }}></ArrowBackIcon>
        <span>Return to browse.</span>
      </div>
    </Button>
  );
}
