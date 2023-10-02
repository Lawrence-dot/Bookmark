import React from "react";
import { CgMenu } from "react-icons/cg";

function Topnav() {
  const opennav = () => {
    document.getElementById("sidenav").classList.toggle("show");
    document.getElementById("Home").classList.add("noscroll");
  };

  const selectnav = (nav) => {
    document.getElementById(`${nav}`).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="flex topnav">
      <div className="topnavbdy flex">
        <div className="topicon mr-auto">
          <img className="h-full" src="./logo.svg" alt="logo" />
        </div>

        <div
          className="navtoggler ml-auto cursor-pointer ml-auto font-bold block sm:hidden"
          onClick={opennav}
        >
          <CgMenu />{" "}
        </div>
        <div className="navlinks hidden sm:block ml-auto">
          <span onClick={() => selectnav("features")}>Features</span>
          <span onClick={() => selectnav("faq")}>Pricing</span>
          <span onClick={() => selectnav("contact")}>Contact</span>
          <span className="tlogin">Login</span>
        </div>
      </div>
    </div>
  );
}

export default Topnav;
