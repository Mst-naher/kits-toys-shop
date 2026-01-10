import React, { use } from 'react';
import PopularToys from './PopularToys';

const ToyContainer = ({ toysPromise }) => {
  const toys = use(toysPromise);
  console.log(toys);

  return (
    <div>
      <PopularToys toys={toys}></PopularToys>
    </div>
  );
};

export default ToyContainer;