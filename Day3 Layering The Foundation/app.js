import React, { Component } from "react";
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


// IN JSX below is the React element
const heading = (
    <h1 id = "title" key = "h2" > 
    Namaste React
    </h1>
)


// React Component
const Title = () => (
    <h1 id = "title" key = "h2" > 
    Namaste React
    </h1>
)

// IN JSX below is the React Component
const HeaderComponent = () => {
    return (
        <div>
            {heading} {/* Calling React element */}
            <Title />{/* This is know as Component Compositiion  */}
            <h1>Header Component</h1>
            <h2>Namaste mera naam snehasish hai</h2>
        </div>
    )
}

// HeaderComponent1 and HeaderComponent2 bot are smae and different way of writing 
const HeaderComponent2 = (
    <div id="head2">
        <h1>Header Component</h1>
        <h2>Namaste mera naam snehasish hai</h2>
    </div>
)



const div1 = React.createElement("h1",{
    id: "title",
},"Namaste Everyone");

const heading1 = React.createElement("h1",{
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

root.render(<HeaderComponent />);
// root.render(<HeaderComponent2 />);
