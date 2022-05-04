import React, { useState } from "react";

function ListingCard({ listing, handleDeleteListing }) {
  const [isFavorite, setIsFavorite] = useState(false);
  const { id, image, description, location } = listing;

  const handleFav = () => {
    setIsFavorite((prevState) => !prevState)
  }

  const handleDelete = () => {
    fetch (`http://localhost:6001/listings/${id}`, {
      method: 'DELETE'
    })
    .then ((resp) => resp.json())
    .then (() => {
      handleDeleteListing(id)
    })
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {isFavorite ? (
          <button className="emoji-button favorite active" onClick = {handleFav} >★</button>
        ) : (
          <button className="emoji-button favorite" onClick = {handleFav} >☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button className="emoji-button delete" onClick = {handleDelete}>🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
