import React from "react";
import Body from "./components/Body";
import Head from "./components/Head";

const AppLayout = () => {
  return (
    <div className="h-screen w-screen">
      <Head />
      <Body />
    </div>
  );
};

export default AppLayout;
