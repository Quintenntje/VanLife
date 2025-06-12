import React from "react";
import { Link } from "react-router-dom";
import { HiArrowLeft } from "react-icons/hi2";
export default function BackLink({ to, children, ...props }) {
  return (
    <Link
      to={to}
      {...props}
      className="flex items-center gap-2 text-gray-500 hover:text-gray-800 transition-colors"
    >
      <HiArrowLeft className="w-5 h-5" />
      {children}
    </Link>
  );
}
