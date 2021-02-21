/**
 * GalleryList - represents the gallery of images. By componentizing, we 
 * could reuse this component in different applications
 */

import GalleryItem from '../GalleryItem/GalleryItem';

 function GalleryList({galleryList, getGalleryList}) {
   console.log('this is the galleryList component', galleryList);

  //  return (
  //    <p>something</p>
  //  )
   return (<>
   
            {galleryList.map( (photo) => {
            return (              
                <GalleryItem
                key={photo.id}
                photo={photo}
                getGalleryList={getGalleryList}
                />
            )             
          })}
  </>)
 };

 export default GalleryList;