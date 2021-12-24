import React, { useEffect, useState } from 'react';
import './selectedCountryHeader.css';
import { IoChevronBack } from 'react-icons/io5';
import { AiFillHeart } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import usSeal from '../../assets/unitedStatesSeal.png';

const SelectedCountryHeader = (props) => {
  const [favorite, setFavorite] = useState(false);
  const { stateName, seal, website } = props;

  useEffect(() => {
    const favoriteList = JSON.parse(localStorage.getItem('favoriteStates'));
    if (favoriteList && favoriteList.length) {
      const isItFavorite = favoriteList.filter((fav) => fav === stateName);
      if (isItFavorite.length) {
        setFavorite(true);
      }
    }
  }, []);

  const handleFavoriteStates = () => {
    const favoriteList = JSON.parse(localStorage.getItem('favoriteStates'));

    if (favorite === false) {
      if (favoriteList && favoriteList.length) {
        favoriteList.push(stateName);
        localStorage.setItem('favoriteStates', JSON.stringify(favoriteList));
      } else {
        localStorage.setItem('favoriteStates', JSON.stringify([stateName]));
      }
    } else if (favoriteList && favoriteList.length) {
      const newFavorites = favoriteList.filter((fav) => fav !== stateName);
      localStorage.setItem('favoriteStates', JSON.stringify(newFavorites));
    }
    setFavorite(!favorite);
  };

  return (
    <header className="header">
      <Link to='/'>
        <IoChevronBack className="back-icon" />
      </Link>
      <a href={website} target='_blank' rel='noreferrer'>
      <div className="SelectedCountryTitle"><img width={35} src={seal || usSeal} />{stateName}</div>
      </a>
      <div>
          <AiFillHeart onClick={handleFavoriteStates} className={`heart-icon ${favorite ? 'favorite' : 'notfavorite'}`} />
      </div>
    </header>
  );
};

export default SelectedCountryHeader;
