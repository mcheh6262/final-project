import React, { useEffect, useState } from "react";
import './SearchingArea.css'

function SearchingArea(props) {

    const [watchName, setWatchName] = useState("");
    const [searchResults, setSearchResults] = useState([]);

    useEffect(() => {
        const filteredResults = props.watches.filter(watch =>
          watch.name.toLowerCase().includes(watchName.toLowerCase())
        );
        setSearchResults(filteredResults);
      }, [watchName, props.watches]);
    
      const handleWatchChange = (event) => {
        setWatchName(event.target.value);
      };

      const handleWatchClick = (watch) => {
        props.history.push(`/watch/${watch.id}`);
      };

      return (
        
        <div className="new-registration__controls">
        <div className="new-registration__control">
          <label>watches center</label>
          <input type="text" onChange={handleWatchChange} value={watchName} />
        </div>
        <div className="searching-area">
  
        {searchResults.length > 0 ? (
          <ul className="search-results">
            {searchResults.map(watch => (
              <li key={watch.id} className="watch-item" onClick={() => handleWatchClick(watch)}>
                {watch.name}
              </li>
            ))}
          </ul>
        ) : (
          <p>No results found</p>
        )}
        </div>
      </div>
      );

}

export default SearchingArea;