import React from "react";
import "./Page11.css";

const Page11 = () => {
  return (
    <div className="main11">
      <nav className="navContainer11">
        <h5 className="head11">Startup 3</h5>
        <div className="list11">
          <a href="" className="listItem11" style={{ opacity: 0.3 }}>
            About
          </a>
          <a href="" className="listItem11">
            Features
          </a>
          <a href="" className="listItem11">
            Contacts
          </a>
          <button className="buttonbuy11">Buy</button>
        </div>
      </nav>

      <div className="mainflex11">
        <div style={{ flex: 1 }}>
          <h1 className="title11">
            Great things
            <br /> begin in a <br /> small way
          </h1>
          <p className="para11">
            We haven’t forgotten about <br /> responsive layout. With Startup{" "}
            <br />
            Framework, you can create a <br />
            website with full mobile support.
          </p>
          <div>
            <button className="button11">Get Started</button>
            <small className="small11">Learn More</small>
          </div>
        </div>
        <div style={{ display:'flex',flex: 1,justifyContent:'end', }}>
            <img src="/images/iPadPro.png"/>
        </div>
      </div>
    </div>
  );
};

export default Page11;
