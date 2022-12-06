import React from "react";
import useSWR from "swr";
import { IBlog } from "../types/blog";
import PreviewBox from "./PreviewBox";
import PaginationButtons from "./PaginationButtons";
import SearchLoadingSkeleton from "./SearchLoadingSkeleton";
import { EnvironmentContext } from "../contexts/EnvironmentContext";

export default function Search(props: {
  pageNumber: number;
  setPageNumber: any;
}): JSX.Element {
  const { pageNumber, setPageNumber } = props;
  const backendURL = React.useContext(EnvironmentContext);
  const { data } = useSWR(`${backendURL}/blogs/search/${pageNumber}`);

  const [blogCount, setBlogCount] = React.useState<number | null>(null);

  React.useEffect(() => {
    if (data && data.blogCount) {
      setBlogCount(parseInt(data.blogCount[0].count));
    }
  }, [data]);

  return (
    <div className="searchPage">
      {data && data.blogList ? (
        <div className="blogList">
          {data.blogList.map((datum: IBlog) => {
            return <PreviewBox key={datum.id} blogData={datum} />;
          })}
        </div>
      ) : (
        <SearchLoadingSkeleton boxesToRender={6} />
      )}
      {blogCount && (
        <PaginationButtons
          pageNumber={pageNumber}
          setPageNumber={setPageNumber}
          blogCount={blogCount}
        />
      )}
    </div>
  );
}
