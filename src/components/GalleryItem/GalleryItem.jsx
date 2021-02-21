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
    console.log('this is toggle track', toggleTrack, typeof toggleTrack);
    // this makes it so that every other click is added and divided so
    // that there is always an even number
    // use a ternary operator for the purpose of react
    // this needs to be practice more, forget how to make these
    return (
      toggleTrack % 2 === 0 ?  (<p>photo.path</p>) :  (<p>photo.description</p>)
    )
  }

    // const addLikes = (prop_likes) => {
    //   let likesId = prop_likes.GalleryList.id;
    //   console.log('the like button works', target.id);
    //   axios
    //     .put(`/gallery/like:${prop_likes.target.id}`)
    //     .then(response => {
    //       console.log('inside te GET response for addLikes function component', response.data);
    //       console.log('this is likesId', likesId);
    //     })
    //     .catch((error) => {
    //       console.log('addLikes component error', error);
    //     })
    // }  

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
      <div onClick={() => tileSwap(setTrackToggle(toggleTrack + 1))}>
      <img src={photo.path} />
      </div>
          
      <p>{photo.likes}</p>
      {/* How do I grab the photo.likes onClick Handler to take the
          photo.likes++ operator to append it to the DOM, I need to use
          props for this, but I how do I interpret that */}

      {/* <p>{photo.likes}={likesHandler}</p> */}

      <p>
        {photo.description}
      </p>

      {/* 
        1. we need to call the function to picture swap here
        2. on the click of the photo.path, it will swap to the photo.description
        3. on the click of the photo.description, it will swap to the photo.path
        4. it needs a way to keep track the click function so that the picture will have
        5. we need to describe 
      */}

      <p>
        {/* why do I need to add a function inside of the  */}
        {/* when using the onClick=() method in a button to call a function
        use an empty arrow function to pass the value for this to work. */}
        <button onClick={() => likesHandler()}> Submit</button>
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