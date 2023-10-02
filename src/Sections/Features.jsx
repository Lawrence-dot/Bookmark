import React from "react";
import { useState } from "react";

function Features() {
  const [active, setactive] = useState(1);
  const togglenav = (nav) => {
    setactive(nav);
    let tabc = Array.from(document.getElementsByClassName("tbcontainer"));
    let tabs = Array.from(document.getElementsByClassName("ftnavlnk"));
    tabs.forEach((each) => {
      each.classList.remove("show");
      each.id === nav && each.classList.add("show");
    });

    tabc.forEach((each) => {
      each.classList.remove("show");
      each.id === nav && each.classList.add("show");
    });
  };
  return (
    <div className="features" id="features">
      <div className="featuresbdy container-d">
        <div className="fbsyhead flex justify-center">
          <span className="font-bold mx-auto"> Features </span>
        </div>
        <div className="featurescontent">
          <div className="fctxt mx-auto">
            <p className="my-5 featurestxt">
              {" "}
              Our aim is to make it quick and easy for you to access your
              favourite websites. Your bookmarks sync between your devices so
              you can access them on the go.
            </p>
          </div>

          <div className="featurestab flex flex-col justify-center text-black">
            <div className="ftabhead flex">
              <span
                className="show ftnavlnk"
                onClick={() => togglenav("1")}
                id="1"
              >
                {" "}
                Simple Bookmarking
              </span>
              <span className="ftnavlnk" onClick={() => togglenav("2")} id="2">
                {" "}
                Speedy Searching
              </span>
              <span className="ftnavlnk" onClick={() => togglenav("3")} id="3">
                {" "}
                Easy Sharing
              </span>
            </div>

            <div className="ftabcontent">
              <div className="flex flex-col lg:flex-row mt-7 ">
                <div className="w-full lg:w-1/2">
                  <div className="transition-all">
                    <img
                      className="transition-all tabimage"
                      src={`./tab${active}.svg `}
                      alt="hero"
                    />
                  </div>
                  <div className="tabimgback"></div>
                </div>

                <div className="flex transition-d flex-col w-full lg:w-1/2">
                  <div className="tbcontainer show" id="1">
                    <h2 className="tbheader">Bookmark in one click</h2>
                    <p>
                      {" "}
                      Organize your bookmarks however you like. Our simple
                      drag-and-drop interface gives you complete control over
                      how you manage your favourite sites.
                    </p>
                    <button className="minfo">More Info</button>
                  </div>

                  <div className="tbcontainer" id="2">
                    <h2 className="tbheader">Intelligent Search</h2>
                    <p>
                      {" "}
                      Organize your bookmarks however you like. Our simple
                      drag-and-drop interface gives you complete control over
                      how you manage your favourite sites.
                    </p>
                    <button className="minfo">More Info</button>
                  </div>

                  <div className="tbcontainer" id="3">
                    <h2 className="tbheader">Share Your Bookmarks</h2>
                    <p>
                      {" "}
                      Organize your bookmarks however you like. Our simple
                      drag-and-drop interface gives you complete control over
                      how you manage your favourite sites.
                    </p>
                    <button className="minfo">More Info</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
