import React from 'react';
import Logo from '../logo.png';

const Header = () => {
  return (
    <header className='header'>
      <img className='header--image' src={Logo} alt='meme-gen logo' />
      <h2 className='header--title'>Meme Generator</h2>
      <h4 className='header--project'>React Course - Project </h4>
    </header>
  );
};

export default Header;
