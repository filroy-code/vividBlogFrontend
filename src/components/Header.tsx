import React from "react";
import { Link } from "react-router-dom";
import VividTheory from "../resources/vividtheory.png";

export default function Header(): JSX.Element {
  return (
    <header>
      <Link to="/">
        <img src={VividTheory} alt="Vivid Theory"></img>
      </Link>
    </header>
  );
}
