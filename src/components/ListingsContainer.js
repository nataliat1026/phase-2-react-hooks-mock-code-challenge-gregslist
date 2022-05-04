import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ listings, handleDeleteListing, search }) {
  
  const filteredListings = listings.filter((listing) => 
      listing.description.toLowerCase().includes(search.toLowerCase()))

  const listingCards = filteredListings.map((listingObj) => {
    return <ListingCard 
      key = {listingObj.id} 
      listing = {listingObj} 
      handleDeleteListing = {handleDeleteListing} />
  })

  return (
    <main>
      <ul className="cards">
        {listingCards}
      </ul>
    </main>
  );
}

export default ListingsContainer;
