export default function VanCardSmall({ van }) {
  return (
    <div className="grid grid-cols-3 gap-2 items-center bg-white rounded-lg shadow-md ">
      <img
        src={van.imageUrl}
        alt={van.name}
        className="w-full h-40 object-cover rounded-lg"
      />
      <div className="col-span-2 flex flex-col justify-between">
        <h3 className="text-xl font-semibold mb-2">{van.name}</h3>
        <span className="text-lg font-bold text-gray-800">
          ${van.price}/day
        </span>
      </div>
    </div>
  );
}
