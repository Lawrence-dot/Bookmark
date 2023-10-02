import React from "react";
import Extensionbox from "../Components/Extensionbox";

function Extensions() {
  var extensions = [
    { src: "./chrome.svg", title: "Chrome", min: "63" },
    { src: "./firefox.svg", title: "Firefox", min: "64" },
    { src: "./opera.svg", title: "Opera", min: "63" },
  ];
  return (
    <div className="extensions">
      <div className="extensionsbdy container-d">
        <div className="extensionhead flex flex-col justify-center">
          <span className="font-bold mx-auto"> Download the Extension </span>
          <div className="extxt mx-auto">
            <p className="sm:text-center mt-5">
              {" "}
              We've got more browsers in the pipeline. Please do let us know if
              you've got a favourite you'd like us to proritize
            </p>
          </div>
        </div>
        <div className="extension-content mt-20 grid grid-cols-1 lg:grid-cols-3">
          {extensions.map((each, index) => {
            return (
              <Extensionbox
                key={index}
                src={each.src}
                title={each.title}
                min={each.min}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Extensions;
