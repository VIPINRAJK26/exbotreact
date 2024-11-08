import PlanPricing from "../components/pricing/PlanPricing";
import ApiPricing from "../components/pricing/ApiPricing";
import PricingCards from "../components/pricing/PricingCards";


const Pricing = () => {
  return (
    <div>
      
      <div className="mt-8">
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
