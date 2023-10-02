import React from "react";
import { RouterProvider, createBrowserRouter, Link } from "react-router-dom";
import { MixFetch, Traffic, Mixnodes } from "./components";
import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <h1>Hello World</h1>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Link to="/query">Query the Mixnet</Link>
          <Link to="/mixFetch">MixFetch</Link>
          <Link to="/traffic">Traffic</Link>
        </div>
      </div>
    ),
  },
  {
    path: "query",
    element: (
      <div>
        <h1>MixFetch</h1>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Mixnodes />
          <Link to="/">Go to Home page</Link>
          <Link to="/traffic">Go to Traffic test</Link>
          <Link to="/mixFetch">Go to MixFetch test</Link>
        </div>
      </div>
    ),
  },
  {
    path: "mixFetch",
    element: (
      <div>
        <h1>MixFetch</h1>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <MixFetch />
          <Link to="/">Go to Home page</Link>
          <Link to="/query">Query the Mixnet</Link>
          <Link to="/traffic">Go to Traffic test</Link>
        </div>
      </div>
    ),
  },
  {
    path: "traffic",
    element: (
      <div>
        <h1>Traffic</h1>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Traffic />
          <Link to="/">Go to Home page</Link>
          <Link to="/query">Query the Mixnet</Link>
          <Link to="/mixFetch">Go to MixFetch test</Link>
        </div>
      </div>
    ),
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
