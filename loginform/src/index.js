import React from "react";
import ReactDOM from "react-dom/client";

//import App from './components/functional/App-f';
import App from "./components/class-based/App-class";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
