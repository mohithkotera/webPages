import React from "react";
import "./Page10.css";

const Page10 = () => {
  return (
    <div className="mainDiv10">
      <nav className="navContainer10">
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <h5 className="head10">Startup 3</h5>

          <a href="" className="listItem10" style={{ marginLeft: 20 }}>
            Products
          </a>
          <a href="" className="listItem10">
            Pricing
          </a>
          <a href="" className="listItem10">
            Community
          </a>
        </div>

        <div className="list10">
          <a href="" className="listItem10">
            Help
          </a>
          <a href="" className="listItem10">
            Login
          </a>
          <button className="button10">Sign Up</button>
        </div>
      </nav>

      <div className="midcontainer10">
        <h1 className="title10">
          A high-quality solution for those who want a beautiful startup website
          quickly
        </h1>
        <p className="para10">
          Startup contains components and complex blocks which can easily be
          integrated into almost any design.
        </p>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <button className="getStartbutton10">Get Started for Free</button>
        </div>

        <div style={{ display: "flex", flexDirection: "row",gap:30,marginLeft:40 }}>
          <div style={{ display: "flex", flexDirection: "row",gap:10 }}>
            <img src="/images/Mask.png" />
            <p className="paralast10">
              A high-quality solution for a beautiful startup website.
            </p>
          </div>
          <div style={{ display: "flex", flexDirection: "row",gap:10 }}>
            <img src="/images/Mask2.png" />
            <p className="paralast10">
              Learn more about Startup Framework in demo version.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page10;
