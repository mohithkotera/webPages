import React from "react";
import "./Page5.css";

const Page5 = () => {
  return (
    <div>
      <nav className="mainConatainer5">
        <div className="firstcontainer5">
          <div className="heading5">Startup 3</div>
        </div>
        <div className="lastcontainer5">
          <ul className="list5">
            <li className="listItem5">Portfolio</li>
            <li className="listItem5">How it Works</li>
            <li className="listItem5">Pricing</li>
            <li className="listItem5">About</li>
            <li className="listItem5">Login</li>
          </ul>
          <button className="button5">Sign Up</button>
        </div>
      </nav>
      <div style={{ paddingBottom: 30 }}>
        <h1 className="title4">
          A high-quality solution startup <br /> website quickly
        </h1>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <button className="getStartedbutton5">Get Started</button>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            marginTop: "6%",
            position: "relative",
          }}
        >
          <img src="/images/Mac.png" style={{ width: 770, height: 434 }} />
        </div>
        <div className="paraDiv5">
          <p
            className="bottomPara5"
            style={{ borderRight: "groove", borderColor: "#15143966" }}
          >
            Startup Framework works on devices supporting Retina Display. Feel
            the clarity in each pixel.
          </p>
          <p className="bottomPara5">
            There are a lot of different components that will help you create
            the perfect look and feel for your startup.
          </p>
          <p
            className="bottomPara5"
            style={{ borderLeft: "groove", borderColor: "#15143966" }}
          >
            You can easily combine components in a variety ways for different
            design projects. It’s easy!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page5;
