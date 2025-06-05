import { useOutletContext } from "react-router-dom";
export default function HostVanPrice(){
    const van = useOutletContext();

    return (
        <span>Price: ${van.price}</span>
    );
}