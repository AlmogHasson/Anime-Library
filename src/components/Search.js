import React from "react";
import Input from '@mui/material/Input';


const ariaLabel = { 'aria-label': 'description' };


const Search = ({handleKeyPress}) => {
    return(
        <div>
            <Input
             placeholder="Search for an anime"
             inputProps={ariaLabel}
             onChange={handleKeyPress}
             onKeyDown={handleKeyPress}
              />
        </div>
        
    );
}

export default Search;