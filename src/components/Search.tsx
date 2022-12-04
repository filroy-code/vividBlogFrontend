import React from "react";
import Button from "@mui/material/Button";
import useSWR from "swr";
import { useNavigate } from "react-router-dom";
import { IBlog } from "../types/blog";

export default function Search(): JSX.Element {
  const navigate = useNavigate();
  const [pageNumber, setPageNumber] = React.useState(0);
  const { data, error, isValidating, mutate } = useSWR(
    `http://localhost:4321/blogs/${pageNumber}`
  );

  return (
    <div className="searchPage">
      <div className="blogList">
        {data &&
          data.blogList.map((datum: IBlog) => {
            return (
              <div
                className="blogPreview"
                key={datum.id}
                onClick={() => {
                  navigate(`/${datum.slug}`);
                }}
              >
                <img
                  className="previewImage"
                  src={datum.image}
                  alt={datum.title}
                ></img>
                {datum.title}
              </div>
            );
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
