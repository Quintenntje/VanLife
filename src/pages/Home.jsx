import React from "react";
import { Link } from "react-router-dom";
import bgImg from "../assets/images/home-hero.png";
import Title from "../components/titles/Title";

export default function Home() {
  return (
    <div className="relative flex flex-col min-h-[100vh]">
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: `url(${bgImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>
      </div>

      <div className="relative z-10 flex-grow flex flex-col justify-center px-6 py-12 text-white text-center mt-auto">
        <div className="max-w-md mx-auto mb-8">
          <Title>You got the travel plans, we got the travel vans.</Title>
          <p className="text-base md:text-lg mb-8">
            Add adventure to your life by joining the #vanlife movement. Rent
            the perfect van to make your perfect road trip.
          </p>
          <Link
            to="/vans"
            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-md w-full block text-center transition duration-200"
          >
            Find your van
          </Link>
        </div>
      </div>
    </div>
  );
}
