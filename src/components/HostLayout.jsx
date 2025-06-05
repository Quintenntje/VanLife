import { Outlet } from "react-router-dom";
import HostNavbar from "./navbar/HostNavbar";
export default function HostLayout() {
  return (
    <>
      <HostNavbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <Outlet />
      </main>
    </>
  );
}
