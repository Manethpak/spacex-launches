import React from "react";
import ReactDOM from "react-dom/client";
import { ApolloProvider } from "@apollo/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./index.css";
import client from "./apollo/apollo-client";
import Home from "./pages/Home";
import LaunchDetail from "./pages/LaunchDetail";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <ApolloProvider client={client}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:id" element={<LaunchDetail />} />
      </Routes>
    </BrowserRouter>
  </ApolloProvider>
);
