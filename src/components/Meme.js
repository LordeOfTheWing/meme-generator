import React, { useState } from 'react';
import memesData from '../memesData';

const Meme = () => {
  const meme = {
    topText: 'One does not simply',
    bottomText: 'Walk into Mordor',
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

  const handleChange = (event) => {
    const { name, value } = event.target;
    setMemeImage((prevMeme) => {
      return {
        ...prevMeme,
        [name]: value,
      };
    });
  };

  return (
    <main>
      <div className='form'>
        <input
          name='topText'
          className='form--input'
          type='text'
          placeholder='Top Text'
          value={memeImage.topText}
          onChange={handleChange}
        />
        <input
          name='bottomText'
          className='form--input'
          type='text'
          placeholder='Bottom Text'
          value={memeImage.bottomText}
          onChange={handleChange}
        />
        <button onClick={getMemeImage} className='form--button'>
          Get a new meme image
        </button>
      </div>
      <div className='meme'>
        <img
          className='meme--image'
          src={memeImage.randomImage}
          alt={memeImage.randomImage}
        />
        <h2 className='meme--text top'>{memeImage.topText}</h2>
        <h2 className='meme--text bottom'>{memeImage.bottomText}</h2>
      </div>
    </main>
  );
};

export default Meme;
