import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

const ApplicationStats = ({ formData, location }) => (
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

const mapStateToProps = state => ({ formData: state });

export default connect(mapStateToProps)(withRouter(ApplicationStats));
