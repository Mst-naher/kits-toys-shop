import React, { Suspense } from "react";
import Slider from "../components/Slider";

import CustomerReviews from "./CustomerReviews";
import Offers from "./Offers";

import ToyContainer from "../components/ToyContainer";

 const loadToys = () =>fetch("/toys.json").then((res)=> res.json());

const Home = () => {
       const toysPromise = loadToys();
       console.log(toysPromise);

  return (
    <div className="w-11/12 mx-auto my-3">
      {/* <h1>this is Home page</h1> */}
      <section>
        <Slider></Slider>
      </section>
      <section >
        <Suspense fallback={"Loading...."}>
          <ToyContainer toysPromise={toysPromise}></ToyContainer>
        </Suspense>
      </section>
      <section>
        <h1>CustomerReviews page </h1>
        <CustomerReviews></CustomerReviews>
      </section>
      <section>
        <h1>Offers </h1>
        <Offers></Offers>
      </section>
    </div>
  );
};

export default Home;
