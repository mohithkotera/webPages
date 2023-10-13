import React from "react";
import "./Page6.css";
import Youtube from "../../../public/Icons/Youtube";

const Page6 = () => {
  return (
    <div className="mainContainer6">
      <nav className="navConatainer6">
        <div className="firstcontainer6">
          <ul className="list6">
            <li className="listItem6">Products</li>
            <li className="listItem6">Pricing</li>
            <li className="listItem6">Community</li>
          </ul>
        </div>
        <h3 className="centertitle6">Startup 3</h3>
        <div>
          <small className="listItem6">Login</small>
          <button className="button6">Sign Up</button>
        </div>
      </nav>
      <div className="centerContainer6">
        <div className="centerDiv6">
          A high-quality solution for those who want a beautiful startup website
          quickly
        </div>
        <div className="iconDiv6">
          <Youtube />
        </div>
        <p className="para6">
          We made it so beutiful and simple. It combines landings, pages, blogs
          and shop screens. It is definitely the tool you need in your
          collection!
        </p>
      </div>
    </div>
  );
};

export default Page6;
