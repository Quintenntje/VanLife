import VanCard from "../components/VanCard";
import SubpageTitle from "../components/titles/SubpageTitle";
import { Link } from "react-router-dom";
import useVans from "../hooks/useVans";

export default function Vans() {
  const { vans, isLoading, error } = useVans();

  const vanElements = vans.map((van) => (
    <Link to={`/vans/${van.id}`}>
      <VanCard key={van.id} van={van} />
    </Link>
  ));
  return (
    <>
      <SubpageTitle>Explore our van options</SubpageTitle>

      {isLoading && <p>Loading vans...</p>}
      {error && <p className="text-red-500">Error: {error}</p>}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {vanElements}
      </div>
    </>
  );
}
