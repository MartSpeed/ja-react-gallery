/**GalleryItem - represents a single image in the gallery with the ability 
 * to click the image to toggle between image and description as well as 
 * the ability to like an image. 
 * */

 function GalleryItem ({photo}) {
   return (<>
      <img src={photo.path} />
      <p>{photo.id}</p>
      <p>{photo.description}</p>
      <p>{photo.likes}</p>
   </>)
 }

 export default GalleryItem;