import React from "react";

const Loader = () => {
  return (
    <div
      className="loader"
      role="alert"
      aria-label="Loading content, please wait."
    >
      <div className="loader_image">
        <div className="loading-spinner"></div>
      </div>
    </div>
  );
};

export default Loader;
