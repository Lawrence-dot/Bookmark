import React from "react";
import Topnav from "../Components/Topnav";

function Firstsection() {
  return (
    <div className="first" id="first">
      <div className="firstcontainer">
        <div className="flexcontent container-d">
          <Topnav />
          <div className="firstctn flex flex-col lg:flex-row">
            <div className="w-full sm:w-50 ">
              <div className="lg:mr-18 flex flex-col herofsec">
                <span className="mb-3 lg:mt-20 font-bold tx-xl">
                  {" "}
                  A Simple Bookmark Manager
                </span>
                <span className="mt-5 herotxt">
                  A clean and simple interface to organize your favourite
                  websites. Open a new browser and see your sites load
                  instantly. Try it for free.
                </span>
                <div className="herobtns flex flex-col sm:flex-row mt-10">
                  <span className="sm:mr-5 mb-3 sm:mb-0">Get it on Chrome</span>
                  <span className="sm:mr-5 mb-3 sm:mb-0">
                    Get it on Firefox
                  </span>
                </div>
              </div>
            </div>

            <div className="w-full mt-7 sm:mt-none sm:w-50">
              <div className="">
                <img src="./hero.svg" alt="hero" />
              </div>
              <div className="heroimgback"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Firstsection;
