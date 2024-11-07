import { Link } from "react-router-dom";

export const Copyright = () => {
  return (
    <div className="pb-3">
      <div class="w-full bg-gray-100">
        <div class="text-center">
          <p class="pt-2 text-sm">© 2024 Exbot. All rights reserved.</p>
          <div class="flex justify-center space-x-8 md:space-x-12 mt-2">
            <div>
              <Link to={"/privacy"} class="hover:text-blue-950">
                Privacy Policy
              </Link>
            </div>
            <div>
              <Link to={"/terms"} class="hover:text-blue-950">
                Terms and Conditions
              </Link>
            </div>
            <div>
              <Link to={"/refund"} class="hover:text-blue-950">
                Refund Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
