import React from "react";
import SearchCard from "../utils/searchCard";

class Search extends React.Component{
    render(){
        return(
            <div>
                <SearchCard/>
                <SearchCard/>
                <SearchCard/>
            </div>
        )
    }
}

export default Search;