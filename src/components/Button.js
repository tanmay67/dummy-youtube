import React from "react";
import { createSearchParams, useNavigate } from "react-router-dom";

const Button = ({ name }) => {
  const navigate = useNavigate();
  return (
    <div>
      <button
        className="px-5 py-2 m-2 bg-gray-200 rounded-lg whitespace-nowrap"
        onClick={() => {
          navigate({
            pathname: "/search",
            search: createSearchParams({
              name: name,
            }).toString(),
          });
        }}
      >
        {name}
      </button>
    </div>
  );
};

export default Button;
