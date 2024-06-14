import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

if (process.env.NODE_ENV === "production") {
    console.log = () => {};
    console.warn = () => {};
    console.error = () => {};
    console.info = () => {};
} else {
    console.log("This should only appear in development mode");
}

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
