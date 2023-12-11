import React, { useState } from 'react';
import LikedSongs from '../../components/LikedSongs';
import './style.css';
import songsData from '../../data'; // Import the songs data

const Discography = () => {
  const [likedSongs, setLikedSongs] = useState([]);
  const [buttonMode, setButtonMode] = useState('showAll'); // 'showAll' or 'showLiked'

  const handleLike = (songId) => {
    if (likedSongs.includes(songId)) {
      setLikedSongs(likedSongs.filter((id) => id !== songId));
    } else {
      setLikedSongs([...likedSongs, songId]);
    }
  };

  const handleButtonClick = () => {
    setButtonMode((prevMode) => (prevMode === 'showAll' ? 'showLiked' : 'showAll'));
  };

  const filteredSongs =
    buttonMode === 'showLiked' ? songsData.filter((song) => likedSongs.includes(song.id)) : songsData;

  return (
    <div className="discography">
      <button onClick={handleButtonClick} className={buttonMode === 'showLiked' ? 'activated' : ''}>
        {buttonMode === 'showLiked' ? 'Show All' : 'Show Liked Songs'}
      </button>
      <h1>Top 5</h1>
      <div className="songs-container">
        {filteredSongs.slice(0, 5).map((song) => (
          <div key={song.id} className="song-card">
            <h3>{song.name}</h3>
            <img src={song.coverArt} alt={`Cover for ${song.name}`} className="song-cover" />
            <button onClick={() => handleLike(song.id)}>
              {likedSongs.includes(song.id) ? 'Unlike' : 'Like'}
            </button>
          </div>
        ))}
      </div>
      <h1>All Songs</h1>
      <div className="songs-container">
        {filteredSongs.map((song) => (
          <div key={song.id} className="song-card">
            <h3>{song.name}</h3>
            <img src={song.coverArt} alt={`Cover for ${song.name}`} className="song-cover" />
            <button onClick={() => handleLike(song.id)}>
              {likedSongs.includes(song.id) ? 'Unlike' : 'Like'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Discography;