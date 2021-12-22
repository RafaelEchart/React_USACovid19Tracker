import React from 'react';
import './selectedCountryHeader.css';
import { IoChevronBack } from 'react-icons/io5';
import { AiFillHeart } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import flag from '../../assets/alaska-large.png';

const SelectedCountryHeader = () => {
  console.log('hello');
  return (
    <header className="header">
      <Link to='/homePage'>
        <IoChevronBack className="back-icon" />
      </Link>
      <div className="SelectedCountryTitle"><img width={35} src={flag} />Alabama</div>
      <div>
          <AiFillHeart className="heart-icon" />
      </div>
    </header>
  );
};

export default SelectedCountryHeader;
