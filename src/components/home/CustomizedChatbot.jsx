import { Link } from "react-router-dom";
import "./Customized.css";

const CustomizedChatbot = () => {
  return (
    <div className="mb-48">
      <div className="Customized-header">
        <h1
          data-aos="fade-up"
          data-aos-offset="100"
          data-aos-delay="0"
          className="sm:text-3.6xl text-3xl font-thin text-[#45B65B] text-center pb-4"
        >
          Your Customized Chatbots
        </h1>
        <p
          className=" m-auto text-justify text-lg font-bold  sm:w-1/2 w-3/4 py-4"
        >
          Our Custom WhatsApp chatbot feature can able to design targeting
          communications to automate and personalize interactions on WhatsApp.
          These chat bots are tailored to meet specific business needs, such as
          answering customer inquiries, providing product recommendations,
          handling bookings, and processing orders. By integrating with existing
          systems, they can deliver real-time, context-aware responses, making
          communication more efficient and engaging for users. Customization
          allows businesses to align the chatbot's functionality and tone with
          their brand identity, ensuring a seamless and consistent customer
          experience.
        </p>
      </div>
      <div className="customized-center items-center align-center bg-custom-gradient">
        <div className="customized-bottom sm:flex justify-center items-center">
          <div className="collapse-btn customized-btn w-full justify-center flex">
            <Link
              to={"https://wa.me/+918606123466?text=Hi%20%20ExBot"}
              target="_blank"
            >
              <button className="button">Direct Connect</button>
            </Link>
          </div>
          <div
            className="customized-img flex justify-center"
          >
            <img
              src="/exbot-II-image.png"
              alt="no image"
              className="w-full sm:w-2/3 h-full align-center "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomizedChatbot;
