
import React from 'react';

const LikedSongs = ({ songs }) => {
  return (
    <div>
      {songs.map((song) => (
        <div key={song.id} className="song-container">
          <h3>{song.name}</h3>
          <img src={song.coverArt} alt={`Cover for ${song.name}`} className="cover-art" />
          <button onClick={() => song.onLike()}>
            {song.liked ? 'Unlike' : 'Like'}
          </button>
        </div>
      ))}
    </div>
  );
};

export default LikedSongs;
