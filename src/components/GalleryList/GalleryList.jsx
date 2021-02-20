/**
 * GalleryList - represents the gallery of images. By componentizing, we 
 * could reuse this component in different applications
 */

import GalleryItem from '../GalleryItem/GalleryItem';

 function GalleryList({galleryList}) {
   return (<>
            {galleryList.map( photo => (
              
                <GalleryItem
                key={photo.id}
                photo={photo}
                />
            
              
))}
  </>);
 }

 export default GalleryList;