import React from 'react'
import './Page7.css'

const Page7 = () => {
  return (
    <div className="conatiner7">
      <div className="flex1container7">
        <div className="flexHead7">
          <h5 className="heading7">Startup 3</h5>
          <div>
            <a href="#" className="link7">
              Pricing
            </a>
            <a href="#" className="link7">
              About
            </a>
          </div>
        </div>
        <div>
          <h1 className="title7">
            Great tool to boost <br />
            your startup
          </h1>
          <p className="para7">
            We made it so beutiful and simple. It combines <br /> landings,
            pages blogs and shop screens. It is definitely <br /> the tool you
            need in your collection!
          </p>
        </div>
        <div style={{ marginTop: "10%" ,marginBottom:'3%' }}>
          <button className="button7">Get Started</button>
          <button className="buttonTransp7">Learn More</button>
        </div>
        <small className='smallText7'>By signing up, you agree to the Terms of Service</small>
      </div>

      <div className="flex2container7">
        <img src='/images/Photo.png'/>
      </div>
    </div>
  );
}

export default Page7