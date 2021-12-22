import React from 'react';
import {
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import './App.css';
import 'antd/dist/antd.css';
import SelectedCountryPage from './components/SelectedCountryPage/SelectedCountryPage';
import HomePage from './components/HomePage/HomePage';

function App() {
  return (
    <div className="App">
        <div className='contentContainer'>
          <Routes>
            <Route path="/" element={<Navigate to="/homePage" />} />
            <Route path="/homePage" element={<HomePage />} />
            <Route path="/homePage/:idCountry" element={<SelectedCountryPage />} />
            {/* <Route path="/myProfile" element={<MyProfile />} /> */}
          </Routes>
        </div>
    </div>
  );
}

export default App;
