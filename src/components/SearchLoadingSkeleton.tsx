import React from "react";
import Skeleton from "@mui/material/Skeleton";

export default function SearchLoadingSkeleton(props: {
  boxesToRender: number;
}): JSX.Element {
  const skeletonArray = [];

  for (let i = 0; i < props.boxesToRender; i++) {
    skeletonArray.push(i);
  }

  const skeletonDisplay = skeletonArray.map((item) => {
    return (
      <Skeleton className="blogPreview" key={item} height={300}></Skeleton>
    );
  });
  return <div className="blogList">{skeletonDisplay}</div>;
}
