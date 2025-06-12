import VanCard from "../components/VanCard";
import SubpageTitle from "../components/titles/SubpageTitle";
import { Link, useSearchParams } from "react-router-dom";
import useVans from "../hooks/useVans";
import Tag from "../components/Tag";

export default function Vans() {
  const { vans, isLoading, error } = useVans();
  const [searchParams, setSearchParams] = useSearchParams();

  const typeFilter = searchParams.get("type");

  const vansToDisplay = typeFilter
    ? vans.filter((van) => van.type === typeFilter)
    : vans;

  const vanElements = vansToDisplay.map((van) => (
    <Link to={`/vans/${van.id}`} state={{ type: typeFilter }}>
      <VanCard key={van.id} van={van} />
    </Link>
  ));

  const filters = vans.map((van) => van.type);
  const uniqueFilters = [...new Set(filters)];

  const filterTags = uniqueFilters.map((type) => (
    <Tag
      key={type}
      isActive={typeFilter === type}
      onClick={() => setSearchParams({ type })}
    >
      {type}
    </Tag>
  ));

  return (
    <>
      <SubpageTitle>Explore our van options</SubpageTitle>

      <div className="mb-4">
        <Tag onClick={() => setSearchParams({})}>All</Tag>
        {filterTags}

        {typeFilter && (
          <Tag isActive={true} onClick={() => setSearchParams({})}>
            Clear Filters
          </Tag>
        )}
      </div>

      {isLoading && <p>Loading vans...</p>}
      {error && <p className="text-red-500">Error: {error}</p>}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {vanElements}
      </div>
    </>
  );
}
