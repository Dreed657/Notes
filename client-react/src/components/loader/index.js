import React from "react";
import ClipLoader from "react-spinners/ClipLoader";

const Loader = () => {
  return (
    <div className="text-center my-3">
      <ClipLoader color="#4A90E2" loading={true} size={100} />
    </div>
  );
};

export default Loader;
