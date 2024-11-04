import "./ApiPricing.css";
import { useState } from "react";

const ApiPricing = () => {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div>
      <section className="section3 mx-12">
        <div className="container  pricing-section">
          <div className="flex flex-col md:flex-row items-center justify-center text-center">
            {/* Left Side */}
            <div className="md:w-1/2 w-full mb-4 md:mb-0">
              <p className="text-xl font-semibold">Whatsapp API Pricing</p>
              <p className="text-4xl text-green-700 font-bold py-3">
                Pay as per usage
              </p>
              <button
                className="btn-2 bg-gradient-to-r from-green-400 to-teal-500 text-white font-bold py-2 px-4 rounded hover:from-green-500 hover:to-teal-600 transition duration-300 mt-4"
                onClick={() => setModalOpen(true)}
              >
                Country wise price list
              </button>
            </div>

            {/* Modal */}
            {modalOpen && (
              <div
                className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50"
                onClick={() => setModalOpen(false)}
              >
                <div
                  className="modal-dialog modal-dialog-scrollable modal-xl bg-white rounded-lg shadow-lg"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="modal-content">
                    <div className="modal-header">
                      <button
                        type="button"
                        className="btn-close"
                        onClick={() => setModalOpen(false)}
                      >
                        &times;
                      </button>
                    </div>
                    <div className="modal-body">
                      <embed
                        src="/static/docs/docschatbot.pdf"
                        width="100%"
                        height="600px"
                        className="border-0"
                      />
                    </div>
                    <div className="modal-footer">
                      <a
                        href="/static/docs/docschatbot.pdf"
                        download="/static/docs/docschatbot.pdf"
                      >
                        <button
                          type="button"
                          className="btn btn-outline-success"
                          onClick={() => setModalOpen(false)}
                        >
                          Download
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Right Side */}
            <div className="md:w-1/2 w-full">
              <div className="card card-custom text-center bg-white shadow-lg rounded-lg p-5">
                <h6 className="card-title font-semibold text-xl">
                  Let us setup Everything For you
                </h6>
                <h3 className="text-4xl pt-3 text-green-700 font-bold">
                  Custom Chatbot
                </h3>
                <p className="price"></p>
                <hr className="my-4" />
                <ul className="list-none">
                  <li>Full setup for a Number</li>
                  <li>Content for bot</li>
                  <li>Upto 5 templates</li>
                  <li>One year support</li>
                </ul>
                <a
                  href="https://wa.me/+918606123466?text=Order%20Now"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="bg-gradient-to-r from-green-400 to-teal-500 text-white font-bold py-2 px-4 rounded hover:from-green-500 hover:to-teal-600 transition duration-300 mt-4">
                    Order Now
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ApiPricing;
