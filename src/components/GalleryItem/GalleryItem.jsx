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
      console.log('a', photo.id);
      console.log('b', photo.likes);
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
      <img src={photo.path} />
      <p>{photo.likes}</p>
      {/* How do I grab the photo.likes onClick Handler to take the
          photo.likes++ operator to append it to the DOM, I need to use
          props for this, but I how do I interpret that */}
      {/* <p>{photo.likes}={likesHandler}</p> */}
      <p>{photo.description}</p>
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