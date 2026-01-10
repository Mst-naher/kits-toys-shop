import React from 'react';
// import {FadeLoader} from 'react-spinner'
const LoadingSpinner = () => {
  return (
    <div className="flex justify-center item-center mt-[200px]">
      <p className='text-5xl'>Loading.....</p>
      {/* <FadeLoader /> */}
    </div>
  );
};

export default LoadingSpinner;