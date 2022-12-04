import React from "react";
import "./App.css";
import Search from "./components/Search";
import { SWRConfig } from "swr";

function App() {
  const fetcher = (...args: any) =>
    fetch(args).then((response) => response.json());

  return (
    <SWRConfig value={{ fetcher }}>
      <div className="App">
        <Search />
      </div>
    </SWRConfig>
  );
}

export default App;
