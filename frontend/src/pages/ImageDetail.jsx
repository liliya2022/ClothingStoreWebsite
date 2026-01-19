import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './ImageDetail.css';

function ImageDetail() {
  const navigate = useNavigate();
  const location = useLocation();
  const { imageUrl, imageIndex, totalImages } = location.state || {};

  // If no state was passed, redirect to home
  React.useEffect(() => {
    if (!imageUrl) {
      navigate('/');
    }
  }, [imageUrl, navigate]);

  if (!imageUrl) {
    return null;
  }

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="image-detail-page">
      <button className="back-button" onClick={handleBack}>
        ← Back
      </button>
      <div className="image-detail-container">
        <img
          src={imageUrl}
          alt={`Detail view ${imageIndex + 1}`}
          className="detail-image"
        />
        {imageIndex !== undefined && totalImages && (
          <div className="image-counter">
            {imageIndex + 1} / {totalImages}
          </div>
        )}
      </div>
    </div>
  );
}

export default ImageDetail;
