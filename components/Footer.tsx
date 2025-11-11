"use client";

export default function Footer() {
  return (
    <footer className="mt-auto border-t food-divider bg-[#1f1f1f] text-gray-300">
      <div className="food-container py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="space-y-4">
            <img src="/logo.svg" alt="FoodWagen" width={128} height={32} />
            <p className="text-sm text-gray-400">
              Delicious foods from your favorite restaurants. Fast delivery.
              Great prices.
            </p>
            <div className="flex items-center space-x-4 mt-2">
              <a href="#" aria-label="Twitter" className="food-social">
                <img src="/icons/twitter.svg" alt="" className="w-5 h-5" />
              </a>
              <a href="#" aria-label="Instagram" className="food-social">
                <img src="/icons/instagram.svg" alt="" className="w-5 h-5" />
              </a>
              <a href="#" aria-label="Facebook" className="food-social">
                <img src="/icons/facebook.svg" alt="" className="w-5 h-5" />
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <a className="food-footer-link" href="#">
                  About
                </a>
              </li>
              <li>
                <a className="food-footer-link" href="#">
                  Blog
                </a>
              </li>
              <li>
                <a className="food-footer-link" href="#">
                  Careers
                </a>
              </li>
              <li>
                <a className="food-footer-link" href="#">
                  Press
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Support</h4>
            <ul className="space-y-2">
              <li>
                <a className="food-footer-link" href="#">
                  Help Center
                </a>
              </li>
              <li>
                <a className="food-footer-link" href="#">
                  Safety
                </a>
              </li>
              <li>
                <a className="food-footer-link" href="#">
                  COVID-19
                </a>
              </li>
              <li>
                <a className="food-footer-link" href="#">
                  Accessibility
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <a className="food-footer-link" href="#">
                  Terms
                </a>
              </li>
              <li>
                <a className="food-footer-link" href="#">
                  Privacy
                </a>
              </li>
              <li>
                <a className="food-footer-link" href="#">
                  Cookies
                </a>
              </li>
              <li>
                <a className="food-footer-link" href="#">
                  Licenses
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Follow us</h4>
            <p className="text-sm text-gray-400 mb-3">
              Receive exclusive offers in your mailbox
            </p>
            <form className="flex items-stretch">
              <input
                type="email"
                placeholder="Enter Your email"
                className="px-3 py-2 rounded-l-md bg-[#2a2a2a] border border-[#3a3a3a] text-gray-200 placeholder:text-gray-500 focus:outline-none"
              />
              <button
                type="submit"
                className="food-button-primary rounded-l-none rounded-r-md"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="mt-10 pt-6 border-t food-divider text-center text-gray-500">
          <p data-testid="food-footer-text">
            © 2025 FoodWagen. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
