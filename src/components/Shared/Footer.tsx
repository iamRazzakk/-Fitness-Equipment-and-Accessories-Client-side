import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="lg:mt-32 md:mt-12 mt-8 px-4 py-8  text-white">
      <div className="lg:flex items-start justify-between max-w-7xl mx-auto space-y-8 lg:space-y-0">
        {/* First Section */}
        <div>
          <h1 className="text-2xl font-bold nav">QQMAX Fitness</h1>
          <p className="mt-4 text-gray-400">
            Sign up for our QQMAX Fitness for latest news & product releases
          </p>
          <div className="mt-4 flex w-full max-w-sm items-center space-x-2">
            <Input
              className="text-black"
              type="email"
              placeholder="Enter your email"
            />
            <Button type="submit">Subscribe</Button>
          </div>
        </div>

        {/* Second Section */}
        <div>
          <ul>
            <li className="text-xl font-bold mb-4">Order & Deliveries</li>
            <li className="text-gray-400">Shipping</li>
            <li className="text-gray-400">Return & Refunds</li>
            <li className="text-gray-400">Local Pick-up</li>
            <li className="text-gray-400">Local Delivery</li>
            <li className="text-gray-400">Assembly Services</li>
          </ul>
        </div>

        {/* Third Section */}
        <div>
          <ul>
            <li className="text-xl font-bold mb-4">Terms & Conditions</li>
            <li className="text-gray-400">About Us</li>
            <li className="text-gray-400">Privacy Policy</li>
            <li className="text-gray-400">Terms of Service</li>
            <li className="text-gray-400">Warranty & Service</li>
          </ul>
        </div>

        {/* Fourth Section */}
        <div>
          <ul>
            <li className="text-xl font-bold mb-4">Customer Support</li>
            <li className="text-gray-400">Contact Us</li>
            <li className="text-gray-400">FAQ</li>
            <li className="text-gray-400">Support Center</li>
            <li className="text-gray-400">Feedback</li>
            <div className="grid grid-cols-4 gap-0 mt-2">
              <FaFacebook className=" w-6 h-6" />
              <FaInstagram className=" w-6 h-6" />
              <FaTwitter className=" w-6 h-6" />
              <FaLinkedin className=" w-6 h-6" />
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
