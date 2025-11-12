"use client";

import SocialIcon from "./ui/SocialIcon";

export default function Footer() {
  return (
    <footer className="mt-auto bg-[#111827] text-gray-300 border-t border-gray-800">
      <div className="food-container py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">FoodWagen</h4>
            <ul className="space-y-2">
              <li>
                <a className="food-footer-link" href="#">
                  About
                </a>
              </li>
              <li>
                <a className="food-footer-link" href="#">
                  Team
                </a>
              </li>
              <li>
                <a className="food-footer-link" href="#">
                  Careers
                </a>
              </li>
              <li>
                <a className="food-footer-link" href="#">
                  Blog
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Contact</h4>
            <ul className="space-y-2">
              <li>
                <a className="food-footer-link" href="#">
                  Help & Support
                </a>
              </li>
              <li>
                <a className="food-footer-link" href="#">
                  Partner with us
                </a>
              </li>
              <li>
                <a className="food-footer-link" href="#">
                  Ride with us
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <a className="food-footer-link" href="#">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a className="food-footer-link" href="#">
                  Refund & Cancellation
                </a>
              </li>
              <li>
                <a className="food-footer-link" href="#">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a className="food-footer-link" href="#">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">FOLLOW US</h4>
            <div className="flex items-center space-x-4 mb-4 text-white">
              <a
                href="#"
                aria-label="Instagram"
                className="hover:opacity-90 transition-opacity"
              >
                <SocialIcon kind="instagram" />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="hover:opacity-90 transition-opacity"
              >
                <SocialIcon kind="facebook" />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="hover:opacity-90 transition-opacity"
              >
                <SocialIcon kind="twitter" />
              </a>
            </div>
            <p className="text-sm text-gray-400 mb-3">
              Receive exclusive offers in your mailbox
            </p>
            <form className="flex flex-col sm:flex-row items-stretch gap-3 max-w-md">
              <input
                type="email"
                placeholder="Enter Your email"
                className="w-full px-3 py-2 rounded-md sm:rounded-l-md sm:rounded-r-none bg-[#2a2a2a] border border-[#3a3a3a] text-gray-200 placeholder:text-gray-500 focus:outline-none"
              />
              <button
                type="submit"
                className="food-button-primary rounded-md sm:rounded-l-none sm:rounded-r-md w-full sm:w-auto"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="mt-10 pt-6 border-t border-gray-800 text-gray-500 text-xs sm:text-sm flex flex-col sm:flex-row items-center justify-between gap-2">
          <p data-testid="food-footer-text">
            All rights Reserved © FoodWagen, 2021
          </p>
        </div>
      </div>
    </footer>
  );
}
