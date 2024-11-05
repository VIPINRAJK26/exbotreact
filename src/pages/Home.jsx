import Navbar from "../components/header/Navbar";
import { Footer } from "../components/Footer/Footer";
import Hero from "../components/home/Hero";
import CustomizedChatbot from "../components/home/CustomizedChatbot";
import PowerfulFeatures from "../components/home/PowerfulFeatures";


const Home = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <Hero />
      </div>
      <div>
        <CustomizedChatbot />
      </div>
      <div>
        <PowerfulFeatures />
      </div>
      <div className="mt-28">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
