import Footer from "@/components/Footer";
import Header from "@/components/header";
import React from "react";

export default function Home() {
  return (
    <div>
      <div className='bg-image poppins'>  
      <Header/>
        <div className='container mx-auto'>
          <div className='flex flex-col justify-center items-center mt-20'>
            <h1 className="text-7xl  bg-white">Circuit Scope</h1>
            <p className="text-4xl mt-20  bg-white">CircuitScope is your go-to source for the latest tech insights, trends, and innovations. Explore the
            world of technology with us.</p>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
