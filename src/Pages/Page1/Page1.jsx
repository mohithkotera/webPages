import React from "react";
import "./Page1.css";
import Search from "../../Icons/Search";

const Page1 = () => {
  return (
    <div>
      <nav className="mainConatainer">
        <div className="heading">Startup 3</div>
        <ul className="list">
          <li className="listItem" style={{ color: "#15143966" }}>
            Home
          </li>
          <li className="listItem" style={{ color: "#15143966" }}>
            Features
          </li>
          <li className="listItem" style={{ color: "#15143966" }}>
            Blog
          </li>
          <li className="listItem" style={{ color: "#15143966" }}>
            Shop
          </li>
          <span className="searchIcon">
            <Search />
          </span>
        </ul>
        <div className="lastcontainer">
          <a href="#" className="signIn">
            Sign In
          </a>
          <button className="button">Sign In</button>
        </div>
      </nav>
      <div className="container">
        <h1 className="title">Startup Framework</h1>
        <div className="despContainer">
          <p className="desp">
            We made it so beutiful and simple. It combines landings, pages,
            blogs and shop screens. It is definitely the tool you need in your
            collection!
          </p>
        </div>
        <div className="buttonContainer">
          <button className="purchasebutton">Purchase Now for $248</button>

          <span className="learn">Learn More</span>
        </div>
      </div>
    </div>
  );
};

export default Page1;
