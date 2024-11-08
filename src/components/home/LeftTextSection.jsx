import { Link } from "react-router-dom";

function LeftTextSection() {
  return (
    <div className="hero-left text-center lg:text-left sm:px-0 px-8 w-full ">
      <h1 className="text-3xl text-[gray-900] lg:text-5xl font-thin mb-4">
        Cross the Barrier of Business With Powerful
      </h1>
      <h2 className="text-4xl lg:text-6xl font-bold text-[#45B65B] mb-4">
        WhatsApp Automation
      </h2>
      <div className="flex flex-1 justify-center relative sm:top-0 top-[20px]  2xl:my-5 ">
        <p class=" service mb-4  md:ml-2 text-center font-bold text-xs md:text-sm lg:text-left ">
          <h6 class="me-2" id="h6">
            E-COMMERCE
          </h6>
          <h6 class="me-2">EDUCATION</h6>
          <h6 class="me-2">MANUFACTURING</h6>
          <h6 class="me-2">FINANCE HOSPITALITY</h6>
          <h6 class="me-2">MEDICAL</h6>
          <h6 class="me-2">ENTERTAINMENT</h6>
          <h6 class="me-2">TECHNOLOGY</h6>
          <h6 class="me-2">REAL ESTATE</h6>
          <h6 class="me-2">CUSTOMER MANAGEMENT</h6>
          <h6 class="me-2">24X7 SERVICE WHATSAPP</h6>
          <h6 class="me-2">FACEBOOK ADS</h6>
          <h6>FOLLOW-UPS</h6>
        </p>
      </div>
      <div className="flex items-center justify-center relative sm:top-0 top-[50px] lg:justify-start gap-1 md:w-1/2 w-full m-auto border-2 border-green-500 md:rounded-2xl rounded-xl">
        <Link
          to={"https://wa.me/+918606123466?text=Hi%20%20ExBot"}
          target="_blank"
        >
          <img
            src="/Whats App Icon-01.svg"
            alt="WhatsApp Icon"
            className="w-24"
          />
        </Link>
        <Link
          to={"https://wa.me/+918606123466?text=Hi%20%20ExBot"}
          target="_blank"
        >
          <p className="text-gray-900 font-thin pr-1 text-center hover:text-green-600">
            Let's chat to know more about exbot Automaton
          </p>
        </Link>
      </div>
    </div>
  );
}

export default LeftTextSection;
