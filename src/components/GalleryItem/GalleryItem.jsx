/**GalleryItem - represents a single image in the gallery with the ability 
 * to click the image to toggle between image and description as well as 
 * the ability to like an image. 
 * */

 function GalleryItem ({photo}) {
    const addLikes = () => {
      console.log('the like button works');
    }


 

   return (<>
      <img src={photo.path} />
      <p>{photo.likes}</p>
      <p>{photo.description}</p>
      <p>
        {/* why do I need to add a function inside of the  */}
        <button onClick={() => addLikes()}> Submit</button>
      </p>
      
   </>)
 }

 export default GalleryItem;

 /**
  * variable options
  * <p>{photo.id}</p>
  * 
  * <p>{photo.description}</p>
  * 
  */