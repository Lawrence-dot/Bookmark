import React from "react";

function Contact() {
  return (
    <div className="contact" id="contact">
      <div className="contactbdy container-d ">
        <div className="contactcnt flex flex-col">
          <span className="cntsmall"> 10000+ ALREADY JOINED</span>
          <span className="my-10 cts">
            Stay Up-To-Date With What We Are Doing
          </span>
          <div className="contactform justify-center flex">
            <input type="text" placeholder="exampl@gmail.com" />
            <button>Contact us</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
