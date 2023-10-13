import React from "react";
import "./Page22.css";

// import RoundTwitter from "../../Icons/roundTwitter";
// import FacebookR from "../../Icons/FacebookR";
// import GoogleR from "../../Icons/GoogleR";
// import Github from "../../Icons/Github";

const Page22 = () => {
  return (
    <div className="mainContainer22">
      <nav className="navContainer22">
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <h5 className="head22">Startup 3</h5>

          <a href="" className="listItem22" style={{ marginLeft: 20 }}>
            Products
          </a>
          <a href="" className="listItem22">
            Pricing
          </a>
          <a href="" className="listItem22">
            Community
          </a>
        </div>

        <div className="list22">
          <a href="" className="listItem22">
            Help
          </a>
          <a href="" className="listItem22">
            Login
          </a>
          <button className="button22">Sign Up</button>
        </div>
      </nav>
      <div className="lastContainer22">
        <h1 className="title22">The Amazing Hubble</h1>
        <p className="para22">
          The first area of specialization in telescopes has to do with the
          types of telescopes people use. The three designs of telescopes that
          most people use are the Refractor
        </p>
      </div>

      <div className="bottomContainer22">
        <input type="text" placeholder="Your Name" className="input22" />
        <input type="text" placeholder="Your Email" className="input22" />
        <button className="buttonget22">Get Started</button>
      </div>
      <div className="lastContainer22">
        <h3 className="orClass22">or sign up with</h3>
        {/* <div style={{ display: "flex", flexDirection: "row", gap: 20 }}>
          <div className="borderCls22">
            <RoundTwitter />
          </div>
          <div className="borderCls22">
            <FacebookR />
          </div>
          <div className="borderCls22">
            <GoogleR />
          </div>
          <div className="borderCls22">
            <Github />
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Page22;
