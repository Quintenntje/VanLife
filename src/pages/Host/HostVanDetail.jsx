import useHostVan from "../../hooks/useHostVan";
import { useParams } from "react-router-dom";
import Tag from "../../components/Tag";
import HostDetailsNavbar from "../../components/navbar/HostDetailsNavbar.Jsx";


export default function HostVanDetail() {
  const { id } = useParams();
  const { van, loading, error } = useHostVan(id);

  return (
    <div className="max-w-3xl mx-auto rounded-2xl bg-white p-6 shadow-md">
      {loading && <p>Loading van details...</p>}
      {error && <p className="text-red-500">Error: {error}</p>}
      {van && (
        <>
          <div className="flex gap-4 items-center">
            <img
              src={van.imageUrl}
              alt={van.name}
              className="w-64 h-auto rounded-lg mb-4"
            />
            <div className="inline-flex flex-col">
              <Tag isActive={true}>{van.type}</Tag>
              <h2 className="text-2xl font-semibold mb-4">{van.name}</h2>
              <p className="text-gray-600 mb-4">Price: ${van.price}/day</p>
            </div>
          </div>
          <HostDetailsNavbar />
          
        </>

      )}
    </div>
  );
}
