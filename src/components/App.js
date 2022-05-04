import React, {useEffect, useState} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [listings, setListings] = useState([])
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetch ('http://localhost:6001/listings')
    .then ((resp) => resp.json())
    .then ((listings) => setListings(listings))
  }, []);

  const handleDeleteListing = (id) => {
    const updatedListings = listings.filter((listing) => 
      listing.id !== id
    );
    setListings(updatedListings);
  }

  const handleSearch = (currentSearch) => {
    setSearch(currentSearch)
  }

  return (
    <div className="app">
      <Header handleSearch = {handleSearch} />
      <ListingsContainer 
        listings = {listings} 
        handleDeleteListing = {handleDeleteListing}
        search = {search} />
    </div>
  );
}

export default App;
