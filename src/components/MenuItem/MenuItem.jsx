import React from "react";
import { Link } from "react-router-dom";

const MenuItem = ({ name, path }) => {
  return (
    <Link to={path} className="flex items-center">
      <span className="font-bold">{name}</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6 text-primary "
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.5 8.25l-7.5 7.5-7.5-7.5"
        />
      </svg>
    </Link>
  );
};

export default MenuItem;
