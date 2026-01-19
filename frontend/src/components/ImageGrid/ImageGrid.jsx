import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ImageGrid.css';

function ImageGrid({ images }) {
  const navigate = useNavigate();

  const handleImageClick = (imageUrl, index) => {
    navigate('/image-detail', {
      state: {
        imageUrl,
        imageIndex: index,
        totalImages: images.length,
      },
    });
  };

  return (
    <div className="image-grid">
      {images.map((imageUrl, index) => (
        <div
          key={index}
          className="image-grid-item"
          onClick={() => handleImageClick(imageUrl, index)}
        >
          <img
            src={imageUrl}
            alt={`Gallery image ${index + 1}`}
            loading="lazy"
          />
        </div>
      ))}
    </div>
  );
}

export default ImageGrid;
