import React from "react";
import "./Tag";
export default function VanCard({ van }) {
  return (
    <div className="">
      <img src={van.imageUrl} alt={van.name} />
      <div className="van-info">
        <h3>{van.name}</h3>
        <p>${van.price}/day</p>
        <Tag isActive={true}>${van.type}</Tag>
      </div>
    </div>
  );
}
