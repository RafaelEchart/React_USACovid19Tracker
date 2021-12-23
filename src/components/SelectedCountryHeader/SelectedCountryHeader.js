import React from 'react';
import './selectedCountryHeader.css';
import { IoChevronBack } from 'react-icons/io5';
import { AiFillHeart } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import usSeal from '../../assets/unitedStatesSeal.png';

const SelectedCountryHeader = (props) => {
  const { stateName, seal, website } = props;
  return (
    <header className="header">
      <Link to='/homePage'>
        <IoChevronBack className="back-icon" />
      </Link>
      <a href={website} target='_blank' rel='noreferrer'>
      <div className="SelectedCountryTitle"><img width={35} src={seal || usSeal} />{stateName}</div>
      </a>
      <div>
          <AiFillHeart className="heart-icon" />
      </div>
    </header>
  );
};

export default SelectedCountryHeader;
