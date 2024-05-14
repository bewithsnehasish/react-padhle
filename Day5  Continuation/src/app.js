import React, { Component } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/header";
import Body  from "./components/body";
import Footer  from "./components/footer";
import { CDN_IMAGE_URL } from "./constants";


/**
             Header
                - Logo 
                - Nav Items(Right Side)
                - Cart 
             Body
                - Search bar 
                - Restraunt list
                    - Restraunt Card * many cards
                        - Image 
                        - Name
                        - Rating 
                        - Cusinies
            Footer
                - Links 
                - Copyrights
*/

const AppLayout = () => {
    return (
        <>
            <Header/>
            <Body/>
            <Footer/>
        </>
    );
}

// How to  give inline styling in react 
const stylobj = {
    backgroundColor: "red",
    color: "white",
}
const jsx = (
    // another way to give  inline styling in react
    // <div
    // style = {StyleObj}>
    //     <h1>JSx</h1>
    // <h1>Second JSX</h1>
    // </div>
    <div
    style={{
        backgroundColor: "red",
        color: "white",
    }}>
    <h1>JSx</h1>
    <h1>Second JSX</h1>
    </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));


root.render(<AppLayout />);