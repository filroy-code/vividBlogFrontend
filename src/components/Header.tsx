import React from "react";
import { Link } from "react-router-dom";
import VividTheory from "../resources/vividtheory.png";

export default function Header(props: {
  setPageNumber: Function;
}): JSX.Element {
  return (
    <header>
      <Link
        to="/"
        onClick={() => {
          props.setPageNumber(0);
        }}
      >
        <img src={VividTheory} alt="Vivid Theory"></img>
      </Link>
    </header>
  );
}
