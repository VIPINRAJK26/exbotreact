import React, { useEffect, useState } from "react";
import axios from "axios";
import "./PricingCards.css";

const PricingCards = () => {
  const [plans, setPlans] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/pricing-plans/")
      .then((response) => setPlans(response.data))
      .catch((error) => console.error("Error fetching pricing plans:", error));
  }, []);

  return (
    <div className="container mx-auto px-0 md:px-12">
      <div className="flex flex-wrap pt-5 pb-5">
        {plans.map((plan) => (
          <div className="w-full md:w-1/3 p-3" key={plan.name}>
            <div
              className={`card card-custom ${
                plan.name === "Light"
                  ? "bg-gradient-to-r from-green-400 to-teal-500 text-white"
                  : "bg-white"
              } rounded-lg shadow-lg p-6`}
            >
              <h5 className="text-2xl pb-3 font-bold ml-4">{plan.name}</h5>
              <p
                className={`text-3xl font-bold  ml-4 ${
                  plan.name === "Light" ? "text-white" : "text-gray-700"
                }  `}
              >
                ₹ {plan.price} /-{" "}
                <span className="text-base pl-3">
                  {plan.gst ? "+GST/Year" : "/Year"}
                </span>
              </p>
              <hr className="my-4" />
              <ul
                className={`list-inside  space-y-2 mx-4 ${
                  plan.name === "Light" ? "text-white" : "text-gray-600"
                } `}
              >
                {plan.features.map((feature, index) => (
                  <li key={index}>✔ {feature}</li>
                ))}
              </ul>
              <div
                className={` text-black rounded-md justify-center mt-4 mb-3 p-4 ${
                  plan.name === "Light" ? "bg-green-100 " : "bg-gray-100"
                } `}
              >
                <h5 className="text-sm">Rs {plan.setup_fee} /-</h5>
                <h5 className="text-sm">For setup One API</h5>
              </div>
              <div
                className={` text-black rounded-md justify-center mt-4 mb-3 p-4 ${
                  plan.name === "Light" ? "bg-green-100 " : "bg-gray-100"
                } `}
              >
                <h5 className="text-sm">Monthly Service Charge</h5>
                <h5 className="text-sm">Minimum {plan.monthly_charge} /-</h5>
                <div className="pt-3">
                  <a href="https://app.exapi.in/login">
                    <button className="bg-gradient-to-r from-green-400 to-teal-500 text-white font-bold py-2 px-4 rounded hover:from-green-500 hover:to-teal-600 transition duration-300">
                      Sign Up Now!
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingCards;
