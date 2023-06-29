import React, { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import mainLogo from "../assets/mainLogo(500 × 200 px).png";
import "./BottomButtons.css";
import axios from "axios";
import { ThanksContext } from "../App";
import '@fortawesome/fontawesome-free/css/all.css';

const BottomButtons = () => {
    const { setThanksState } = useContext(ThanksContext);
    const navigate = useNavigate();
  //Handeling Form Logic
  //data
  const [enquiryData, setEnquiryData] = useState({
    name: "",
    email: "",
    phone: "",
    origin: "",
    area: "form_popup",
    ip: "",
    domain: "geradeveloper.in",
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
        const fetchData = async () => {
          const jsonData = JSON.stringify(enquiryData);
          await axios
            .post(
              "https://www.crm.brickfolio.in/api/leads/add_raw_lead",
              jsonData,
              {
                headers: {
                  "Content-Type": "application/json; charset=utf-8",
                  "Access-Control-Allow-Origin": "*",
                },
              }
            )
            .then((res) => {
              setThanksState(true);
              navigate("/thanks");
            });
        };
        fetchData();
      // console.log(enquiryData);
    } catch (error) {
      console.log(error.message);
    }
  };

    //User ip address fetching
    useEffect(() => {
        const fetchIP = async () => {
          try {
            const response = await axios.get('https://geradeveloper.in/userIp.php');
            const ip = response.data.ip;
            // console.log(ip)
            setEnquiryData((prevData) => ({ ...prevData, ip }));
          } catch (error) {
            console.log('Error fetching IP address:', error);
          }
        };
    
        fetchIP();
      }, []);

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

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const [visible, setVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(
    window.pageYOffset || document.documentElement.scrollTop
  );

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos =
        window.pageYOffset || document.documentElement.scrollTop;
      const isVisible = prevScrollPos > currentScrollPos;

      setVisible(isVisible);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  if (windowWidth < 600) {
    return (
      <>
        <div className={`bottom-btn-cont ${visible ? "visible" : ""}`}>
          <div>
            <a href="tel:+919730003331">
            <button>
              <i className="fas fa-phone-alt m-1" aria-hidden="true"></i>Enquiry
            </button>
            </a>
          </div>
          <div>
            <button onClick={()=>setFormpopup(!formPopup)}>₹ Cost Sheet</button>
          </div>
          <div>
            <a href="https://wa.link/eelpvs">
            <button>
              <i className="fab fa-whatsapp m-1" aria-hidden="true"></i>Whatsapp
            </button>
            </a>
          </div>
        </div>

        {formPopup && (
          <div className={`popupContainer ${isExiting ? "exit" : ""}`} onClick={closePopup}>
            <div className={`popup ${transitionClass}`} onClick={(e)=>e.stopPropagation()}>
              <div className="popup-img-cont">
                <img src={mainLogo} alt="" />
              </div>
              <div className="popup-inp-cont">
                <h2>Register for costsheet</h2>
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
                      View Costsheet
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
      </>
    );
  } else {
    return null;
  }
};

export default BottomButtons;
