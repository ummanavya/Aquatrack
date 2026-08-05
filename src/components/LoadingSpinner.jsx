import React from "react";
import { ClipLoader } from "react-spinners";
import { FaTint } from "react-icons/fa";

import "../styles/loading.css";

function LoadingSpinner({
  loading = true,
  size = 55,
  message = "Loading..."
}) {

  if (!loading) return null;

  return (
    <div className="loading-overlay">

      <div className="loading-card">

        <div className="loading-logo">
          <FaTint />
        </div>

        <ClipLoader
          loading={loading}
          size={size}
          color="#0d6efd"
        />

        <h3 className="loading-title">
          AquaTrack
        </h3>

        <p className="loading-text">
          {message}
        </p>

      </div>

    </div>
  );
}

export default LoadingSpinner;