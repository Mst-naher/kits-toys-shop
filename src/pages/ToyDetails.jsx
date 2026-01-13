import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import MyContainer from "../components/MyContainer";
import { CartContext } from "../Providers/CartContext";



const ToyDetails = () => {
  const {cart, setCart} = useContext(CartContext)
 const navigate = useNavigate();
console.log("navigating to cart")
  const { id } = useParams();
  // console.log(id);
  const [toy, setToy] = useState(null);

  useEffect(() => {
    fetch("/toys.json")
      .then((res) => res.json())
      .then((item) =>
         {console.log(item);
          const toyArray = Array.isArray(item) ? item : item.toys;
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
        <div className=" card bg-base-100 mx-auto rounded-xl shadow-xl m-10 w-[500px] h-[600px]">
          <figure className=" overflow-hidden">
            <img
              className="w-[500px] h-[400px] object-cover"
              src={pictureURL}
              alt={toyName || "Toy"}
            />
          </figure>
          <div className="card-body bg-gray-200 text-center text-slate-600">
            <h3 className="font-semibold">{toyName}</h3>
            <p className="font-semibold">Rating : {rating} ⭐⭐⭐⭐</p>
            <p>{description}</p>
            <p className="font-semibold"> Available : {availableQuantity}</p>
            <p className="font-semibold"> Price : {price} $</p>
            <button 
           
              onClick={() => {
                setCart((prv) => [...prv, toy]);
                navigate("/cart");
              }}
              className="btn btn-success"
            >
              Add to cart
              </button>
            
          </div>
        </div>
        <div>
          <form></form>
        </div>
      </div>
    </MyContainer>
  );
};

export default ToyDetails;
