import React from "react";
import ReactDOM from "react-dom/client";
import { ApolloProvider } from "@apollo/client";
import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";

import "./index.css";
import client from "./apollo/apollo-client";
import { Home, Error, LaunchDetail } from "./pages";
import DarkModeToggle from "components/util/DarkModeToggle";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <ApolloProvider client={client}>
    <HashRouter>
      <Routes>
        <Route path="/spacex-launches">
          <Route index element={<Home />} />
          <Route path="detail/:id" element={<LaunchDetail />} />
        </Route>
        <Route path="/spacex-launches/*" element={<Error />} />
      </Routes>
    </HashRouter>
    <DarkModeToggle />
  </ApolloProvider>
);
