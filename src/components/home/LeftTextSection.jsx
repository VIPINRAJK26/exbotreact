import React from "react";

function LeftTextSection() {
  return (
    <div className="text-center lg:text-left w-[90%]  md:w-full ">
      <h1 className="text-3xl text-gray-900 lg:text-5xl font-thin mb-4">
        Cross the Barrier of Business With Powerful
      </h1>
      <h2 className="text-4xl lg:text-6xl font-bold text-green-600 mb-4">
        WhatsApp Automation
      </h2>
      <div className="flex justify-center 2xl:my-5">
        <p className="mb-4 text-center text-gray-900 font-bold text-sm lg:text-sm lg:text-left md:w-full ">
          <span className="me-2 before:content-['⬤'] before:pr-1 before:text-[13px] before:text-blue-300">
            E-COMMERCE
          </span>
          <span className="me-2 before:content-['⬤'] before:pr-1 before:text-[13px] before:text-blue-300">
            EDUCATION
          </span>
          <span className="me-2 before:content-['⬤'] before:pr-1 before:text-[13px] before:text-blue-300">
            MANUFACTURING
          </span>
          <span className="me-2 before:content-['⬤'] before:pr-1 before:text-[13px] before:text-blue-300">
            FINANCE HOSPITALITY
          </span>
          <span className="me-2 before:content-['⬤'] before:pr-1 before:text-[13px] before:text-blue-300">
            MEDICAL
          </span>
          <br />
          <span className="me-2 before:content-['⬤'] before:pr-1 before:text-[13px] before:text-blue-300">
            ENTERTAINMENT
          </span>
          <span className="me-2 before:content-['⬤'] before:pr-1 before:text-[13px] before:text-blue-300">
            TECHNOLOGY
          </span>
          <span className="me-2 before:content-['⬤'] before:pr-1 before:text-[13px] before:text-blue-300">
            REAL ESTATE
          </span>
          <span className="me-2 before:content-['⬤'] before:pr-1 before:text-[13px] before:text-blue-300">
            CUSTOMER MANAGEMENT
          </span>
          <br />
          <span className="me-2 before:content-['⬤'] before:pr-1 before:text-[13px] before:text-blue-300">
            24X7 SERVICE WHATSAPP
          </span>
          <span className="me-2 before:content-['⬤'] before:pr-1 before:text-[13px] before:text-blue-300">
            FACEBOOK ADS
          </span>
          <span className="before:content-['⬤'] before:pr-1 before:text-[13px] before:text-blue-300">
            FOLLOW-UPS
          </span>
        </p>
      </div>
      <div className="flex items-center justify-center lg:justify-start gap-1 md:w-1/2 w-full m-auto border-2 border-green-600 rounded-2xl">
        <img
          src="/Whats App Icon-01.svg"
          alt="WhatsApp Icon"
          className="w-20"
        />
        <p className="text-gray-900 font-thin text-center">
          Let's chat to know more about exbot Automaton
        </p>
      </div>
    </div>
  );
}

export default LeftTextSection;
