import React from 'react';
import { Link } from 'react-router';

const ToyCard = ({ toy }) => {
  return (
    <div className="card bg-base-100 rounded-xl shadow-2xl  mt-10 hover:animate-pulse cursor-pointer">
      <figure className="h-50 overflow-hidden">
        <img
          className="w-[700px] h-[400px] object-cover"
          src={toy.pictureURL}
          alt={"toy"}
        />
      </figure>
      <div className="card-body bg-gray-200">
        <h3 key={toy.toyId}>{toy.toyName}</h3>
        <p>Rating : {toy.rating} ⭐⭐⭐⭐</p>
        <p> Available : {toy.availableQuantity}</p>
        <p> Price {toy.price} $</p>
        <Link to={`/toyDetails/${toy.toyId}`} className="btn btn-secondary">
          View More
        </Link>
      </div>
    </div>
  );
};

export default ToyCard;