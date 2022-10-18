import React from 'react';
import './Profile.css';
import Sidebar from '../../components/Sidebar';
import profileFrame from './SVG/profileFrame.png';
import profilePic from './SVG/user.jpg';
import border from './SVG/border.svg';
import Side from '../../components/Side';

function Profile() {
  return (
    <div className="flex flex-shrink-0 w-screen h-screen">
        <Sidebar />
        <div className="main flex flex-col w-[100%] pl-[15%] pr-[5%]">
          <div className="main-frame">
            <div className="main-greet">
              <div className='article'>
                <p className='user-greet'>Hello User</p>
                <p className='date'>20 October</p>
              </div>
              <img 
                className='border'
                src={border} 
                alt="Bottom Border" />
            </div>
            <div className="frame">
              <img 
                src={profileFrame} 
                alt="Frame" />
              <div className="details">
                <div className='details-frame'>
                  <div className="user-main">
                    <img 
                      src={profilePic}
                      alt="ProfilePicture" />
                    <div className="about-user">
                      <h3>Peter Parker</h3>
                      <p className='college'>IIT BHU</p>
                    </div>
                    <p className='ky-id'>KY ID: #KY007</p>
                  </div>
                  <div className="user-details">
                    <ul className="main-details">
                      <li>Age: 21</li>
                      <li>Phone: 1234567890</li>
                      <li>Mail ID: peterparker@itbhu.ac.in</li>
                      <li>Year of Study: 3rd</li>
                    </ul>
                    <ul className='ky-details'>
                      <li>Competitions: 2</li>
                      <li>Events: 2</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="side">
            <Side />
          </div>
        </div>
    </div>
  );
}

export default Profile