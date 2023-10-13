import React from "react";
import "./Page9.css";

const Page9 = () => {
  return (
    <div>
      <nav className="navContainer9">
        <h5 className="head9">Startup 3</h5>
        <div className="list9">
          <a href="" className="listItem9" style={{ opacity: 0.3 }}>
            Overview
          </a>
          <a href="" className="listItem9">
            Features
          </a>
          <a href="" className="listItem9">
            Company
          </a>
          <a href="" className="listItem9">
            Platform
          </a>
          <button className="buttonTransp9">Purchase</button>
        </div>
      </nav>
      <div className="flexContainer9">
        <div className="flex1split9">
          <h1 className="title9">You have the design, you have the code</h1>
          <p className="para9">
            We made it so beutiful and simple. It combines landings, pages,
            blogs and shop screens. It is definitely the tool you need in your
            collection!
          </p>
          <button className="button9">Explore Design</button>
        </div>
        <div className="flex2split9">
          <img src="/images/Rectangle.png"/>
        </div>
      </div>
    </div>
  );
};

export default Page9;
