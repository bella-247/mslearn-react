import React from "react";
import ReactDOM from "react-dom";

const user= 'Abel';

const root = ReactDOM.createRoot(document.getElementById("app"));

root.render(
    <>
        <h1>Hello, world!</h1>
        <p>welcome to our website, {user}</p>
    </>
);
