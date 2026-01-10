import React, { useEffect, useState } from "react";
import {useParams } from "react-router-dom";
import MyContainer from "../components/MyContainer";

const ToyDetails = () => {
  const { id } = useParams();
  // console.log(id);
  const [toy, setToy] = useState(null);

  useEffect(() => {
    fetch("/toys.json")
      .then((res) => res.json())
      .then((data) =>
         {
          const toyArray = Array.isArray(data) ? data : data.toys;
          const singleToy = toyArray?.find((toy)=>toy.toyId === Number(id))
        setToy(singleToy);
        }
      )}, [id]);
       if (!toy) {
         return <p className="text-center mt-10">Loading...</p>;
       }
  const { toyName, description, rating, availableQuantity, pictureURL, price } =
    toy;
  return (
    <MyContainer>
      <div className="">
        <div className=" card bg-base-100 mx-auto rounded-xl shadow-xl mt-10">
          <figure className="h-fulloverflow-hidden">
            <img
              className="w-[750px] h-[600px] object-cover"
              src={pictureURL}
              alt={toyName || "Toy"}
            />
          </figure>
          <div className="card-body bg-gray-200">
            <h3>{toyName}</h3>
            <p>Rating : {rating} ⭐⭐⭐⭐</p>
            <p>{description}</p>
            <p> Available : {availableQuantity}</p>
            <p> Price : {price} $</p>
            <button className="btn btn-success">Try Now</button>
          </div>
        </div>
        <div>
          <form>

            
          </form>
        </div>
      </div>
    </MyContainer>
  );
};

export default ToyDetails;
