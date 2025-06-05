import SubpageTitle from "../../components/titles/SubpageTitle";
import VanCardSmall from "../../components/VanCardSmall";
import useHostVans from "../../hooks/useHostVans";
import { Link } from "react-router-dom";
export default function HostVans() {
  const { vans, isLoading, error } = useHostVans();
  return (
    <>
      <SubpageTitle>Your listed vans</SubpageTitle>
      {isLoading && <p>Loading vans...</p>}
      {error && <p className="text-red-500">Error: {error}</p>}
      <div className="grid grid-cols-1 md:grid-cols-2  gap-4">
        {vans.map((van) => (
          <Link to={`/host/vans/${van.id}`} key={van.id}>
            <VanCardSmall key={van.id} van={van} />
          </Link>
        ))}
      </div>
    </>
  );
}
