import React from "react";
import "./Page15.css";

const Page15 = () => {
  return (
    <div>
      <nav className="navContainer15">
        <h4 className="head15">Startup 3</h4>
        <div className="list15">
          <a href="" className="listItem15">
            Tour
          </a>
          <a href="" className="listItem15">
            Prices
          </a>
          <a href="" className="listItem15">
            About
          </a>
          <a href="" className="listItem15">
            F.A.Q.
          </a>
          <a href="" className="listItem15">
            Support
          </a>
        </div>
        <div>
          <a href="" className="listsupport15">
            Login
          </a>
          <button className="buttonSign15">Sign Up</button>
        </div>
      </nav>

      <div className="container15">
        <h1 className="title15">Build Your Own Site like a Lego Constructor</h1>
        <p className="para15">
          We have created a new product that will help designers, developers and
          companies create websites for their startups quickly and easily.
        </p>

        <button className="button15">Create an Account</button>
      </div>
      <div className="lastFlexContainer15">
        <div>
          <img src="/images/Mask3.png" />
          <p className="paraLast15">
            A high-quality solution for a beautiful startup website.
          </p>
        </div>
        <div className="borderRight15"></div>
        <div style={{ paddingLeft: 40 }}>
          <img src="/images/Mask3.png" />
          <p className="paraLast15">
            A high-quality solution for a beautiful startup website.
          </p>
        </div>
        <div className="borderRight15"></div>
        <div style={{ paddingLeft: 40 }}>
          <img src="/images/Mask3.png" />
          <p className="paraLast15">
            A high-quality solution for a beautiful startup website.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page15;
