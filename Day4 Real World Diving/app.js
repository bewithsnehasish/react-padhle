import React, { Component } from "react";
import ReactDOM from "react-dom/client";


/**
             Header
                - Logo 
                - Nav Items(Right Side)
                - Cart 
             Body
                - Search bar 
                - Restraunt list
                    - Restraunt Card
                        - Image 
                        - Name
                        - Rating 
                        - Cusinies
            Footer
                - Links 
                - Copyrights
*/


const Title = () => (
    <a href="/">
            <img alt="logo" className="logo" src="https://foodvilla.no/src/img/logo.png"/>
    </a>
)
const Header =() =>{
    return (
        <div className="header">
            <Title />
            <div className = "nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
} ;

const Body = () =>{
    return(
        <h4>Body</h4>
    )
}

const Footer = () =>{
    return(
        <h3>Footer</h3>
    )
}

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