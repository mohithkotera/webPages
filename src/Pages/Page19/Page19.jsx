import React from "react";
import "./Page19.css";
import Print from "../../Icons/Print";
import Apple from "../../Icons/Apple";

const Page19 = () => {
  return (
    <div>
      <nav className="navContainer19">
        <h5 className="head19">Startup 3</h5>
        <div className="list19">
          <a href="" className="listItem19">
            Home
          </a>
          <a href="" className="listItem19">
            Features
          </a>
          <a href="" className="listItem19">
            About
          </a>
          <a href="" className="listItem19">
            Blog
          </a>
          <a href="" className="listItem19">
            Contact Us
          </a>
          <a href="" className="listItem19">
            <Print />
          </a>
          <a href="" className="listItem19">
            <Apple />
          </a>
        </div>
      </nav>
      <div className="container19">
        <div className="firstflex19">
          <span className="dotsfirst19">. </span>
          <span className="dots19">. </span>
          <span className="dots19">. </span>
          <span className="dots19">. </span>
          <span className="dots19">. </span>
        </div>
        <div className="middleflex19">
          <h1 className="title19">The best Apple Watch apps</h1>

          <p className="para19">
            Startup Framework gives you complete freedom over your creative
            process — you don’t have to think about any technical aspects. There
            are no limits and absolutely no coding.
          </p>

          <button className="button19">Download from App Store</button>
        </div>

        <div className="lastflex19">
          <img src="/images/image4.png" />
        </div>
      </div>
    </div>
  );
};

export default Page19;
