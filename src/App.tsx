import React from "react";
import "./App.css";
import Search from "./components/Search";
import { SWRConfig } from "swr";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Divider from "@mui/material/Divider";
import Blog from "./components/Blog";
import Header from "./components/Header";
import { EnvironmentContext } from "./contexts/EnvironmentContext";

function App() {
  const fetcher = (...args: any) =>
    fetch(args).then((response) => response.json());

  const backendURL =
    process.env.REACT_APP_ENVIRONMENT === "production"
      ? process.env.REACT_APP_PRODUCTION_BACKEND
      : "http://localhost:4321";

  const [pageNumber, setPageNumber] = React.useState<number>(0);

  return (
    <SWRConfig value={{ fetcher }}>
      <EnvironmentContext.Provider value={backendURL}>
        <div className="App">
          <BrowserRouter>
            <Header setPageNumber={setPageNumber}></Header>
            <Divider style={{ marginBottom: "10px", maxWidth: "90vw" }} />
            <Routes>
              <Route
                path="/"
                element={
                  <Search
                    pageNumber={pageNumber}
                    setPageNumber={setPageNumber}
                  />
                }
              ></Route>
              <Route path="/:slug" element={<Blog />}></Route>
            </Routes>
          </BrowserRouter>
        </div>
      </EnvironmentContext.Provider>
    </SWRConfig>
  );
}

export default App;
