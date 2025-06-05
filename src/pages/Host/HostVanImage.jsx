import { useOutletContext } from "react-router-dom";
export default function HostVanImage() {
  const van = useOutletContext();
  return (
    <img
      className="rounded-2xl w-32 h-auto"
      src={van.imageUrl}
      alt={van.name}
    />
  );
}
