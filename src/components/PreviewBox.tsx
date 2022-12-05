import React from "react";
import { IBlog } from "../types/blog";
import { Link } from "react-router-dom";
import { DateTime } from "luxon";

export default function PreviewBox(props: { blogData: IBlog }): JSX.Element {
  return (
    <Link
      to={props.blogData.slug}
      className="blogPreview"
      key={props.blogData.id}
    >
      <div className="imageContainer">
        <img
          className="previewImage"
          src={props.blogData.image}
          alt={props.blogData.title}
        ></img>
      </div>
      <div className="previewText">
        <h4>{props.blogData.title}</h4>
        <p>
          {DateTime.fromISO(`${props.blogData.published_at}`).toLocaleString(
            DateTime.DATE_MED
          )}
        </p>
      </div>
    </Link>
  );
}
