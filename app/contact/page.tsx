import Footer from "@/components/Footer";
import Header from "@/components/header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";

const ContactPage = () => {
  return (
    <div className="bg-gradient-to-b from-blue-50 via-gray-50 to-blue-100 text-gray-800 font-sans min-h-screen flex flex-col">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="container mx-auto py-12 px-6 lg:px-20 flex-grow">
        <section className="bg-white shadow-2xl rounded-xl p-8 lg:p-14 relative">
          <div className="absolute inset-0 z-[-1] bg-gradient-to-br from-blue-100 to-blue-50 rounded-xl opacity-20"></div>

          <h2 className="text-4xl font-extrabold mb-8 text-blue-700 border-b-4 border-blue-600 inline-block pb-2">
            Contact Us
          </h2>
          <p className="mb-10 text-lg leading-relaxed text-gray-600">
            Have questions, feedback, or want to get in touch? We would love to hear
            from you! Use the form below to reach out, and we will respond as soon
            as possible.
          </p>

          <form className="space-y-8">
            {/* Name Field */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-semibold text-gray-700"
              >
                Name
              </label>
              <Input
                type="text"
                id="name"
                name="name"
                className="mt-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-base px-4 py-3"
                placeholder="Your name"
              />
            </div>

            {/* Email Field */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-gray-700"
              >
                Email
              </label>
              <Input
                type="email"
                id="email"
                name="email"
                className="mt-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-base px-4 py-3"
                placeholder="Your email"
              />
            </div>

            {/* Message Field */}
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-semibold text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="mt-2 block pb-8 w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-base px-4 py-3"
                placeholder="Your message"
              ></textarea>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-500 to-blue-700 text-white py-3 px-6 rounded-lg shadow-lg hover:from-blue-600 hover:to-blue-800 transition focus:outline-none focus:ring-4 focus:ring-blue-300"
            >
              Send Message
            </Button>
          </form>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ContactPage;
