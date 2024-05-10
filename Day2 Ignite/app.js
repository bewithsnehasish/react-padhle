import React from "react";
import ReactDOM from "react-dom/client";

/***
 * HMR - Hot Module Reloading
 * File Watcher algorithm - C++
 * BUILDING
 * MINIFY
 * Cleaning our Code
 * Dev and Production algorithm 
 * Image Optimization
 * Caching while development 
 * Compression
 * Compatible with older version of browser 
 * HTTPS on dev
 * port Number
 * Consistent Hashing Algorithm
 */

const div1 = React.createElement("h1",{
    id: "title",
},"Namaste Everyone");

const heading = React.createElement("h1",{
    id : "Title",
},"Heading 1");

const heading2 = React.createElement("h2",{
    id : "description",
    className : "heading",
},"Heading 2");

const container = React.createElement("div",{
    id : "container",
},[heading,heading2]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);
