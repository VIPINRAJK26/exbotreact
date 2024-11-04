import PlanPricing from "../components/pricing/PlanPricing";
import Navbar from "../components/header/Navbar";
import { Footer } from "../components/Footer/Footer";
import ApiPricing from "../components/pricing/ApiPricing";
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
        <ApiPricing />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Pricing;
