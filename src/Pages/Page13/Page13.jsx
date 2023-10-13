import React from "react";
import "./Page13.css";
import Round from "../../Icons/Round";
import Insta from "../../Icons/Insta";
import BeIcon from "../../Icons/BeIcon";

const Page13 = () => {
  return (
    <div className="maincontainer13">
      <nav className="navContainer13">
        <h4 className="head13">Startup 3</h4>
        <div className="list13">
          <a href="" className="listItem13">
            Tour
          </a>
          <a href="" className="listItem13">
            Features
          </a>
          <a href="" className="listItem13">
            Pricing
          </a>
          <a href="" className="listItem13">
            Blog
          </a>
          <a href="" className="listItem13">
            <Round />
          </a>
          <a href="" className="listItem13">
            <Insta />
          </a>
          <a href="" className="listItem13">
            <BeIcon />
          </a>
        </div>
        <button className="buttonbuy13">Get Started</button>
      </nav>
      <div>
        <h1 className="title13">
          Create sites <br /> without routine
        </h1>

        <p className="para13">
          Startup gives you complete freedom over your <br /> creative process —
          you don’t have to think about <br /> any technical aspects. There are
          no limits and <br /> absolutely no coding.
        </p>
      </div>
    </div>
  );
};

export default Page13;
