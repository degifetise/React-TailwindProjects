import "react";
import { useTheme } from "./context/ThemeContext";
import {
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { Copyright } from "lucide-react";

function Footer() {
  const { darkMode } = useTheme();
  return (
    <footer className="relative pb-5 bg-gray-100  dark:bg-gray-950 text-slate-700 dark:text-slate-300 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 md:px-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="p-3">
          <h2 className="text-lg mt-3 font-bold bg-gradient-to-r from-blue-500 via-cyan-400 bg-clip-text text-transparent">
            {" "}
            AI Learning Platform
          </h2>
          <p className="mt-3 text-sm leading-relaxed">
            {" "}
            Empowering developers to code smarter, fix bugs faster, and grow
            every day with AI‑powered guidance.
          </p>
        </div>

        <div className="p-3">
          <h3 className="text-md font-semibold mb-3">Quick Links</h3>
          <ul className="flex  flex-col space-y-2 text-sm md:grid md:grid-cols-2 ">
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
          <h3 className="text-md font-semibold mb-3">Stay Connected</h3>
          <div className="flex space-x-4 mb-4">
            <a
              href="https://linkedin.com/in/degife-tise-a42878351"
              target="_blank"
              rel="noopener"
              className="hover:text-blue-500"
            >
              <FaLinkedin className="h-6 w-6" />
            </a>

            <a
              href="https://linkedin.com/in/degife-tise-a42878351"
              target="_blank"
              rel="noopener"
              className="hover:text-blue-500"
            >
              <FaGithub className="h-6 w-6" />
            </a>

            <a
              href="https://linkedin.com/in/degife-tise-a42878351"
              target="_blank"
              rel="noopener"
              className="hover:text-blue-500"
            >
              <FaFacebook className="w-6 h-6" />
            </a>
          </div>
          <form className="flex">
            <input
              type="email"
              placeholder="Subscribe for updates"
              className="w-full py-3 px-2 rounded-l-md outline-none text-sm bg-slate-200 dark:bg-slate-800"
            />
            <button className="py-2 px-4 bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 text-white rounded-r-md text-sm font-semibold hover:opacity-90 transition">
              Join
            </button>
          </form>
        </div>
      </div>

      <div className=" flex text-center items-center justify-center gap-3 border-t border-gray-200 dark:border-gray-800 mt-8 py-4 text-center text-xs text-slate-500 dark:text-slate-400">
        <Copyright className="w-4 h-4 hover:text-blue-500" />
        <span className="text-md text-center font-semibold mb-3 ">
          AI Powered Learning Platform
        </span>
      </div>
    </footer>
  );
}

export default Footer;
