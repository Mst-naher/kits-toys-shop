import React, { use, useState } from 'react';
import { Link, useLoaderData} from 'react-router';

const toysPromise = fetch("/toys.json").then((res)=>res.json())

const PopularToys = () => {
 const popularToys = use(toysPromise);
 console.log(popularToys);
 const data = useLoaderData();
 console.log(data)
 const [CategoryToy, setCategoryToy] = useState([]);

 

  return (
    <div>
      <h1 className="text-3xl font-semibold text-secondary p-3 text-center">
        Our Popular Toys
      </h1>
      <h1>All toys are here ({popularToys.length})</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">


        <div className="card bg-base-100  shadow-sm">
          <figure>
            <img
              className="w-full h-[500px] object-cover"
              src="https://i.ibb.co/j97ZvHRG/teddy-bear-removebg-preview.png"
              alt="Shoes"
            />
          </figure>
          <div className="p-4">
            <h2 className="text-secondary text-2xl font-semibold">
              Toy :
            </h2>

            <div className="flex justify-between items-center ">
              <p>availableQuantity :{}</p>
              <p>Price :{}</p>
            </div>
            <div>
              <h2 className="font-bold text-accent">rating</h2>
            </div>
          </div>
          <div className=" justify-center">
            <Link to="/toyDetails" className="w-full btn btn-warning text-success text-3xl hover:bg-green-300">
              View More
            </Link>
          </div>
        </div>
       
      </div>
    </div>
  );
};

export default PopularToys;