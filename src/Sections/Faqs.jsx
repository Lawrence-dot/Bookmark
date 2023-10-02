import React from "react";
import Faqcomp from "../Components/Faqcomp";

function Faqs() {
  var faqes = [
    {
      que: "What is a bookmark",
      ans: "The aim of this project is to automate the car and the car parking as well. It discusses a project which present a miniature model of an automated car parking system that can regulate and manage the number of cars that can be parked in a given space at any given time, based on the availability of a parking spot. Automated parking is a method of controlling the entry and exit of cars using a sensing device. The entry or exit of cars in the parking lot is commanded by Arduino base application.",
    },
    {
      que: "How can i request a new browser",
      ans: "The aim of this project is to automate the car and the car parking as well. It discusses a project which present a miniature model of an automated car parking system that can regulate and manage the number of cars that can be parked in a given space at any given time, based on the availability of a parking spot. Automated parking is a method of controlling the entry and exit of cars using a sensing device. The entry or exit of cars in the parking lot is commanded by Arduino base application.",
    },
    {
      que: "Is there a mobile app",
      ans: "The aim of this project is to automate the car and the car parking as well. It discusses a project which present a miniature model of an automated car parking system that can regulate and manage the number of cars that can be parked in a given space at any given time, based on the availability of a parking spot. Automated parking is a method of controlling the entry and exit of cars using a sensing device. The entry or exit of cars in the parking lot is commanded by Arduino base application.",
    },
    {
      que: "What is the pricing plan",
      ans: "The aim of this project is to automate the car and the car parking as well. It discusses a project which present a miniature model of an automated car parking system that can regulate and manage the number of cars that can be parked in a given space at any given time, based on the availability of a parking spot. Automated parking is a method of controlling the entry and exit of cars using a sensing device. The entry or exit of cars in the parking lot is commanded by Arduino base application.",
    },
  ];

  return (
    <div className="faqs" id="faq">
      <div className="faqbdy container-d">
        <div className="faqhead flex flex-col justify-center">
          <span className="font-bold mx-auto">
            {" "}
            Frequently Asked Questions{" "}
          </span>
          <div className="faqtxt mx-auto">
            <p className="sm:text-center mt-5 md:mt-5">
              {" "}
              Here are some of our FAQs. if you have any other questions you'd
              like answered please feel free to email us.
            </p>
          </div>
        </div>

        <div className="faqcontent flex flex-col">
          {faqes.map((each, index) => {
            return <Faqcomp key={index} que={each.que} ans={each.ans} />;
          })}
        </div>

        <div className="favbtns mt-7 ">
          <button className="minfo mx-auto block">More Info</button>
        </div>
      </div>
    </div>
  );
}

export default Faqs;
