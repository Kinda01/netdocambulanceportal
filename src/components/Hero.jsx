import React from 'react';

const Hero = () => {
  return (
    <section className="hero flex justify-between items-center p-8 bg-gray-100">
      <div className="hero-text max-w-lg">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">24/7 Emergency Ambulance Care with Netdoc Ambulance</h2>
        <p className="text-lg text-gray-600 mb-4">For Emergency Medical Service</p>
        <button className="bg-red-500 text-white py-2 px-6 rounded-lg hover:bg-red-600 mb-4">
          BOOK NOW
        </button>
        <p className="text-lg text-gray-600">or</p>
        <div className="call-assistance mt-4">
          <p className="text-lg text-gray-800">Call Our Assistance</p>
          <p className="text-2xl font-bold text-red-500">999</p>
        </div>
      </div>
      <img
        src="/NETDOC.jpg" 
        alt="Netdoc Ambulance"
        className="ambulance-image w-64 h-auto"
      />
    </section>
  );
};

export default Hero;
