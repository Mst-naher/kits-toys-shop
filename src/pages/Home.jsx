import React, { Suspense } from "react";
import Slider from "../components/Slider";
import PopularToys from "./PopularToys";
import CustomerReviews from "./CustomerReviews";
import Offers from "./Offers";
import CategoryToy from "../components/CategoryToy";

const Home = () => {
  return (
    <div className="w-11/12 mx-auto my-3">
      <h1>this is Home page</h1>
      <section>
        <Slider></Slider>
      </section>
      <section>
       <CategoryToy></CategoryToy>
      
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
