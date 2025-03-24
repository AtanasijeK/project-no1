import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-800 text-white mt-10 p-6 text-center">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <h4 className="text-lg font-semibold">About Us</h4>
          <p className="text-sm text-gray-300 mt-2">
            We provide top-notch therapy and chiropractic services tailored to
            your needs.
          </p>
        </div>
        <div>
          <h4 className="text-lg font-semibold">Contact</h4>
          <p className="text-sm text-gray-300 mt-2">
            Email: info@healthservice.com
          </p>
          <a href="tel:" className="text-sm text-gray-300">
            Phone: +123 456 7890
          </a>
        </div>
        <div>
          <h4 className="text-lg font-semibold">Follow Us</h4>
          <div className="flex justify-center gap-4 mt-2">
            <a href="#" className="text-gray-300 hover:text-white">
              Facebook
            </a>
            <a href="#" className="text-gray-300 hover:text-white">
              Twitter
            </a>
            <a href="#" className="text-gray-300 hover:text-white">
              Instagram
            </a>
          </div>
        </div>
      </div>
      <p className="text-sm text-gray-400 mt-4">
        &copy; {new Date().getFullYear()} Health Service. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
