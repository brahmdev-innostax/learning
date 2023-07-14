import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
const object = {
  isbn: "123-456-222",
  author: {
    lastname: "Doe",
    firstname: "Jane",
  },
  editor: {
    lastname: "Smith",
    firstname: "Jane",
  },
  title: "The Ultimate Database Study Guide",
  category: ["Non-Fiction", "Technology"],
};

root.render(
  <>
    <App object={object} />
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
