"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle } from "lucide-react";
import Head from "next/head";
import Script from "next/script";
interface blurDataProps {
  blurDataURL: string;
}

export default function HeroSection({ blurDataURL }: blurDataProps) {
  return (
    <div suppressHydrationWarning>
      <Head>
        <title>Chiropractic Health & Wellness</title>
        <meta
          name="description"
          content="Achieve optimal health and happiness with over 30 years of chiropractic experience. Book your consultation today!"
        />
        <link
          href="/fonts/inter.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </Head>

      {/* Preload Google Fonts */}
      <Script
        rel="preload"
        src="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap"
        strategy="lazyOnload"
      />

      <section
        className="grid grid-cols-1 md:grid-cols-2 items-center px-6 md:px-10 pt-28 pb-10 gap-10"
        id="home"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="space-y-4"
        >
          <h1
            suppressHydrationWarning
            className="text-3xl md:text-[54px] font-bold"
          >
            Achieve Optimal{" "}
            <span className="text-blue-800">
              Health, Happiness and Your Full Human Potential
            </span>
          </h1>
          {[
            "Over 30 years of chiropractic experience",
            "Just minutes from where you live or work",
            "Long-term solution to pain and discomfort",
          ].map((text, index) => (
            <p
              key={index}
              className="flex items-start text-gray-700 md:text-[24px]"
            >
              <CheckCircle className="mr-2 my-auto text-blue-800" /> {text}
            </p>
          ))}
          <a
            href="tel:+1234567890"
            className="bg-blue-800 hover:scale-105 transition transform duration-200 text-white px-5 py-3 rounded-lg shadow-sm hover:bg-white hover:text-blue-800 border border-blue-800 mt-4 cursor-pointer block text-center md:w-[60%]"
            aria-label="Call us for a consultation"
          >
            Call Us to Take the First Step
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative w-full min-h-[300px] md:h-[640px]">
            <Image
              src="/images/massage.jpg"
              alt="Chiropractic treatment"
              fill
              className="rounded-lg shadow-sm object-cover"
              priority
              quality={80}
              sizes="100vw"
              placeholder="blur"
              blurDataURL={blurDataURL}
            />
          </div>
        </motion.div>
      </section>
    </div>
  );
}
