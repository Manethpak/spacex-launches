import React from "react";
import ReactDOM from "react-dom/client";
import { ApolloProvider } from "@apollo/client";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App";
import client from "./apollo/apollo-client";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <ApolloProvider client={client}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ApolloProvider>
);
