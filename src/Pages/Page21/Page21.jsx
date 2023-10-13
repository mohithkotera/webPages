import React from "react";
import "./Page21.css";
import Youtube from "../../../public/Icons/Youtube";

const Page21 = () => {
  return (
    <div className="mainContainer21">
      <nav className="navContainer21">
        <h4 className="head21">Startup 3</h4>
        <div className="list21">
          <a href="" className="listItem21">
            Get App
          </a>
          <a href="" className="listItem21">
            Features
          </a>
          <a href="" className="listItem21">
            About
          </a>
          <a href="" className="listItem21">
            F.A.Q.
          </a>
        </div>
        <div>
          <button className="buttonSignIn21">Sign In</button>
          <button className="buttonSignUp21">Sign Up</button>
        </div>
      </nav>
      <div className="lastContainer21">
        <h1 className="title21">Startup 3. Suit Up Your Startup</h1>

        <div className="iconDiv6">
          <Youtube />
        </div>
        <div className="tpcontainer21">
          <div>
            <h4 className="titleSmall21">Drag and Drop Generator</h4>
            <p className="para21">
              Build your site quickly with an intuitive and easy-to-use drag and
              drop interface.
            </p>
          </div>
          <div>
            <h4 className="titleSmall21">Share & Export to HTML</h4>
            <p className="para21">
              Save time and energy by showing a developer about how things.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page21;
