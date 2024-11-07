import React from "react";

function LeftTextSection() {
  return (
    <div className="text-center lg:text-left max-w-lg p-8 lg:p-16">
      <h1 className="text-3xl lg:text-5xl font-bold mb-4">
        Cross the Barrier of Business With Powerful
      </h1>
      <h2 className="text-4xl lg:text-6xl font-bold text-green-600 mb-4">
        WhatsApp Automation
      </h2>
      <div className="flex flex-wrap justify-center lg:justify-start gap-2 text-sm lg:text-base text-gray-600 mb-8">
        {[
          "E-COMMERCE",
          "EDUCATION",
          "MANUFACTURING",
          "FINANCE",
          "HOSPITALITY",
          "MEDICAL",
          "ENTERTAINMENT",
          "TECHNOLOGY",
          "REAL ESTATE",
          "CUSTOMER MANAGEMENT",
          "24x7 SERVICE WHATSAPP",
          "FACEBOOK ADS",
          "FOLLOW-UPS",
        ].map((item, index) => (
          <span key={index} className="px-2 py-1 bg-gray-100 rounded-full">
            {item}
          </span>
        ))}
      </div>
      <div className="flex items-center justify-center lg:justify-start gap-2 p-4 border-2 border-green-600 rounded-lg">
        <img
          src="/path-to-whatsapp-icon.png"
          alt="WhatsApp Icon"
          className="w-6 h-6"
        />
        <p className="text-green-600 font-semibold">
          Let's chat to know more about exbot Automaton
        </p>
      </div>
    </div>
  );
}

export default LeftTextSection;
