import React from "react";
import { useState } from "react";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";

function Faqcomp(props) {
  const [show, setshow] = useState(false);
  return (
    <div className="faqcomp text-black my-5">
      <div className="faquestion cursor-pointer font-bold">
        <div className="flex" onClick={() => setshow(!show)}>
          <h2 className="fque"> {props.que}</h2>
          <span className="ml-auto transition-d">
            {show ? (
              <MdKeyboardArrowUp color="red" />
            ) : (
              <MdKeyboardArrowDown color="blue" />
            )}
          </span>
        </div>
      </div>
      <div className={`fanswer ${show && "show"} mt-5`}>
        <p className="fans">{props.ans}</p>
      </div>
    </div>
  );
}

export default Faqcomp;
