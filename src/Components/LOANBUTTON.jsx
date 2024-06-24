import React from "react";
function LOANBUTTON({ title, color, shadow, link }) {
  // Define a map of allowed colors to Tailwind CSS classes
  const colorClasses = {
    blue: "bg-blue-500",
    green: "bg-green-500",
    red: "bg-red-500",
    orange: "bg-orange-500",
    violet: "bg-violet-500",
    yellow: "bg-yellow-500",
  };
  const shadowClasses = {
    blue: "shadow-blue-300",
    green: "shadow-green-300",
    red: "shadow-red-300",
    orange: "shadow-orange-300",
    violet: "shadow-violet-300",
    yellow: "shadow-yellow-300",
  };

  // Get the corresponding Tailwind class for the given color
  const bgColorClass = colorClasses[color] || "bg-gray-500"; // Fallback to gray if color is not in the map
  const bgshadowClass = shadowClasses[shadow] || "bg-gray-500"; // Fallback to gray if color is not in the map

  return (
    <div className="text-center bg-white min-h-48 shadow-md basis-72 xl:basis-84 xl:grow-0 grow pb-4 rounded-lg w-72 flex flex-col items-center justify-between">
      <div className="rounded-t-lg">
        <div
          className={`-translate-y-2 rounded-md w-36 px-4 py-3 text-white shadow-lg ${bgshadowClass} ${bgColorClass}`}
        >
          {title}
        </div>
      </div>
      <p className="font-semibold">Apply for {title} Loan in one click!</p>
      <a href={link} target="_blank">
        <button className="ring-1 px-6 py-2 mt-2 rounded-md bg-blue-500 text-white hover:bg-blue-400 font-medium">
          Apply Now
        </button>
      </a>
    </div>
  );
}

export default LOANBUTTON;
