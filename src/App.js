import './App.css';
import React, { useState } from 'react';
import axios from 'axios';
import Display from './Display';

function App() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const apiKey = "636e1481b4f3c446d26b8eb6ebfe7127";

  const changeHandler = e => {
    setSearch(e.target.value);
  }

  const onClickHandler = () => {
    axios
      .get(
        `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${search}&per_page=24&format=json&nojsoncallback=1`
      )
      .then(response => setData(response.data.photos.photo))
      .catch(error => {
        console.error("Error fetching photos:", error);
      });
  }
  return (
    <div className="App">
      <form onSubmit={e => e.preventDefault()}>
        <h5>Gallery Snapshot</h5>
        <input
          size="30"
          type="text"
        
          value={search}
          onChange={changeHandler}
        />
        <br /><br />
        <button className="btn btn-primary" onClick={onClickHandler}>Search</button>
      </form>
      {data.length >= 1 ? <Display data={data} /> : <h4>Loading...</h4>}
    </div>
  );
}

export default App;