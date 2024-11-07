
const PowerfulFeatures = () => {
  return (
    <div className=" text-white bg-custom-gradient">
      <div
        data-aos="zoom-in-up"
        data-aos-duration="1500"
        className="text-center pt-16 pb-16"
      >
        <h1 className="md:text-5xl text-2xl md:px-0 px-5 font-thin">Powerful Features in Exbot</h1>
      </div>

      <div className="flex flex-col md:flex-row justify-center pt-5 pb-5">
        {/* Left Section */}
        <div className="flex flex-col gap-6 md:w-1/2">
          <FeatureItem
            imgSrc="\Bot Reply.svg"
            title="Bot Reply"
            description="Responses to customer inquiries, 24/7 engagement and support, customer satisfaction, customize and adaptability. Reduces response times, consistent interaction."
            animation="fade-right"
            duration="1000"
            className="text-gray-500"
          />
          <FeatureItem
            imgSrc="/Chat Widget-01.svg"
            title="Chat Widget"
            description="Integrates into website, enabling real-time customer interactions, enhances user experience, instant support and answers to queries, increasing satisfaction, always connected with customers."
            animation="fade-right"
            duration="2000"
          />
          <FeatureItem
            imgSrc="/Input Flow-01.svg"
            title="Input Flow"
            description="Interactive conversations by guiding customers through step-by-step input sequences. Captures specific information, answers queries, and leads users to outcomes seamlessly."
            animation="fade-right"
            duration="3000"
          />
          <FeatureItem
            imgSrc="/Message Template-01.svg"
            title="Message Template"
            description="Offers businesses pre-approved, customizable message formats for seamless communication. Ensures compliance with WhatsApp guidelines and saves time."
            animation="fade-right"
            duration="4000"
          />
        </div>

        {/* Divider Line */}
        <div className="hidden md:block w-px bg-teal-200 h-[40rem]" />

        {/* Right Section */}
        <div className="flex flex-col gap-6 md:w-1/2">
          <FeatureItem
            imgSrc="/Broadcast Template-01.svg"
            title="Broadcast Template"
            description="Send personalized messages to individuals or groups, efficiently share updates, promotions, and important information to effectively engage audiences."
            animation="fade-right"
            duration="1000"
          />
          <FeatureItem
            imgSrc="/Sequence-01.svg"
            title="Sequence"
            description="Automates customer interactions by pre-scheduling communication flows, providing personalized follow-ups and nurturing leads."
            animation="fade-right"
            duration="2000"
          />
          <FeatureItem
            imgSrc="/Whatsapp Flows-01.svg"
            title="Whatsapp Flows"
            description="Creates customized customer interactions through predefined paths, ideal for onboarding or sales to streamline processes and boost engagement."
            animation="fade-right"
            duration="3000"
          />
          <FeatureItem
            imgSrc="/E-Commerce Store Integrations-01.svg"
            title="E-Commerce Store Integrations"
            description="Connects online stores, allowing customers to browse, shop, and purchase through chat, simplifying the shopping experience."
            animation="fade-right"
            duration="4000"
          />
        </div>
      </div>
    </div>
  );
};

const FeatureItem = ({ imgSrc, title, description, animation, duration }) => (
  <div data-aos={animation} data-aos-duration={duration} className="md:flex justify-center text-center md:text-start w-7/12 m-auto gap-4 pb-4">
    <div className="flex-shrink-0 justify-center flex">
      <img src={imgSrc} height="70" alt={title} className="h-20" />
    </div>
    <div className="max-w-md">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-justify">{description}</p>
    </div>
  </div>
  )

export default PowerfulFeatures