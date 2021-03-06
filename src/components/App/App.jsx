// App - represents the overall application or site
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';
// COMPONENTS
import Header from '../Header/Header';
import GalleryList from '../GalleryList/GalleryList';

function App() {
const [galleryList, setGalleryList] = useState([]);

useEffect(() => {
  getGalleryList();
}, []);

const getGalleryList = () => {
  axios
    .get('/gallery')
    .then(response => {
      console.log('getGallery GET response', response.data);
      setGalleryList(response.data);
    })
    .catch((error) => {
      console.log('axios GET error', error);
    });
}
    return (
      <div className="App">
        <Header />

        {/* <img src="images/goat_small.jpg"/> */}

        <div className="react_container">
          <GalleryList
          galleryList={galleryList} 
          getGalleryList={getGalleryList}
          />
        </div>

      </div>
    );
}

export default App;
