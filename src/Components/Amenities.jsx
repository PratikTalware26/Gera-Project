import React, { useState, useEffect } from "react";
import "./Amenities.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Navigation, Pagination } from "swiper";

// import amenImg1 from "../assets/gallery_img1.jpeg";
import amenImg1 from "../assets/amenImg.jpg";
import amenImg2 from "../assets/amenImg2.jpg";
import amenImg3 from "../assets/amenImg3.jpg";
import amenImg4 from "../assets/amenImg4.jpg";
import amenImg5 from "../assets/amenImg5.jpg";

const Amenities = () => {
  const [enlargedImage, setEnlargedImage] = useState(false);

  // Function to handle image click and enlarge it
  const handleImageClick = () => {
    setEnlargedImage(true);
  };

  // Function to close the enlarged image
  const closeEnlargedImage = () => {
    setEnlargedImage(false);
  };

  //handling slides wrt windowWidth
  const [slidesPerView, setSlidesPerView] = useState(3);
  const [windowWidth, setWindowwidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setWindowwidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (windowWidth < 700) {
      setSlidesPerView(1);
    } else if (windowWidth < 1200) {
      setSlidesPerView(2);
    } else {
      setSlidesPerView(3);
    }
  }, [windowWidth]);

  useEffect(()=>{
    if (enlargedImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  },[enlargedImage])

  return (
    <div className="p-2 amenities-cont" id="amenities">
      <h2 className="text-center p-2">Amenities</h2>
      <div>
        <Swiper
          pagination={true}
          navigation={true}
          slidesPerView={slidesPerView}
          spaceBetween={30}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={amenImg1} alt="" className="w-100" onClick={handleImageClick}/>
          </SwiperSlide>
          <SwiperSlide>
            <img src={amenImg2} alt="" className="w-100" onClick={handleImageClick}/>
          </SwiperSlide>
          <SwiperSlide>
            <img src={amenImg3} alt="" className="w-100" onClick={handleImageClick}/>
          </SwiperSlide>
          <SwiperSlide>
            <img src={amenImg4} alt="" className="w-100" onClick={handleImageClick}/>
          </SwiperSlide>
          <SwiperSlide>
            <img src={amenImg5} alt="" className="w-100" onClick={handleImageClick}/>
          </SwiperSlide>
        </Swiper>
      </div>
      {enlargedImage && (
        <div className="enlarged-image-overlay" onClick={closeEnlargedImage}>
          <div className="enlarged-image-container" onClick={(e)=>e.stopPropagation()}>
            <div>
              <Swiper
                pagination={true}
                slidesPerView={1}
                navigation={windowWidth<900?false:true}
                spaceBetween={10}
                modules={[Pagination, Navigation]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <img src={amenImg1} alt="" className="w-100" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={amenImg2} alt="" className="w-100" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={amenImg3} alt="" className="w-100" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={amenImg4} alt="" className="w-100" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={amenImg5} alt="" className="w-100" />
                </SwiperSlide>
              </Swiper>
            </div>
            <div className="close-button" onClick={closeEnlargedImage}>
              &#x2715;
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Amenities;
