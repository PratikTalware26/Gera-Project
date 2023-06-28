import React from "react";
import "./Disclaimer.css";
import { Link } from "react-router-dom";

const Disclaimer = () => {
  return (
    <div className="disclaimer-cont">
      <div>
        <p className="disclaimer">
          Disclaimer & <span><Link to="/privacy">Privacy Policy</Link></span> : The content is for
          information purposes only and does not constitute an offer to avail of
          any service. Prices mentioned are subject to change without notice and
          properties mentioned are subject to availability. Images for
          representation purpose only. This is not the official website. Website
          maintained by our online marketing agency pact partners. We may share
          data with RERA registered brokers/companies for further processing.All
          Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Disclaimer;
