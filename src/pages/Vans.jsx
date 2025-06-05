import React from "react";
import VanCard from "../components/VanCard";
import SubpageTitle from "../components/titles/SubpageTitle";
import { Link } from "react-router-dom";

export default function Vans() {

  const [vans, setVans] = React.useState([]);
  React.useEffect(() => {
    fetch("/api/vans")
      .then((res) => res.json())
      .then((data) => setVans(data.vans));
  }, []);

  const vanElements = vans.map((van) => <Link to={`/vans/${van.id}`}> <VanCard key={van.id} van={van} /> </Link>);
  return (
    <>
      <SubpageTitle>Explore our van options</SubpageTitle>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {vanElements}
      </div>
    </>
  );
}
