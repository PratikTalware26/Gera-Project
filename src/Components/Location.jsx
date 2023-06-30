import React, { useEffect, useState } from 'react'
import "./Location.css"
import locationImg from "../assets/locationImg.jpg"

const Location = () => {
    const [enlargedImage, setEnlargedImage] = useState(null);

  // Function to handle image click and enlarge it
  const handleImageClick = (src) => {
    setEnlargedImage(src);
  };

  // Function to close the enlarged image
  const closeEnlargedImage = () => {
    setEnlargedImage(null);
  };
  useEffect(() => {
    if (enlargedImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [enlargedImage]);

  return (
    <div className='d-flex location-cont p-3' id="location">
        <div className='p-3 location-desc'>
            <h2>GERA World Of Joy Location</h2>
            <p>
            Kharadi is a prominent neighborhood located in the eastern part of Pune, Maharashtra, India. It is known for its growing IT and business parks, making it a preferred residential area for professionals working in the IT sector. The area offers a range of residential complexes, commercial spaces, and recreational amenities.
            </p>
            <p>
            Pune Railway Station: The Pune Railway Station is situated around 10-13 kilometers away from Kharadi, depending on the route taken.
            </p>
            <p>
            Pune International Airport: Kharadi is located approximately 7-9 kilometers away from Pune International Airport, depending on the specific location within Kharadi.
            </p>
            <p>
            Hinjewadi IT Park: Hinjewadi, one of Pune's major IT hubs, is located approximately 18-20 kilometers away from Kharadi. The commute time can vary depending on the traffic conditions.
            </p>
            <p>
            Magarpatta City: Magarpatta City is a well-known IT park and residential area in Pune. It is located approximately 6-8 kilometers away from Kharadi.
            </p>
        </div>
        <div className='location-img-cont'>
            {/* <img src="" alt="" /> */}
            <i className="fas fa-search-plus fa-2x m-1 zoom-icon-btn" aria-hidden="true" onClick={()=>handleImageClick(locationImg)}></i>
        </div>
        {enlargedImage && (
        <div className="enlarged-image-overlay" onClick={closeEnlargedImage}>
          <div className="enlarged-image-container">
            <img src={enlargedImage} alt="" className="enlarged-image" />
            <div className="close-button" onClick={closeEnlargedImage}>
              &#x2715;
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Location