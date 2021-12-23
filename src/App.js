import React from 'react';
import {
  Routes,
  Route,
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
            <Route path="/" element={<HomePage />} />
            <Route path="/:idState" element={<SelectedCountryPage />} />
            {/* <Route path="/myProfile" element={<MyProfile />} /> */}
          </Routes>
        </div>
    </div>
  );
}

export default App;
