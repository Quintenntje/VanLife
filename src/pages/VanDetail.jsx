import { useParams } from "react-router-dom";
import Tag from "../components/Tag";
import useVan from "../hooks/useVan";
import BackLink from "../components/BackLink";

export default function VanDetail() {
  const { id } = useParams();

  const { van, isLoading, error } = useVan(id);

  return (
    <div>
      {van ? (
        <div className="flex flex-col lg:flex-row items-center justify-center p-6 gap-8">
          <BackLink to=".." relative="path">
            Back to all vans
          </BackLink>
          <img
            className="rounded-xl w-full max-w-md"
            src={van.imageUrl}
            alt={van.name}
          />
          <div>
            <h2 className="text-3xl font-bold mt-4 md:text-6xl mb-6">
              {van.name}
            </h2>
            <Tag isActive={true}>{van.type}</Tag>
            <p className="text-2xl text-gray-700 mt-4">${van.price}/day</p>
            <p className="text-lg text-gray-500 mt-2">{van.description}</p>
            <button className="mt-4 px-6 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600">
              Rent this van
            </button>
          </div>
        </div>
      ) : (
        <>
          {isLoading && (
            <p className="text-center text-gray-500">Loading van details...</p>
          )}
          {error && <p className="text-center text-red-500">Error: {error}</p>}
        </>
      )}
    </div>
  );
}
