import React from 'react';
import './filterText.css';

const FilterText = () => {
  const filterWord = 'STATS BY STATE';

  return (
        <div className='filterTextContainer'>
            <span>{filterWord}</span>
        </div>
  );
};

export default FilterText;
