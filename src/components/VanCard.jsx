import React from "react";
import Tag from "./Tag";
export default function VanCard({ van }) {
  return (
    <article>
      <img className="rounded-xl" src={van.imageUrl} alt={van.name} />
      <div className="flex justify-between items-center">
        <h3 className="text-2xl">{van.name}</h3>
        <p className="flex flex-col text-2xl mt-2">
          <span className="text-gray-700">${van.price}</span>
          <span className="text-gray-500 text-sm">/day</span>
        </p>
      </div>
      <Tag isActive={true}>{van.type}</Tag>
    </article>
  );
}
