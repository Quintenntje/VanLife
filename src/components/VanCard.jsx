import React from "react";
import Tag from "./Tag";
export default function VanCard({ van }) {
  return (
    <article >
      <img className="rounded-xl" src={van.imageUrl} alt={van.name} />
      <div className="flex justify-between items-center">
        <h3>{van.name}</h3>
        <p className="block text-2xl"> <span className="text-gray-700">${van.price}</span> <span className="text-gray-300 text-sm">/day</span></p>
      </div>
      <Tag isActive={true}>${van.type}</Tag>
    </article>
  );
}
