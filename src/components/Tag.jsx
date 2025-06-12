export default function Tag({ children, isActive, onClick }) {
  const defaultClasses =
    "inline-flex items-center rounded-lg px-3 py-1 text-lg font-medium ";

  let activeClass = "";
  const tagClass = (() => {
    switch (children.toLowerCase()) {
      case "simple":
        isActive ? (activeClass = "bg-gray-100 text-gray-800") : "";
        return "hover:bg-gray-100 hover:text-gray-800";
      case "luxury":
        isActive ? (activeClass = "bg-yellow-100 text-yellow-800") : "";
        return "hover:bg-yellow-100 hover:text-yellow-800";
      case "rugged":
        isActive ? (activeClass = "bg-green-100 text-green-800") : "";
        return "hover:bg-green-100 hover:text-green-800";
      default:
        return;
    }
  })();

  return (
    <span onClick={onClick} className={`${defaultClasses} ${tagClass} ${activeClass}`}>
      {children}
    </span>
  );
}
