import React from "react";
import "./Page12.css";

const Page12 = () => {
  return (
    <div className="mainDiv12">
      <div className="container12">
        <div className="leftflex12">
          <h5 className="titlesmall12">Startup 3</h5>
          <h1 className="titlelarge12">
            Beautiful <br />
            Startup <br />
            Framework for <br /> Your Next <br /> Project
          </h1>
          <p className="para12">
            A high-quality solution for those <br /> who want a bea-utiful
            startup
            <br />
            website quickly.
          </p>

          <button className="button12">Download from App Store</button>
        </div>

        <div className="rightflex12">
          <div style={{ position: "relative" }}>
            <img
              src="/images/XClay.png"
              className="img12"
              style={{
                position: "absolute",
                top: 35,
                left: "20%",
              }}
            />
            <img
              src="/images/iPhoneX.png"
              style={{
                position: "absolute",
                right: "40%",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page12;
