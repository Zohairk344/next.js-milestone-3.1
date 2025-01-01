import Footer from "@/components/Footer";
import Header from "@/components/header";
import React from "react";

const AboutPage = () => {
  return (
    <div className="bg-gradient-to-r from-blue-200 to-gray-200 text-gray-800 font-sans min-h-screen flex flex-col">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="container mx-auto py-12 px-6 lg:px-12 flex-grow">
        <section className="bg-white shadow-lg rounded-lg p-8">
          <h2 className="text-4xl font-bold mb-6 text-blue-700 border-b-4 border-blue-600 inline-block pb-2">
            About CircuitScope
          </h2>
          <p className="mb-8 text-lg leading-relaxed text-gray-600">
            Welcome to CircuitScope, your premier destination for all things
            tech. Whether youre a tech enthusiast, an industry professional, or
            someone who loves staying updated on the latest innovations,
            CircuitScope has something for you. Our mission is to bring clarity
            to the ever-evolving tech landscape, making it accessible and
            engaging for everyone.
          </p>

          <h3 className="text-3xl font-semibold mb-4 text-gray-700">
            What We Offer
          </h3>
          <ul className="list-disc pl-5 mb-8 space-y-2 text-gray-600">
            <li>In-depth articles on emerging technologies and trends.</li>
            <li>Expert analysis and opinions on key tech topics.</li>
            <li>Community-driven discussions and insights.</li>
            <li>A user-friendly platform for exploring tech knowledge.</li>
          </ul>

          <h3 className="text-3xl font-semibold mb-4 text-gray-700">
            Our Vision
          </h3>
          <p className="mb-8 text-lg leading-relaxed text-gray-600">
            At CircuitScope, we believe that technology has the power to
            transform lives. Our goal is to inspire innovation, foster
            creativity, and encourage a deeper understanding of the tech world.
            We strive to be a trusted source of knowledge, helping our readers
            navigate and appreciate the vast world of technology.
          </p>

          <h3 className="text-3xl font-semibold mb-4 text-gray-700">
            Join Our Community
          </h3>
          <p className="text-lg leading-relaxed text-gray-600">
            We invite you to become a part of our growing community. Share your
            thoughts, explore our content, and connect with fellow tech
            enthusiasts. Together, lets explore the future of technology.
          </p>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default AboutPage;
