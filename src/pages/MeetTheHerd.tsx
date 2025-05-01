
import React from "react";
import { Header } from "@/components/Safari/Header";

const MeetTheHerd = () => {
  return (
    <div className="relative min-h-screen bg-black">
      <Header />
      <div className="min-h-screen pt-32 text-white">
        <div className="max-w-6xl mx-auto px-8">
          <h1 className="text-5xl font-bold text-safari-gold mb-8">Meet The Herd</h1>
          <p className="text-xl mb-8">
            Coming soon! Learn about our team and get in touch with us.
          </p>
          
          {/* Placeholder for the contact form */}
          <div className="mt-16 p-8 bg-safari-gold bg-opacity-10 rounded-lg border border-safari-gold">
            <h2 className="text-3xl text-safari-gold mb-4">Contact Form Coming Soon</h2>
            <p>Our beautiful fun contact form will be available here shortly.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeetTheHerd;
