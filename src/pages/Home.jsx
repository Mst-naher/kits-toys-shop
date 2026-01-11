import React, { Suspense } from "react";
import Slider from "../components/Slider";
import ToyContainer from "../components/ToyContainer";
import Promotion from "./Promotion";
import CustomersSlider from "./CustomersSlider";

 const loadToys = () =>fetch("/toys.json").then((res)=> res.json());

const Home = () => {
       const toysPromise = loadToys();
       console.log(toysPromise);

  return (
    <div className="w-11/12 mx-auto my-3 ">
      <section>
        <Slider></Slider>
      </section>
      <section>
        <Suspense fallback={"Loading...."}>
          <ToyContainer toysPromise={toysPromise}></ToyContainer>
        </Suspense>
      </section>
      <section>
        <div>
          <h2 className="text-center mt-10 text-4xl text-white">
            Discount upto 70%
          </h2>
        </div>
        <Promotion></Promotion>
      </section>
      <section>
        <h2 className="text-center mt-10 text-4xl text-white">
          Our Customers 
        </h2>
        <CustomersSlider></CustomersSlider>
      </section>
    </div>
  );
};

export default Home;
