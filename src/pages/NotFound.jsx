import { Link } from "react-router-dom";
export default function NotFound() {
  return (
    <main className="flex flex-col items-center justify-center mt-32">
      <h1 className="text-8xl font-bold mb-4">404</h1>
      <p className="text-4xl mb-4">Page Not Found</p>
      <p className="text-gray-500 text-2xl">
        The page you are looking for does not exist.
      </p>
      <Link
        to="/"
        className="mt-8 px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition duration-200"
      >
        Go to Home
      </Link>
    </main>
  );
}
