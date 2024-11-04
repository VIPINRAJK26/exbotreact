import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <section className="bg-white">
        <header className="fixed inset-x-0 top-0 z-50 bg-white ">
          <nav
            aria-label="Global"
            className="flex items-center justify-between p-6 lg:px-[9rem] header-xl"
          >
            <div className="flex lg:flex-1">
              <Link to="/" className="-m-1.5 p-1.5">
                <img
                  alt="nav-logo"
                  src="\Exbot logo-01.svg"
                  loading="lazy"
                  className="h-16 w-auto"
                />
              </Link>
            </div>

            <div className="flex lg:hidden">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Open main menu</span>
                <Bars3Icon aria-hidden="true" className="h-6 w-6" />
              </button>
            </div>

            <div className="hidden lg:flex lg:pt-5 lg:gap-x-12">
              <div className="relative">
                <Link
                  to="/"
                  className="text-base font-medium leading-6 text-gray-900 hover:text-green-500"
                >
                  About
                </Link>
              </div>

              <div className="relative">
                <Link
                  to="/"
                  className="text-base font-medium leading-6 text-gray-900 hover:text-green-500"
                >
                  Login
                </Link>
              </div>

              <div className="relative">
                <Link
                  to="/contact"
                  className="text-base font-medium leading-6 text-gray-900 hover:text-green-500"
                >
                  Pricing
                </Link>
              </div>
            </div>

            <div className="nav-button lg:pt-5 lg:flex lg:flex-1 lg:justify-end">
              <div class="hidden collapse-btn lg:block lg:ml-0 xl:ml-0 xl:pl-0 lg:pl-0">
                <a href="https://app.exapi.in/login">
                  <button class="button">My Account</button>
                </a>
              </div>
            </div>
          </nav>

          <Dialog
            open={mobileMenuOpen}
            onClose={setMobileMenuOpen}
            className="lg:hidden"
          >
            <div className="fixed inset-0 z-50" />
            <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-neutral-100 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
              <div className="flex items-center justify-between">
                <a href="#" className="-m-1.5 p-1.5">
                  <img
                    alt="nav-logo"
                    src="\Exbot logo-01.svg"
                    className="h-8 w-auto"
                    loading="lazy"
                  />
                </a>
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="-m-2.5 rounded-md p-2.5 text-gray-700"
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon aria-hidden="true" className="h-6 w-6" />
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6">
                    <Link
                      to={"/"}
                      onClick={() => setMobileMenuOpen(false)}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-green-100"
                    >
                      Home
                    </Link>

                    <Link
                      to={"/"}
                      onClick={() => setMobileMenuOpen(false)}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-green-100"
                    >
                      Login
                    </Link>
                    <Link
                      to={"/contact"}
                      onClick={() => setMobileMenuOpen(false)}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-green-100"
                    >
                      Pricing
                    </Link>
                  </div>
                </div>
              </div>
            </DialogPanel>
          </Dialog>
        </header>
      </section>
    </>
  );
}

export default Navbar;
