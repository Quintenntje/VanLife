import React from "react";
import { Link } from "react-router-dom";
import bgImg from "../assets/images/about-hero.png";

export default function About() {
  return (
    <div className="flex flex-col">
      <div className="w-full">
        <img
          src={bgImg}
          className="w-full h-64 md:h-80 object-cover"
          alt="Van parked in nature"
        />
      </div>

      {/* About content */}
      <div className="px-6 py-8 md:max-w-2xl md:mx-auto">
        <h1 className="text-2xl md:text-3xl font-bold mb-4">
          Don't squeeze in a sedan when you could relax in a van.
        </h1>
        <p className="text-base mb-4 text-gray-700">
          Our mission is to enliven your road trip with the perfect travel van
          rental. Our vans are recertified before each trip to ensure your
          travel plans can go off without a hitch. (Hitch costs extra 😉)
        </p>
        <p className="text-base mb-8 text-gray-700">
          Our team is full of vanlife enthusiasts who know firsthand the magic
          of touring the world on 4 wheels.
        </p>
      </div>

      {/* CTA section */}
      <div className="bg-orange-100 px-6 py-8 mt-4">
        <div className="md:max-w-2xl md:mx-auto">
          <h2 className="text-xl md:text-2xl font-bold mb-6">
            Your destination is waiting.
            <br />
            Your van is ready.
          </h2>
          <Link
            className="bg-black text-white py-2 px-6 rounded-md font-medium inline-block hover:bg-gray-800 transition duration-200"
            to="/vans"
          >
            Explore our vans
          </Link>
        </div>
      </div>
    </div>
  );
}
