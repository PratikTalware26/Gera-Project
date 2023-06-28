import React, {useState, useEffect} from "react";
import "./FloorPlans.css";
import mainLogo from "../assets/mainLogo(500 × 200 px).png";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Navigation, Pagination } from "swiper";

import floorImg from "../assets/floorPlan(350 × 230 px).jpg";
import floorImg2 from "../assets/floorPlan2.jpg";
import floorImg3 from "../assets/floorPlan3.jpg";
import floorImg4 from "../assets/floorPlan4.jpg";

import { useLocation } from "react-router-dom";

const FloorPlans = () => {
    // const { setThanksState } = useContext(ThanksContext);
    // const navigate = useNavigate();
  //Handeling Form Logic
  //data
  const [enquiryData, setEnquiryData] = useState({
    name: "",
    email: "",
    phone: "",
    origin: "",
    area: "form_popup",
    ip: "",
    domain: "godrejofficial.in",
    utm_source: "",
    utm_medium: "",
    utm_campaign: "",
    utm_term: "",
    utm_content: "",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    let value = e.target.value;
    setEnquiryData({ ...enquiryData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(enquiryData);
    try {
        // const fetchData = async () => {
        //   const jsonData = JSON.stringify(enquiryData);
        //   await axios
        //     .post(
        //       "https://www.crm.brickfolio.in/api/leads/add_raw_lead",
        //       jsonData,
        //       {
        //         headers: {
        //           "Content-Type": "application/json; charset=utf-8",
        //           "Access-Control-Allow-Origin": "*",
        //         },
        //       }
        //     )
        //     .then((res) => {
        //       setThanksState(true);
        //       navigate("/thanks");
        //     });
        // };
        // fetchData();
      console.log(enquiryData);
    } catch (error) {
      console.log(error.message);
    }
  };

  //User ip address fetching
//   useEffect(() => {
//     const fetchIP = async () => {
//       try {
//         const response = await axios.get('https://godrejofficial.in/userApi.php');
//         const ip = response.data.ip;
//         // console.log(ip)
//         setEnquiryData((prevData) => ({ ...prevData, ip }));
//       } catch (error) {
//         console.log('Error fetching IP address:', error);
//       }
//     };

//     fetchIP();
//   }, []);

  //utm data
  const location = useLocation();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    if (searchParams.get("utm_source")) {
      setEnquiryData((prevData) => ({
        ...prevData,
        utm_source: searchParams.get("utm_source"),
        utm_medium: searchParams.get("utm_medium"),
        utm_campaign: searchParams.get("utm_campaign"),
        utm_term: searchParams.get("utm_term"),
        utm_content: searchParams.get("utm_content"),
      }));
    }
  }, [location]);

  const [formPopup, setFormpopup] = useState(false);
  const [isExiting, setIsExiting] = useState(false);
  const [transitionClass, setTransitionClass] = useState("");

  useEffect(() => {
    if (formPopup) {
      document.body.style.overflow = "hidden";
      setTimeout(() => {
        setTransitionClass("popupEffect");
      }, 10); // Delay adding the class
    } else {
      setTransitionClass(""); // Remove the class immediately
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [formPopup]);

  const closePopup = (e) => {
    e.stopPropagation()
    setIsExiting(true);
    setTimeout(() => {
      setFormpopup(false);
      setIsExiting(false);
    }, 300); // Duration of the transition in milliseconds
  };
  //************** */

  //handling slides wrt windowWidth
  const [slidesPerView, setSlidesPerView] = useState(4);
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
    if(windowWidth<600){
        setSlidesPerView(1)
    }else if (windowWidth < 700) {
      setSlidesPerView(2);
    } else if (windowWidth < 1200) {
      setSlidesPerView(3);
    } else {
      setSlidesPerView(4);
    }
  }, [windowWidth]);

  return (
    <div className="p-2 floor-cont" id="floorplans">
      <h2 className="text-center p-2">Floor Plans</h2>
      <div>
        <Swiper
          pagination={{
            clickable:true
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          slidesPerView={slidesPerView}
          spaceBetween={30}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="floor-img-cont">
            <img src={floorImg} alt="floorImg1" className="w-100" />
            <button className="floor-btn btn main-btn" onClick={()=>setFormpopup(!formPopup)}>View Plan</button>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="floor-img-cont">
            <img src={floorImg2} alt="floorImg2" className="w-100" />
            <button className="floor-btn btn main-btn" onClick={()=>setFormpopup(!formPopup)}>View Plan</button>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="floor-img-cont">
            <img src={floorImg3} alt="floorImg3" className="w-100" />
            <button className="floor-btn btn main-btn" onClick={()=>setFormpopup(!formPopup)}>View Plan</button>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="floor-img-cont">
            <img src={floorImg4} alt="floorImg4" className="w-100" />
            <button className="floor-btn btn main-btn" onClick={()=>setFormpopup(!formPopup)}>View Plan</button>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      {formPopup && (
          <div className={`popupContainer ${isExiting ? "exit" : ""}`} onClick={closePopup}>
            <div className={`popup ${transitionClass}`} onClick={(e)=>e.stopPropagation()}>
              <div className="popup-img-cont">
                <img src={mainLogo} alt="" />
              </div>
              <div className="popup-inp-cont">
                <h2>Register to view plan</h2>
                <form onSubmit={handleSubmit}>
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    pattern="[A-Za-z\s]+"
                    title="Please enter a valid name (only letters and spaces allowed)."
                    onChange={handleChange}
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    onChange={handleChange}
                    required
                  />
                  <input
                    type="text"
                    name="phone"
                    placeholder="Phone Number"
                    minLength="10"
                    maxLength="12"
                    pattern="[0-9]+"
                    title="Please enter a valid number (only numbers allowed)."
                    onChange={handleChange}
                    required
                  />
                  <div className="popup-submit-btn-cont">
                    <button type="submit" className="submit-btn">
                      View Plan
                    </button>
                  </div>
                </form>
                <button className="close-btn" onClick={closePopup}>
                  X
                </button>
              </div>
            </div>
          </div>
        )}
    </div>
  );
};

export default FloorPlans;
