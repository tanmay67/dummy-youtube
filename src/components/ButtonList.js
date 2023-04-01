import React from "react";
import Button from "./Button";

const ButtonList = () => {
  const btnList = [
    "All",
    "Tanmay Agarwal",
    "Songs",
    "Live",
    "Cricket",
    "Action Movies",
  ];

  return (
    <div className="btn_list flex justify-start w-100 overflow-x-auto shadow-sm">
      {btnList.map((btn) => (
        <Button key={btn} name={btn} />
      ))}
    </div>
  );
};

export default ButtonList;
