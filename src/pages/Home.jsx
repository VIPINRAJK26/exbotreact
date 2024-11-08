import Hero from "../components/home/Hero";
import CustomizedChatbot from "../components/home/CustomizedChatbot";
import PowerfulFeatures from "../components/home/PowerfulFeatures";


const Home = () => {
  return (
    <div>
      
      <div className="mt-28">
        <Hero />
      </div>
      <div className="relative md:bottom-[50px]">
        <CustomizedChatbot />
      </div>
      <div className="w-full px-0 mx-0">
        <PowerfulFeatures />
      </div>
      
    </div>
  );
};

export default Home;
