import React from "react";
import "./Page8.css";
import Round from "../../Icons/Round";
import BeIcon from "../../Icons/BeIcon";

const Page8 = () => {
  return (
    <div className="mainContainer8">
      <div className="list8">
        <a href="" className="listItem8" style={{ opacity: 0.3 }}>
          Home
        </a>
        <a href="" className="listItem8">
          Features
        </a>
        <a href="" className="listItem8">
          Pricing
        </a>
        <a href="" className="listItem8">
          Blog
        </a>
        <a href="" className="listItem13">
          <Round />
        </a>

        <a href="" className="listItem13">
          <BeIcon />
        </a>
      </div>
      <div className="secondContainer8">
        <h3 className="head8">Startup 3</h3>
        <h2 className="title8">Forget About Code</h2>
        <p className="para8">
          Startup Framework gives you complete freedom over your creative
          process — you don’t have to think about any technical aspects. There
          are no limits and absolutely no coding.
        </p>

        <button className="button8">Create An Account</button>
      </div>
    </div>
  );
};

export default Page8;
