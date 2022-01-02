import React from "react";

const NothingToDisplay = ({content}) => {
  return (
    <div
      style={{
        height: "600px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1>{content}</h1>
    </div>
  );
};

export default NothingToDisplay;
