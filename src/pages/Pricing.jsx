import PlanPricing from "../components/pricing/PlanPricing";
import ApiPricing from "../components/pricing/ApiPricing";
import PricingCards from "../components/pricing/PricingCards";
import NavbarPricing from "../components/header/NavbarPricing";

const Pricing = () => {
  return (
    <div>
      <div>
        <NavbarPricing />
      </div>
      <div className="mt-5">
        <PlanPricing />
      </div>
      <div className="">
        <PricingCards />
      </div>
      <div className="">
        <ApiPricing />
      </div>
    </div>
  );
};

export default Pricing;
