import React from 'react';
import { Link } from 'react-router';

const ToyCard = ({ toy }) => {
  return (
    <div className="card bg-base-100 rounded-xl shadow-xl space-y-3 mt-10">
      <figure className="h-80 overflow-hidden">
        <img
          className="w-full h-full object-cover"
          src={toy.pictureURL}
          alt={""}
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