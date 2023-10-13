import React from "react";
import "./Page2.css";

const Page2 = () => {
  return (
    <div className="mainBg2">
      <nav className="mainConatainer2">
        <div className="heading2">Startup 3</div>
        <div className="lastcontainer2">
          <ul className="list2">
            <li className="listItem2">Subscribe</li>
            <li className="listItem2">Features</li>
          </ul>

          <button className="button2">Sign In</button>
        </div>
      </nav>

      <div className="container2">
        <h1 className="title2">
          Let’s make design <br />
          fast and easy
        </h1>
        <div className="despContainer2">
          <p className="desp2">
            The most important part of the Startup is the samples. The samples
            form a set of 25 usable pages you can use as is or you can add new
            blocks from UI Kit.
          </p>
        </div>
        <div className="buttonContainer2">
          <div>
            <input type="text" placeholder="Your email" className="input" />
            <button className="sendbutton2">Send</button>
          </div>

          <span className="agree2">
            By signing up, you agree to the Terms of Service
          </span>
        </div>
      </div>
    </div>
  );
};

export default Page2;
