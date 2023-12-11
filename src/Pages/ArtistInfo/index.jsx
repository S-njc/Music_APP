import React from 'react'
import './style.css'

const ArtistInfo = ({ name, musicType, introduction }) => {
  return (
    <div>
      <h1>{name}Kendrick Lamar</h1>
      <p>{musicType}Hip-Hop/RNB</p>
      <p>{introduction}Kendrick Lamar is one of the biggest artists in hip-hop, with a Pulitzer-winning career that's included the albums good kid m.A.A.d city</p>
    </div>
  );
};

export default ArtistInfo;
