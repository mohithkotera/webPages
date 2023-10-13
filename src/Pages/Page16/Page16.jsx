import React from "react";
import "./Page16.css";
import Settings from "../../Icons/Settings";
import Html from "../../Icons/Html";

const Page16 = () => {
  return (
    <div className="mainContainer16">
      <nav className="navContainer16">
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <h5 className="head16">Startup 3</h5>

          <a href="" className="listItem22" style={{ marginLeft: 20 }}>
            Tour
          </a>
          <a href="" className="listItem22">
            Prices
          </a>
          <a href="" className="listItem22">
            About
          </a>
          <a href="" className="listItem22">
            F.A.Q.
          </a>
          <a href="" className="listItem22">
            Support
          </a>
        </div>

        <div>
          <button className="button16">Buy $38</button>
        </div>
      </nav>
      <div className="mainFlexcontainer16">
        <div style={{ flex: 1, paddingLeft: "15%" }}>
          <div>
            <h1 className="title16">Suit Up Your Startup</h1>
            <p className="para16">
              We have created a new product that will help designers, developers
              and companies create websites for their startups quickly and
              easily.
            </p>
          </div>
          <div className="flexContainer16">
            <div>
              <Settings />
              <div>
                <h3 className="smalltitle16">Based on Bootstrap 4</h3>
                <p className="smallPara16">
                  HTML layout is based on one of the most common and reliable
                  framework - Bootstrap.
                </p>
              </div>
            </div>
            <div>
              <Html />
              <div>
                <h3 className="smalltitle16">HTML5 & CSS3</h3>
                <p className="smallPara16">
                  We used only time-tested technologies for the best results.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end",
          }}
        >
          <img src="/images/Macbook.png" />
        </div>
      </div>
    </div>
  );
};

export default Page16;
