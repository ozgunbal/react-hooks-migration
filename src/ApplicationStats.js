import React from "react";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const ApplicationStats = () => {
  const formData = useSelector(state => state);
  const location = useLocation();
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div className="card" style={{ width: "18rem" }}>
        <div className="card-body">
          <h5 className="card-title">Form Data</h5>
          <p className="card-text">{`${JSON.stringify(formData, null, 2)}`}</p>
        </div>
      </div>
      <div className="card" style={{ width: "18rem" }}>
        <div className="card-body">
          <h5 className="card-title">Current location</h5>
          <p className="card-text">{location.pathname}</p>
        </div>
      </div>
    </div>
  );
};

export default ApplicationStats;
