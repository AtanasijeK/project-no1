"use client";
import React from "react";
import Script from "next/script";

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-800 text-white mt-10 p-6 text-center">
      {/* Preload custom font example (if self-hosted fonts are used) */}
      <link
        rel="preload"
        href="/fonts/YourFont.woff2"
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
      />

      {/* Footer content wrapped for CLS stability */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="min-h-[120px]">
          <h4 className="text-lg font-semibold">About Us</h4>
          <p className="text-sm text-gray-300 mt-2">
            We provide top-notch therapy and chiropractic services tailored to
            your needs.
          </p>
        </div>
        <div className="min-h-[120px]">
          <h4 className="text-lg font-semibold">Contact</h4>
          <p className="text-sm text-gray-300 mt-2">
            Email:{" "}
            <a
              href="mailto:info@healthservice.com"
              className="underline hover:text-white"
            >
              info@healthservice.com
            </a>
          </p>
          <p className="text-sm text-gray-300">
            Phone:{" "}
            <a href="tel:+1234567890" className="underline hover:text-white">
              +123 456 7890
            </a>
          </p>
        </div>
        <div className="min-h-[120px]">
          <h4 className="text-lg font-semibold">Follow Us</h4>
          <div className="flex justify-center gap-4 mt-2">
            <a
              href="#"
              aria-label="Facebook"
              className="text-gray-300 hover:text-white"
            >
              Facebook
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className="text-gray-300 hover:text-white"
            >
              Twitter
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="text-gray-300 hover:text-white"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>

      <p className="text-sm text-gray-400 mt-4">
        &copy; {new Date().getFullYear()} Health Service. All rights reserved.
      </p>

      {/* Example of optimized script inclusion (if needed for widgets or analytics) */}
      <Script
        src="https://example.com/analytics.js"
        strategy="lazyOnload"
        onLoad={() => console.log("Analytics loaded")}
      />
    </footer>
  );
};

export default Footer;
