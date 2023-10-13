import React from "react";
import "./Page3.css";

const Page3 = () => {
  return (
    <div>
      <nav className="mainConatainer3">
        <div className="firstcontainer3">
          <div className="heading3">Startup 3</div>
          <ul className="list3">
            <li className="listItem3">Products</li>
            <li className="listItem3">Community</li>
            <li className="listItem3">Pricing</li>
          </ul>
        </div>
        <div className="lastcontainer3">
          <ul className="list3">
            <li className="listItem3">API</li>
            <li className="listItem3">Help</li>
            <li className="listItem3">Login</li>
          </ul>
          <button className="button3">Sign Up</button>
        </div>
      </nav>
      <div className="flexDiv3">
        <div className="firstflexcontainer3">
          <div className="firstSubcontainer3">
            <h2 className="h2text3">
              A high-quality solution for those who <br /> want a beautiful
              startup website quickly
            </h2>
            <div className="formDiv3">
              <input className="input3" type="email" placeholder="Your email" />
              <input
                className="input3"
                type="password"
                placeholder="Your password"
              />
              <button className="signIn3">Sign In</button>
              <small className="small3">
                By signing up, you agree to the Terms of Service
              </small>
            </div>
          </div>
        </div>

        <div className="secondflexcontainer3">
          <div className="leftImgContainer3">
            <img src="/images/Mask.png" />
          </div>
          <p className="rightPara3">
            We made it so beutiful and simple. It combines landings, pages,
            blogs and shop screens. It is definitely the tool you need in your
            collection!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page3;
