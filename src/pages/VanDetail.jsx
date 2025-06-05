export default function VanDetail({ van }) {
  return (
    <div className="flex flex-col items-center">
      <img
        className="rounded-xl w-full max-w-md"
        src={van.imageUrl}
        alt={van.name}
      />
      <h2 className="text-3xl font-bold mt-4">{van.name}</h2>
      <p className="text-2xl text-gray-700">${van.price}/day</p>
      <p className="text-lg text-gray-500 mt-2">{van.description}</p>
      <button className="mt-4 px-6 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600">
        Rent this van
      </button>
    </div>
  );
}
