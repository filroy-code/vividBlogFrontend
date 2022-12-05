import React from "react";
import { IBlog } from "../types/blog";
import { Link } from "react-router-dom";
import { DateTime } from "luxon";

export default function PreviewBox(props: { blogData: IBlog }): JSX.Element {
  const { slug, id, image, title, published_at } = props.blogData;

  return (
    <Link to={slug} className="blogPreview" key={id}>
      <div className="imageContainer">
        <img className="previewImage" src={image} alt={title}></img>
      </div>
      <div className="previewText">
        <h4>{title}</h4>
        <p>
          {DateTime.fromISO(`${published_at}`).toLocaleString(
            DateTime.DATE_MED
          )}
        </p>
      </div>
    </Link>
  );
}
