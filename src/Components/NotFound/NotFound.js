import React from "react";
import "./NotFound.css";
const NotFound = () => {
  return (
    <div
      className="bg-content"
      style={{
        backgroundImage:
          "url('https://i.ibb.co/8M7kzKb/HTML-404-Error-Page.gif')",
      }}
    >
      <div className="not-found text-white text-center text-3xl my-6">
        <h1>NOT FOUND</h1>
      </div>
    </div>
  );
};

export default NotFound;
