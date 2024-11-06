import PlanPricing from "../components/pricing/PlanPricing";
import Navbar from "../components/header/Navbar";
import { Footer } from "../components/Footer/Footer";
import ApiPricing from "../components/pricing/ApiPricing";
import PricingCards from "../components/pricing/PricingCards";
import { Copyright } from "../components/Footer/Copyright";


const Pricing = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="mt-28">
        <PlanPricing />
      </div>
      <div className="">
        <PricingCards />
      </div>
      <div className="">
        <ApiPricing />
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

export default Pricing;
