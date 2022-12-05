import React from "react";
import Skeleton from "@mui/material/Skeleton";

export default function SearchLoadingSkeleton(): JSX.Element {
  const skeletonArray = [0, 1, 2, 3, 4, 5];
  const skeletonDisplay = skeletonArray.map((item) => {
    return (
      <Skeleton className="blogPreview" key={item} height={300}></Skeleton>
    );
  });
  return <div className="blogList">{skeletonDisplay}</div>;
}
