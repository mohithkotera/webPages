import React from "react";
import "./Page4.css";
import Twitter from "../../Icons/Twitter";
import Facebook from "../../Icons/Facebook";
import GooglePlus from "../../Icons/GooglePlus";
import Youtube from "../../Icons/Youtube";

const Page4 = () => {
  return (
    <div>
      <nav className="mainConatainer4">
        <div className="firstcontainer4">
          <div className="heading4">Startup 3</div>
          <ul className="list4">
            <li className="listItem4">Features</li>
            <li className="listItem4">Downloads</li>
            <li className="listItem4">Docs</li>
            <li className="listItem4">Support</li>
            <li className="listItem4">Blog</li>
          </ul>
        </div>
        <div className="lastcontainer4">
          <div style={{ display: "flex", gap: 30 }}>
            <Twitter />
            <Facebook />
            <GooglePlus />
          </div>
        </div>
      </nav>
      <div style={{paddingBottom:30}}>
        <h1 className="title4">
          Simple and beautiful ready <br /> for use blocks
        </h1>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            marginTop: "6%",
            position: "relative",
          }}
        >
          <img src="/images/Image.png" style={{ width: 770, height: 434 }} />
          <div style={{ position: "absolute",top:'45%' }}>
            <Youtube />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page4;
