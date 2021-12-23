import React from 'react';
import { BsArrowRightCircle } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import './stateInfoCard.css';

const StateInfoCard = (props) => {
  const { states } = props;

  return (
    <div className='stateCardContainer'>
      {states.map((state, idx) => (
          <Link key={state.cases} to={`/homePage/${state.name}`} className={`background-${idx} individualCardContainter`}>

        <BsArrowRightCircle className='stateCardIcon' />
          <img src={state.map_image} width={120} />
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
