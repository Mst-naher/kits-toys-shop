import React, { Suspense } from 'react';
import PopularToys from '../pages/PopularToys';

const CategoryToy = () => {
  return (
    <div>
      <h1>All toys are here</h1>
      <Suspense
        fallback={<span className="loading loading-ring loading-3xl"></span>}
      >
        <PopularToys></PopularToys>
      </Suspense>
    </div>
  );
};

export default CategoryToy;