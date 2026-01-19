import React from 'react';
import './ImageGrid.css';

function ImageGrid({ images }) {
  return (
    <div className="image-grid">
      {images.map((imageUrl, index) => (
        <div key={index} className="image-grid-item">
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
