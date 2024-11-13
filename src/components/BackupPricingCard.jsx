import "./PricingCards.css";

const PricingCards = () => {
  return (
    <div className="container mx-auto px-0 md:px-12">
      <div className="flex flex-wrap pt-5 pb-5">
        {/* Card 1 */}
        <div className="w-full md:w-1/3 p-3">
          <div className="card card-custom bg-white rounded-lg shadow-lg p-6">
            <h5 className="text-2xl pb-3 font-bold ml-4">Signal</h5>
            <p className="text-3xl font-bold text-gray-700 ml-4">
              ₹ 15000 /- <span className="text-base pl-3">+GST/Year</span>
            </p>
            <hr className="my-4" />
            <ul className=" list-inside text-gray-600 space-y-2 mx-4">
              <li>✔ Limited Access</li>
              <li>✔ Unlimited WhatsApp-Flows</li>
              <li>✔ 1 Connected Account</li>
              <li>✔ 50000 Message Credit</li>
              <li>✔ 5000 Subscribers</li>
              <li>✔ Bot Conditional Reply</li>
              <li>✔ Broadcast</li>
              <li>✔ Live chat</li>
              <li>✔ Input Flow Campaign</li>
              <li>✔ 1000 Sequence Campaign</li>
              <li>✔ 3 WhatsApp Catalogues</li>
            </ul>
            <div className="bg-gray-100 rounded-md justify-center mt-4 mb-3 p-4">
              <h5 className="text-sm">Rs 499/- </h5>
              <h5 className="text-sm">For setup One API</h5>
            </div>
            <div className="bg-gray-100 rounded-md justify-center mb-3 p-4">
              <h5 className="text-sm">Monthly Service Charge</h5>
              <h5 className="text-sm">Minimum 500/- </h5>
              <small>(Depends on the Task exclusions)</small>
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

        {/* Card 2 */}
        <div className="w-full md:w-1/3 p-3">
          <div
            className="card card-custom bg-gray-800 text-white rounded-lg shadow-lg p-6"
            id="card2"
          >
            <h5 className="text-2xl pb-3 font-bold ml-4">Light</h5>
            <p className="text-3xl font-bold ml-4">
              ₹ 20000 /- <span className="text-base pl-3 ">+GST/Year</span>
            </p>
            <hr className="my-4" />
            <ul className="list-inside space-y-2 mx-4">
              <li>✔ Limited Feature Access</li>
              <li>✔ Unlimited WhatsApp-Flows</li>
              <li>✔ 3 Connect Account</li>
              <li>✔ 100000 Message Credit</li>
              <li>✔ 5000 Bot AI Reply</li>
              <li>✔ 10000 Subscribers</li>
              <li>✔ Bot Conditional Reply</li>
              <li>✔ Broadcast</li>
              <li>✔ Input Flow Campaign</li>
              <li>✔ Live Chat</li>
              <li>✔ Live Chat Advanced</li>
              <li>✔ 10000 Sequence Campaign</li>
              <li>✔ WhatsApp Embedded Signup</li>
              <li>✔ 10 WhatsApp Carousel Templates</li>
              <li>✔ 5 WhatsApp-Catalogs</li>
              <li>✔ Integration Telegram</li>
            </ul>
            <div className="bg-green-100 text-black rounded-md justify-center mt-4 mb-3 p-4">
              <h5 className="text-sm">Rs 499/- </h5>
              <h5 className="text-sm">For setup One API</h5>
            </div>
            <div className="bg-green-100 text-black rounded-md justify-center mb-3 p-4">
              <h5 className="text-sm">Monthly Service Charge</h5>
              <h5 className="text-sm">Minimum 500/- </h5>
              <small>(Depends on the Task exclusions)</small>
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

        {/* Card 3 */}
        <div className="w-full md:w-1/3 p-3">
          <div className="card card-custom bg-white rounded-lg shadow-lg p-6">
            <h5 className="text-2xl golden-text font-bold pb-3 text-yellow-500 ml-4">
              Bright
            </h5>
            <p className="text-3xl font-bold text-gray-700 ml-4">
              ₹ 25000 /- <span className="text-base pl-3">+GST/Year</span>
            </p>
            <hr className="my-4" />
            <ul className=" list-inside text-gray-600 space-y-2 mx-4">
              <li>✔ Access to all features</li>
              <li>✔ Unlimited WhatsApp-Flows</li>
              <li>✔ 10 Connect Account</li>
              <li>✔ 5000000 Message Credit</li>
              <li>✔ 10000 Bot AI Reply</li>
              <li>✔ Unlimited Subscribers</li>
              <li>✔ Bot Conditional Reply</li>
              <li>✔ Broadcast</li>
              <li>✔ Input-Flow Campaign</li>
              <li>✔ Live Chat</li>
              <li>✔ Live Chat-Advanced</li>
              <li>✔ Live Chat-Translator</li>
              <li>✔ 10000 Sequence Campaign</li>
              <li>✔ WhatsApp Embedded Signup</li>
              <li>✔ 20 WhatsApp Carousel Templates</li>
              <li>✔ 10 WhatsApp-Catalogs</li>
              <li>✔ Integration Telegram/Facebook/Instagram</li>
              <li>✔ Integration-Google Account</li>
              <li>✔ Shopify Integration</li>
              <li>✔ API Developer</li>
            </ul>
            <div className="bg-gray-100 rounded-md justify-center mt-4 mb-3 p-4">
              <h5 className="text-sm">Rs 499/- </h5>
              <h5 className="text-sm">For setup One API</h5>
            </div>
            <div className="bg-gray-100 rounded-md justify-center mb-3 p-4">
              <h5 className="text-sm">Monthly Service Charge</h5>
              <h5 className="text-sm">Minimum 500/- </h5>
              <small>(Depends on the Task exclusions)</small>
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
      </div>
    </div>
  );
};

export default PricingCards;








