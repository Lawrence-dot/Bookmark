import React from "react";

function Extensionbox(props) {
  return (
    <div className="ebox flex flex-col text-center text-black">
      <div className="ebimg mt-7 flex justify-center">
        <img className="w-fit" src={props.src} alt={props.title} />
      </div>
      <div className="ebtitle mt-7">Add to {props.title}</div>

      <div className="ebversion mt-1">Minimum Version {props.min}</div>
      <span className="extdot">
        <img className="w-full" src="./dot.svg" alt="dot" />
      </span>
      <div className="ebbtn mt-auto">
        <button className="w-full">Add Install Extension</button>
      </div>
    </div>
  );
}

export default Extensionbox;
