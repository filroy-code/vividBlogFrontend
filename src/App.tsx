import React from "react";
import "./App.css";
import Search from "./components/Search";
import { SWRConfig } from "swr";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Divider from "@mui/material/Divider";
import Blog from "./components/Blog";
import Header from "./components/Header";

function App() {
  const fetcher = (...args: any) =>
    fetch(args).then((response) => response.json());

  return (
    <SWRConfig value={{ fetcher }}>
      <div className="App">
        <BrowserRouter>
          <Header></Header>
          <Divider style={{ marginBottom: "10px" }} />
          <Routes>
            <Route path="/" element={<Search />}></Route>
            <Route path="/:slug" element={<Blog />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </SWRConfig>
  );
}

export default App;
