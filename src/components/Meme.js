import React from 'react';

const Meme = () => {
  return (
    <main>
      <div className='form'>
        <input className='form--input' type='text' placeholder='Top Text' />
        <input className='form--input' type='text' placeholder='Bottom Text' />
        <button className='form--button'>Get a new meme image</button>
      </div>
    </main>
  );
};

export default Meme;
