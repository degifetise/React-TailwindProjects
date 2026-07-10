import { Send } from "lucide-react";
import "react";
import { FaFacebook, FaInstagram, FaTelegram, FaTiktok, FaTwitter } from "react-icons/fa";
function ContactUs() {
  return (
    <div className="min-h-full  py-16 max-w-7xl bg-slate-950">
      <div className="block">
        <h2 className="text-center mb-4 text-4xl bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-700 bg-clip-text text-transparent">
          contact us
        </h2>
      </div>
      <div className="grid md:grid-cols-2">
        <div className="flex items-center">
          <div>
            <h3>Social Media</h3>
          </div>

          <ul>
            <li>
              <a href="">
                <FaFacebook />
              </a>
            </li>
            <li>
              <a href="">
                <FaTiktok />
              </a>
            </li>
            <li>
              <a href="">
                <FaTelegram />
              </a>
            </li>
            <li>
              <a href="">
                <FaInstagram />
              </a>
            </li>
            <li>
              <a href="">
                <FaTwitter />
              </a>
            </li>
          </ul>
        </div>
        <div className="w-full bg-slate-900 py-4 flex flex-col gap-3 items-center justify-center">
          <div className="flex w-full gap-3 items-center flex-col justify-center">
            <label htmlFor="Name" className="items-start">
              Name
            </label>
            <input
              type="text"
              placeholder="Enter your name..."
              className="w-96 py-3 px-3"
            />
          </div>
          <div className="flex gap-3 items-center flex-col justify-center">
            <label htmlFor="Name">Email</label>
            <input
              type="text"
              placeholder="Enter your name..."
              className="max-w-6xl py-3 px-3"
            />
          </div>

          <div className="flex gap-3 items-center flex-col justify-center">
            <textarea
              rows={12}
              placeholder="Enter what u want to say..."
              className=" text-slate-900 p-4 appearance-none resize-none w-96"
            ></textarea>
          </div>
          <div className="w-full justify-center items-center flex">
            <button className="bg-blue-600 w-full">
              Send <Send />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
