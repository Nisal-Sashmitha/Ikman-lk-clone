import React from 'react';
import '../Styles/Navigation.css';
import {  Link } from "react-router-dom";

function Navigation() {
  return (
        <div className="Home__navigation">
          <div className="Home__navItem">
            <Link to="/Home">
              <img class="ikmanLkIcon" alt='ikman.lk logo' src={require('../Assests/square_logo_ikman-copy.png')}/>
            </Link>
            <Link class="Home__nav__all-ads-btn" to="/AllAds">
              All ads
            </Link>
            <div className="Home__navlanguageToggle">
              <span className="Home__navlanguageToggleBtn left">සිංහල</span>
              <span className="Home__navlanguageToggleBtn right">English</span>
            </div>
            

          </div>
          <div className="Home__navItem">
            
              <div className='Home__navIte_chat'>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-chat-fill" viewBox="0 0 16 16">
                  <path d="M8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6-.097 1.016-.417 2.13-.771 2.966-.079.186.074.394.273.362 2.256-.37 3.597-.938 4.18-1.234A9.06 9.06 0 0 0 8 15z"/>
                </svg>
                <span>chat</span>
              </div>
              <div className='Home__navIte_login'>
                <svg  xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
                  <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                </svg>
                <span>login</span>
              </div>
            
            <button class='Home__nav__postYourAddBtn'>POST YOUR AD</button>
            
          </div>
        </div>
  )
}

export default Navigation
