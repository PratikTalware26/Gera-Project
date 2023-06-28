import React, { useContext } from "react";
import "./Thanks.css";
import { Navigate, useNavigate } from "react-router";
import { ThanksContext } from "../App";

const Thanks = () => {
  const { thanksState, setThanksState } = useContext(ThanksContext);
  const navigate = useNavigate();
  const handleClick = () => {
    setThanksState(false);
    navigate("/");
  };
  if (thanksState) {
    return (
      <div className="thankyou-cont">
        <h1>
          Thank you for contacting us!<br></br>
          Our Sales Team will get back to you shortly!!
        </h1>
        <h2 onClick={handleClick}>&lt; Back to main page</h2>
      </div>
    );
  } else {
    return <Navigate to="/" />;
  }
};

export default Thanks;
