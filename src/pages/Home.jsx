import Navbar from "../components/header/Navbar";
import { Footer } from "../components/Footer/Footer";
import Hero from "../components/home/Hero";
import CustomizedChatbot from "../components/home/CustomizedChatbot";
import PowerfulFeatures from "../components/home/PowerfulFeatures";
import { Copyright } from "../components/Footer/Copyright";


const Home = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="mt-28">
        <Hero />
      </div>
      <div>
        <CustomizedChatbot />
      </div>
      <div>
        <PowerfulFeatures />
      </div>
      <div>
        <Footer />
      </div>
      <div>
        <Copyright />
      </div>
    </div>
  );
};

export default Home;
