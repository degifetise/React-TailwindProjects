import React, { useState } from "react";
import { Menu, X } from "lucide-react";
function Navbar() {
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 transition-all duration-300 bg-slate-950/20 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:16 md:20">
          <div className="flex items-center space-x-1 group cursor-pointer">
            <div>
              <img
                src="/public/logo.png"
                alt="CodeFlow"
                className="w-8 h-8 sm:w-10 sm:h-10"
              />
            </div>
            <span className="text-lg sm:text-xl md:text-2xl font-medium">
              <span className="text-white">Program</span>
              <span className="text-blue-400">Learn</span>
            </span>
          </div>

          {/* nav links */}

          <div className="hidden md:flex items-center space-x-6 sm:space-x-8 md:space-x-10">
            <a
              href="#features"
              className="text-gray-300 hover:text-white hover:cursor-pointer text-sm lg:text-base"
            >
              Features
            </a>

            <a
              href="#pricing"
              className="text-gray-300 hover:text-white hover:cursor-pointer text-sm lg:text-base"
            >
              Pricing
            </a>

            <a
              href="#testimonials"
              className="text-gray-300 hover:text-white hover:cursor-pointer text-sm lg:text-base"
            >
              Testimonials
            </a>
          </div>
          {/* for responsiveness */}

          <button
            className="md:hidden p-2 text-gray-300 hover:text-white"
            onClick={() => setMobileMenuIsOpen((prev) => !prev)}
          >
            {mobileMenuIsOpen ? (
              <X className="w-5 h-5 sm:h-6 sm:w-6" />
            ) : (
              <Menu className="w-5 h-5 sm:h-6 sm:w-6" />
            )}
          </button>
        </div>
      </div>

      {mobileMenuIsOpen && (
        <div className="md:hidden bg-slate-900/95 backdrop-blur-lg border-t border-slate-800 animate-in slide-in-from-top duration-300">
          <div className="p-4 sm:py-6 space-y-3 sm:space-y-4">
            <a
              href="#features"
              onClick={() => setMobileMenuIsOpen(false)}
              className="block text-gray-300 hover:text-white hover:cursor-pointer text-sm lg:text-base"
            >
              Features
            </a>
            <a
              href="#pricing"
              onClick={() => setMobileMenuIsOpen(false)}
              className="block text-gray-300 hover:text-white hover:cursor-pointer text-sm lg:text-base"
            >
              Pricing
            </a>
            <a
              href="#testimonials"
              onClick={() => setMobileMenuIsOpen(false)}
              className="block text-gray-300 hover:text-white hover:cursor-pointer text-sm lg:text-base"
            >
              Testimonials
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
