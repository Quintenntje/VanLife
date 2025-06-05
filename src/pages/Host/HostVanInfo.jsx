import { useOutletContext } from "react-router-dom";
export default function HostVanInfo() {
  const van = useOutletContext();

  return (
    <section className="host-van-info">
      <h2 className="text-2xl font-semibold mb-4">Van Details</h2>
      <div>
        <p>Name: {van.name}</p>
        <p>Category: {van.type}</p>
        <p>Description: {van.description}</p>
        <p>-Visibility: {van.visibility ? "Public" : "Private"}</p>
      </div>
    </section>
  );
}
