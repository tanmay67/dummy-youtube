import React from "react";
import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  console.log(err.error.message);
  return (
    <div className="h-screen w-screen error_page">
      <img
        src="https://www.gstatic.com/youtube/src/web/htdocs/img/monkey.png"
        alt="monkey"
      />
      <h4>This page isn't available. Sorry about that.</h4>
      <h4>
        Only <span className="italic underline">HOME PAGE</span> available.
      </h4>
      <h5 className="text-gray-600">{err.error.message}</h5>
    </div>
  );
};

export default Error;
