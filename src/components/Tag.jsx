export default function Tag({ children, isActive }) {
  const defaultClasses =
    "inline-flex items-center rounded-full px-2.5 py-0.5 text-sm font-medium";

  let activeClass = "";
  const tagClass = (() => {
    switch (children.toLowerCase()) {
      case "simple":
        activeClass = "bg-gray-100 text-gray-800";
        return "hover:bg-gray-100 hover:text-gray-800";
      case "luxury":
        activeClass = "bg-yellow-100 text-yellow-800";
        return "hover:bg-yellow-100 hover:text-yellow-800";
      case "rugged":
        activeClass = "bg-green-100 text-green-800";
        return "hover:bg-green-100 hover:text-green-800";
      default:
        return;
    }
  })();

  return (
    <span
      className={`${defaultClasses} ${tagClass} ${isActive ? activeClass : ""}`}
    >
      {children}
    </span>
  );
}
