/**GalleryItem - represents a single image in the gallery with the ability 
 * to click the image to toggle between image and description as well as 
 * the ability to like an image. 
 * */

 /**
  * I am going to move the component operators from the App.jsx and put
  * them into the "GalleryItem" Component to manipulate the data from
  * here and using props to put info on the DOM
  */

  import {useState} from 'react';
  import axios from "axios";
  // importing the GalleryList to help with gallery item props

 function GalleryItem ({photo, getGalleryList}) {

  // this is the click event counter, this will hold the number of clicks
  // create a useState function to hold the start of a number value;
  const [toggleTrack, setTrackToggle] = useState(2);

  // this is the function variable that will be called to inject
  // or swap the photo.path to photo.description and back again
  const tileSwap = () => {
    console.log('inside of the tileSwap!');
    console.log('this is toggle track', toggleTrack);
    // this makes it so that every other click is added and divided so
    // that there is always an even number
    // use a ternary operator for the purpose of react
    // this needs to be practice more, forget how to make these
    return (
      (toggleTrack % 2 === 0) ? (<p> <img src={photo.path} /> </p>) : (<p>{photo.description}</p>)
    )
    // (<p>{photo.path}</p>)
    // console.log('im the photo')
    // (<p>{photo.description}</p>)
    // console.log('im in the info')
  }
    const likesHandler = () => {
      //e.preventDefault();
      console.log('like button was clicked');
      // axios GET request for database information of GalleryList 
        axios
          .put(`/gallery/like/${photo.id}`)
          .then(() => {
            console.log('likesHandler button onClick PUT response', photo.likes);
            getGalleryList();
          })
          .catch((error) => {
            console.log('likesHandler PUT error', error)
          });
    }

   return (<>
      <div onClick={() => setTrackToggle(toggleTrack + 1)}>
      {tileSwap()}
      
      </div>
          
      <p>{photo.likes}</p>

      {/* <p>
        {photo.description}
      </p> */}

      <p>
        {/* when using the onClick=() method in a button to call a function
        use an empty arrow function to pass the value for this to work. */}
        <button onClick={() => likesHandler()}> Like!</button>
      </p>
      
   </>)
 }

 export default GalleryItem;

 /**
  * variable options
  * <p>{photo.id}</p>
  * <p>{photo.likes}</p>
  * <p>{photo.description}</p>
  * 
  */