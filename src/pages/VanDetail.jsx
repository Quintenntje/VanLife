import React from "react";
import { useParams } from "react-router-dom";

export default function VanDetail() {
  const { id } = useParams();

  const [van, setVan] = React.useState(null);

  React.useEffect(() => {
    fetch(`/api/vans/${id}`)
      .then((res) => res.json())
      .then((data) => setVan(data.vans))
      .catch((error) => console.error("Error fetching van details:", error));
  }, [id]);

  return (
    <div>
      {van ? (
        <div className="flex flex-col lg:flex-row items-center justify-center p-6 gap-8">
          <img
            className="rounded-xl w-full max-w-md"
            src={van.imageUrl}
            alt={van.name}
          />
          <div>
            <h2 className="text-3xl font-bold mt-4 md:text-6xl mb-6">{van.name}</h2>
            <p className="text-2xl text-gray-700">${van.price}/day</p>
            <p className="text-lg text-gray-500 mt-2">{van.description}</p>
            <button className="mt-4 px-6 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600">
              Rent this van
            </button>
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center h-screen">
          <p className="text-xl text-gray-500">Loading van details...</p>
        </div>
      )}
    </div>
  );
}
