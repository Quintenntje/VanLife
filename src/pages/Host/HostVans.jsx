import SubpageTitle from "../../components/titles/SubpageTitle";
import VanCard from "../../components/VanCard";
import useVans from "../../hooks/useVans";
export default function HostVans() {
  const { vans, isLoading, error } = useVans();
  return (
    <>
      <SubpageTitle>Your listed vans</SubpageTitle>
      {isLoading && <p>Loading vans...</p>}
      {error && <p className="text-red-500">Error: {error}</p>}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {vans.map((van) => (
          <Link to={`/host/vans/${van.id}`} key={van.id}>
            <VanCard key={van.id} van={van} />
          </Link>
        ))}
      </div>
    </>
  );
}
