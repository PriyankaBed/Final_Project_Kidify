import React from "react";

function Searchbar ({handleChange}){
    return(
    <form className="search-form">
            <input className="search" type="search" placeholder="Search..." />
          </form>
    )
}

export default Searchbar