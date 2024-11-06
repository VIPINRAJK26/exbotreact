import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faMapMarkerAlt,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";


export const Footer = () => {
  return (
    <div>
      <footer className="bg-[#484848] text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Quick Links */}
            <div className="text-center">
              <h5 className="text-lg font-semibold">Quick Links</h5>
              <ul className="list-none pt-2 space-y-2">
                <li>
                  <a
                    href="https://app.exapi.in/login"
                    className="hover:underline"
                  >
                    My Account
                  </a>
                </li>
                <li>
                  <a href="index.html" className="hover:underline">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="pricing2.html" className="hover:underline">
                    Pricing
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div className="text-center">
              <h5 className="text-lg font-semibold">Contact</h5>
              <ul className="list-none pt-2 space-y-2">
                <li>
                  <i className="fas fa-map-marker-alt"></i> 12/550, CALICUT,
                  KERALA 673633 India
                </li>
                <li>
                  <i className="fas fa-phone"></i> +91 8606123466
                </li>
                <li>
                  <i className="fas fa-envelope"></i> exbotcare@exbot.in
                </li>
              </ul>
            </div>

            {/* Follow Us */}
            <div className="text-center">
              <h5 className="text-lg font-semibold">Follow Us</h5>
              <div className="flex justify-center space-x-4 pt-2">
                <a
                  href="https://www.facebook.com/exbotai"
                  className="text-white hover:text-gray-400"
                >
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
                <a
                  href="https://twitter.com/exbotai"
                  className="text-white hover:text-gray-400"
                >
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
                <a
                  href="https://www.instagram.com/exbotai/"
                  className="text-white hover:text-gray-400"
                >
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a
                  href="https://www.linkedin.com/company/exbotai"
                  className="text-white hover:text-gray-400"
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a
                  href="https://www.youtube.com/@exbotai"
                  className="text-white hover:text-gray-400"
                >
                  <FontAwesomeIcon icon={faYoutube} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
