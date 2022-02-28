import React, { useState } from 'react';
import memesData from '../memesData';

const Meme = () => {
  const [memeImage, setMemeImage] = useState('');

  const handleSubmit = () => {
    const memesArray = memesData.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length) + 1;
    const url = memesArray[randomNumber].url;
    setMemeImage(url);
  };

  return (
    <main>
      <div className='form'>
        <input className='form--input' type='text' placeholder='Top Text' />
        <input className='form--input' type='text' placeholder='Bottom Text' />
        <button onClick={handleSubmit} className='form--button'>
          Get a new meme image
        </button>
      </div>
      <img className='meme--image'src={memeImage} alt={memeImage} />
    </main>
  );
};

export default Meme;
