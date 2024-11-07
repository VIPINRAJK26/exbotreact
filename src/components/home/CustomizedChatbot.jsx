import React from 'react'
import "./Customized.css";

const CustomizedChatbot = () => {
  return (
    <div className="mb-48">
      <div className="Customized-header">
        <h1 className="sm:text-3.6xl text-3xl font-thin text-green-500 text-center pb-4">
          Your Customized Chatbots
        </h1>
        <p className="m-auto text-justify text-lg font-bold  sm:w-1/2 w-3/4 py-4">
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
            <button className="button">Direct Connect</button>
          </div>
          <div className="customized-img flex justify-center">
            <img
              src="https://cdn.discordapp.com/attachments/1270232664128880717/1303679923168346164/2ndimg.png?ex=672ca20a&is=672b508a&hm=872cab4238d9b88b359875c4af3baaf807e80b1e48c62b362ccda18f2ee4528d&"
              alt="no image"
              className="w-full sm:w-2/3 h-full align-center "
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomizedChatbot