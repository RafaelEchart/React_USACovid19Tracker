import React, { useState } from 'react';
import './homePageHeader.css';
import { FaSearch } from 'react-icons/fa';
import { Popover, Input, Checkbox } from 'antd';

const HomePageHeader = (props) => {
  const { handleSearch, handleMenu } = props;
  const [inputState, setInputState] = useState(false);

  const checkboxHandler = (state) => {
    setInputState(!inputState);
    handleMenu(state);
  };

  const text = <span>Search States</span>;
  const content = (
    <div className='filterBox'>
      <Input placeholder="Enter state" className='favoriteInput' disabled={inputState} onChange={(e) => handleSearch(e.target.value)} />
      <Checkbox onChange={(e) => checkboxHandler(e.target.checked) }>Show only favorites</Checkbox>
    </div>
  );

  return (

    <header className="header">
      <div className="desktopMenu">
          <input
            className="menu-btn"
            type="checkbox"
            title="Reset Form"
            value="Reset Form"
            id="menu-btn"
            />
          <nav className="mobileNavBackground">
            <div
              className="menu-icon"
              id="menuButton"
              role="button"
              tabIndex="0"
              htmlFor="menu-icon"
              >
              <span className="navicon" />
            </div>
          </nav>
        </div>
        <div className="title">
        USA Covid-19 Tracker
        </div>
        <div>

        <Popover placement="bottomRight" title={text} content={content} trigger="click">
        <FaSearch className='search-icons'/>
        </Popover>
        </div>

    </header>

  );
};

export default HomePageHeader;
