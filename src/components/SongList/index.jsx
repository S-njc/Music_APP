import React from 'react';

const SongList = ({ songs }) => {
  return (
    <div>
      <h2>Song List</h2>
      <ul>
        {songs.map((song) => (
          <li key={song.id}>
            <img src={song.coverArt} alt={song.name} />
            <p>{song.name}</p>
            <p>{song.releaseDate}</p>
            <button onClick={song.onLike}>
              {song.liked ? 'Unlike' : 'Like'}
            </button>
          </li>
        ))}
      </ul>
    </div>
  ); 
};

export default SongList;
