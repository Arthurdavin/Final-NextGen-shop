'use client';

import { Mail, Phone } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactPage() {
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      },
    }),
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-16 space-y-12">

      {/* Page Header */}
      <motion.h1
        className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-gray-100 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Get in Touch
      </motion.h1>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

        {/* LEFT SIDE - Contact Cards */}
        <motion.div
          className="space-y-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Call Us */}
          <motion.div
            custom={1}
            variants={fadeUp}
            whileHover={{ scale: 1.05 }}
            className="p-6 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm hover:shadow-lg transition"
          >
            <div className="flex items-center gap-4 mb-3">
              <Phone className="w-8 h-8 text-red-600" />
              <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100">Call Us</h2>
            </div>
            <p className="text-gray-600 dark:text-gray-300">Available 24/7, 7 days a week.</p>
            <p className="mt-2 font-semibold text-gray-800 dark:text-gray-100">+885 81 528 714</p>
          </motion.div>

          {/* Write Us */}
          <motion.div
            custom={2}
            variants={fadeUp}
            whileHover={{ scale: 1.05 }}
            className="p-6 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm hover:shadow-lg transition"
          >
            <div className="flex items-center gap-4 mb-3">
              <Mail className="w-8 h-8 text-red-600" />
              <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100">Write To Us</h2>
            </div>
            <p className="text-gray-600 dark:text-gray-300">
              Fill out our form and we will contact you within 24 hours.
            </p>
            <p className="mt-3 font-semibold text-gray-800 dark:text-gray-100">
              customer@nextgenshop.com
            </p>
            <p className="font-semibold text-gray-800 dark:text-gray-100">
              support@nextgenshop.com
            </p>
          </motion.div>
        </motion.div>

        {/* RIGHT SIDE - Contact Form */}
        <motion.form
          className="md:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-4 bg-white dark:bg-gray-800 p-8 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {["Your Name *", "Your Email *", "Your Phone *"].map((placeholder, i) => (
            <motion.input
              key={i}
              type={i === 1 ? "email" : "text"}
              placeholder={placeholder}
              className="border p-3 rounded-md w-full focus:ring-2 focus:ring-red-600 focus:outline-none
                         bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 border-gray-300 dark:border-gray-600"
              variants={fadeUp}
              custom={i + 1}
            />
          ))}

          <motion.textarea
            placeholder="Your Message"
            className="border p-3 rounded-md w-full md:col-span-3 h-52 focus:ring-2 focus:ring-red-600 focus:outline-none
                       bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 border-gray-300 dark:border-gray-600"
            variants={fadeUp}
            custom={4}
          />

          <motion.button
            type="submit"
            className="bg-red-600 text-white px-6 py-3 rounded-md w-fit md:col-span-3 hover:bg-red-700 transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            variants={fadeUp}
            custom={5}
          >
            Send Message
          </motion.button>
        </motion.form>
      </div>
    </div>
  );
}
