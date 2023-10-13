import React from "react";
import "./Page14.css";
import Straight from "../../../public/Icons/Straight";
const Page14 = () => {
  return (
    <div className="mainContainer14">
      <nav className="navContainer14">
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <h5 className="head14">Startup 3</h5>
        </div>

        <div className="list14">
          <a href="" className="listItem14" style={{ opacity: 0.3 }}>
            Overview
          </a>
          <a href="" className="listItem14">
            Prices
          </a>
          <a href="" className="listItem14">
            Blog
          </a>
          <a href="" className="listItem14">
            Feedback
          </a>
          <button className="button14">Purchase</button>
        </div>
      </nav>
      <div className="flexContainer14">
        <div className="firstFlex14">
          <h1 className="title14">Generate Awesome Web Pages</h1>
          <p className="para14">
            The most important part of the Startup is the samples. The samples
            form a set of 25 usable pages you can use as is or you can add new
            blocks.
          </p>

          <button className="buttonSignUp14">Learn More</button>
        </div>
        <div className="secondFlex14">
          <div className="card14">
            <h1 className="titleCard14">Sign Up Now</h1>

            <div className="inputDiv14">
              <input placeholder="Your email" type="text" className="input14" />
              <input
                placeholder="Your password"
                type="text"
                className="input14"
              />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "flex-start",
                justifyContent: "center",
              }}
            >
              <input placeholder="Your email" type="checkbox" />
              <p className="agree14">I agree to the Terms of Service.</p>
            </div>
            <div className="secondFlex14">
              <button className="buttonSignIn14">Sign Up</button>
              <div className="orcontainer14">
                <Straight />
                <span className="or14">or</span>
                <Straight />
              </div>
              <button className="buttonSignLogin14">Login via Twitter</button>
              <p className="lastPara14">
                Do you have an Account?
                <a
                  href="#"
                  style={{ color: "#25DAC5", textDecoration: "none" }}
                >
                  Sign In
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page14;
