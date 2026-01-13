import React from 'react';
import { ClimbingBoxLoader } from "react-spinners";
const LoadingSpinner = () => {
  return (
    <div className=" h-[97vh] flex item-center justify-center ">
      {/* <p className="text-5xl text-amber-500 ">Loading.....</p> */}
      <ClimbingBoxLoader />
    </div>
  );
};

export default LoadingSpinner;