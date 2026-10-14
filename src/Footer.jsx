import "react";
import { useTheme } from "./context/ThemeContext";
import {
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";


import { useState } from "react";
import { useRef } from "react";

function Footer() {
  const inputRef = useRef();
  const [email, setEmail] = useState("");
  const handleEmail = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks

    if (email.trim().value == "") {
      inputRef.current.focus();
      return;
    }
  };

  const { darkMode } = useTheme();
  return (
    <footer className="relative pb-5  bg-gray-950  text-slate-300 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 md:px-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="p-3">
          <h2 className="text-lg mt-3 font-bold bg-gradient-to-r from-blue-500 via-cyan-400 bg-clip-text text-transparent">
            AI Learning Platform
          </h2>
          <p className="mt-3 text-sm leading-relaxed">
            Empowering developers to code smarter, fix bugs faster, and grow
            every day with AI‑powered guidance.
          </p>
        </div>

        <div className="p-3">
          <h3 className="text-md font-semibold mb-3">Quick Links</h3>
          <ul className="flex  flex-col space-y-2 text-sm ">
            <li>
              <a href="#features" className="hover:text-blue-400 transition">
                Home
              </a>
            </li>
            <li>
              <a href="#features" className="hover:text-blue-400 transition">
                Features
              </a>
            </li>
            <li>
              <a href="#features" className="hover:text-blue-400 transition">
                HowItWorks
              </a>
            </li>
            <li>
              <a href="#features" className="hover:text-blue-400 transition">
                Pricing
              </a>
            </li>
            <li>
              <a href="#features" className="hover:text-blue-400 transition">
                FAQ
              </a>
            </li>
            <li>
              <a href="#features" className="hover:text-blue-400 transition">
                Testimonials
              </a>
            </li>
          </ul>
        </div>

        <div className="p-3">
          <h3 className="text-md font-semibold mb-3">Support</h3>
          <ul className="flex  flex-col space-y-2 text-sm ">
            <li className="flex gap-1">
              <a
                href="#features"
                className="hover:text-blue-400 transition hover:border-b hover:border-blue-100"
              >
                Contact
              </a>
            </li>
            <li className="flex gap-1 border-animate">
              <a href="#features" className="hover:text-blue-400 transition">
                FAQ
              </a>
            </li>
            <li className="flex gap-1">
              <a href="#features" className="hover:text-blue-400 transition">
                Call us
              </a>
            </li>
            <li className="flex gap-1">
              <a href="#features" className="hover:text-blue-400 transition">
                Map
              </a>
            </li>
          </ul>
        </div>

        <div className="p-3">
          <h3 className="text-md font-semibold mb-3">Stay Connected</h3>
          <div className="flex space-x-4 mb-4">
            <a
              href="#"
              target="_blank"
              rel="noopener"
              className="hover:text-blue-500"
            >
              <FaLinkedin className="h-6 w-6" />
            </a>

            <a
              href="#"
              target="_blank"
              rel="noopener"
              className="hover:text-blue-500"
            >
              <FaGithub className="h-6 w-6" />
            </a>

            <a
              href="#"
              target="_blank"
              rel="noopener"
              className="hover:text-blue-500"
            >
              <FaFacebook className="w-6 h-6" />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener"
              className="hover:text-blue-500"
            >
              <FaYoutube className="w-6 h-6" />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener"
              className="hover:text-blue-500"
            >
              <FaTwitter className="w-6 h-6" />
            </a>
          </div>
          <form className="flex">
            <input
              type="email"
              ref={inputRef}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Subscribe for updates"
              className="w-full py-3 px-2 rounded-l-md outline-none text-sm bg-slate-800"
            />
            <button
              onClick={handleEmail}
              className="py-2 px-4 bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 text-white rounded-r-md text-sm font-semibold hover:opacity-90 transition"
            >
              Join
            </button>
          </form>
        </div>
      </div>

      <div className=" flex  items-center justify-center gap-3 border-t border-gray-800 mt-8 py-4 text-xs text-slate-400">
        <p className="overflow-hidden text-rap">
          &copy; {new Date().getFullYear()}
          AI Powered Learning Platform . Built with ❤️ by Degife Tise
        </p>
      </div>
    </footer>
  );
}

export default Footer;
