import React from 'react';
import { BsArrowRightCircle } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import USMAP from '../../assets/US-MAP.png';
import './stateInfoCard.css';

const StateInfoCard = () => {
  const info = [
    {
      name: 'CZECH REPUBLIC',
      cases: 948,
      image: USMAP,
    },
    {
      name: 'ITALY',
      cases: 601,
      image: USMAP,
    },
    {
      name: 'CROATIA',
      cases: 439,
      image: USMAP,
    },
    {
      name: 'DENMARK',
      cases: 407,
      image: USMAP,
    },
  ];
  return (
    <div className='stateCardContainer'>
      {info.map((state, idx) => (
          <Link key={state.cases} to='/homePage/ecuador' className={`background-${idx} individualCardContainter`}>

        <BsArrowRightCircle className='stateCardIcon' />
          <img src={state.image} width={120} />
          <div className='innerDivAlignment'>
            <h2>{state.name}</h2>
            <span>{state.cases}</span>
          </div>

          </Link>
      ))}
    </div>
  );
};

export default StateInfoCard;
