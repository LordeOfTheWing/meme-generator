import React, { useState } from 'react';
import memesData from '../memesData';

const Meme = () => {
  const meme = {
    topText: '',
    bottomText: '',
    randomImage: 'http://i.imgflip.com/1bij.jpg',
  };

  const [memeImage, setMemeImage] = useState(meme);

  const [allMemeImages, setAllMemeImages] = useState(memesData);

  const getMemeImage = () => {
    const memesArray = allMemeImages.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length) + 1;
    const url = memesArray[randomNumber].url;

    setMemeImage((prevMeme) => {
      return {
        ...prevMeme,
        randomImage: url,
      };
    });
  };

  return (
    <main>
      <div className='form'>
        <input className='form--input' type='text' placeholder='Top Text' />
        <input className='form--input' type='text' placeholder='Bottom Text' />
        <button onClick={getMemeImage} className='form--button'>
          Get a new meme image
        </button>
      </div>
      <img
        className='meme--image'
        src={memeImage.randomImage}
        alt={memeImage.randomImage}
      />
    </main>
  );
};

export default Meme;
