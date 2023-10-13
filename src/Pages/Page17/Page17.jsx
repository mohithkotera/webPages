import React from "react";
import "./Page17.css";
import FacebookWhite from "../../Icons/FacebookWhite";
import TwitterWhite from "../../Icons/TwitterWhite";
import Youtube from "../../Icons/Youtube";

const Page17 = () => {
  return (
    <div className="mainContainer17">
      <nav className="navContainer17">
        <h4 className="head17">Startup 3</h4>
        <div className="list17">
          <a href="" className="listItem17">
            Tour
          </a>
          <a href="" className="listItem17">
            Features
          </a>
          <a href="" className="listItem17">
            Pricing
          </a>
          <a href="" className="listItem17">
            Blog
          </a>
          <a
            href=""
            className="listItem17"
            style={{ position: "relative", top: 3 }}
          >
            <FacebookWhite />
          </a>
          <a
            href=""
            className="listItem17"
            style={{ position: "relative", top: 3 }}
          >
            <TwitterWhite />
          </a>
        </div>
      </nav>
      <div className="flex17">
        <div className="leftFlex17">
          <h3 className="title17">Simple design & prototyping</h3>

          <p className="para17">
            Startup Framework gives you complete freedom over your creative
            process — you don’t have to think about any technical aspects.
          </p>
        </div>
        <div className="rightFlex17">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <button className="button17">Get Started</button>
            <small className="small17">It is absolutely free.</small>
          </div>
        </div>
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
        <img src="/images/Rectangle1.png" style={{ width: 770, height: 434 }} />
        <div style={{ position: "absolute", top: "45%" }}>
          <Youtube />
        </div>
      </div>
    </div>
  );
};

export default Page17;
