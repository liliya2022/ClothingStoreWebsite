import React from 'react';
import ImageGrid from '../components/ImageGrid/ImageGrid';
import './Home.css';

// Sample image URLs - replace with your actual images
const images = [
  'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800',
  'https://images.unsplash.com/photo-1445205170230-053b83016050?w=800',
  'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=800',
  'https://images.unsplash.com/photo-1445205170230-053b83016050?w=800',
  'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800',
  'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=800',
  'https://images.unsplash.com/photo-1445205170230-053b83016050?w=800',
  'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800',
  'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=800',
];

function Home() {
  return (
    <div className="home-page">
      <ImageGrid images={images} />
    </div>
  );
}

export default Home;
