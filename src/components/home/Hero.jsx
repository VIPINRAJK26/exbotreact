import IconSection from "./IconSection";

const Hero = () => {
  return (
    <div>
      <div className="md:flex justify-center" style={{maxHeight:"100vh"}}>
        <div className="hero-left w-full justify-center md:mt-2">
          <div className="">
            <h1 className="md:text-5xl flex md:text-start text-extra text-center text-4xl  justify-center ">
              Cross the Barrier of Business <br /> With Powerful
            </h1>
            <h1 className="md:text-3.6xl text-5xl md:text-start text-center py-3 font-bold text-[#45B65B] flex  justify-center">
              Whatsapp Automation
            </h1>
            <div className="flex justify-center mt-4">
              <p className="mb-4 text-center font-bold text-sm text-lg-start lg:text-left">
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
          </div>
          <div className="flex flex-col xl:flex-row items-center text-center xl:pl-0 xl:justify-center my-4 xl:ml-20">
            <div className="border border-green-600 rounded-2xl  flex justify-center xl:w-5/12 lg:w-9/12 md:w-5/12 sm:w-8/12 w-11/12 items-center">
              <div className="">
                <a
                  href="https://wa.me/+918606123466?text=Hi%20%20ExBot"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ width: "83px" }}
                >
                  <img
                    src="\Whats App Icon-01.svg"
                    alt="no image"
                    className="p-0 m-0 w-1/2"
                  />
                </a>
              </div>
              <div>
                <a
                  href="https://wa.me/+918606123466?text=Hi%20ExBot"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-decoration-none text-black w-full text-center"
                >
                  <p className="text-center w-full text-md  xl:w-full">
                    Let's chat to know more about exbot Automation
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-right md:w-1/2 h-auto md:justify-start flex">
          <img
            src="/Mobile -01-01new.png"
            alt=""
            className="w-full relative md:right-[135px] bottom-[100px]"
          />
        </div>
      </div>
      <div>
        <IconSection />
      </div>
    </div>
  );
};

export default Hero;
