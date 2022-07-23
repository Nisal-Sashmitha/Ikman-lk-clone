import React from 'react';
import "../Styles/Home.css"
import {  Link } from "react-router-dom";
import {ReactComponent as Mobile} from './../Assests/Icons/Mobile';
import Mobile2 from '../Assests/mobile-phone-svgrepo-com.svg'
function Home() {
  return (
    
    <div className='Home__baseContainer'>
      <header className='Home__Header'>
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
        <div className="home__header__locationContainer">
          <div className="home__header__location">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
              <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
            </svg>
              All of Sri Lanka
          </div>
        </div>
        <div className="home__header__SearchContainer">
          <div className="home__header__Search">
           <input type = 'text' placeholder='What are you looking for?'/>
           <span>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
            </svg>
           </span>
          </div>
        </div>
        
      </header>
      <h3 className='Home__itemCategoryTitle'>Browse items by category</h3>
      <section className='Home__itemCategoryContainer'>
        
        <div className='Home__itemCategoryItems'>
          
          <div className='Home__itemCategoryItem'>
            <div className='Home__itemCategoryItem_Icon_Container'>
              <img src={Mobile2} alt='' style={{width:'40px', height:'40px'}}/>
            </div>
            <div className='Home__itemCategorydetailContainer'>
              <span>Electronics</span>
              <span>103024 ads</span>
              
            </div>

          </div>
          <div className='Home__itemCategoryItem'>
            <div className='Home__itemCategoryItem_Icon_Container'>
              <img src={Mobile2} alt='' style={{width:'40px', height:'40px'}}/>
            </div>
            <div className='Home__itemCategorydetailContainer'>
              <span>Electronics</span>
              <span>103024 ads</span>
              
            </div>

          </div>
          <div className='Home__itemCategoryItem'>
            <div className='Home__itemCategoryItem_Icon_Container'>
              <img src={Mobile2} alt='' style={{width:'40px', height:'40px'}}/>
            </div>
            <div className='Home__itemCategorydetailContainer'>
              <span>Electronics</span>
              <span>103024 ads</span>
              
            </div>

          </div>
          <div className='Home__itemCategoryItem'>
            <div className='Home__itemCategoryItem_Icon_Container'>
              <img src={Mobile2} alt='' style={{width:'40px', height:'40px'}}/>
            </div>
            <div className='Home__itemCategorydetailContainer'>
              <span>Electronics</span>
              <span>103024 ads</span>
              
            </div>

          </div>
          <div className='Home__itemCategoryItem'>
            <div className='Home__itemCategoryItem_Icon_Container'>
              <img src={Mobile2} alt='' style={{width:'40px', height:'40px'}}/>
            </div>
            <div className='Home__itemCategorydetailContainer'>
              <span>Electronics</span>
              <span>103024 ads</span>
              
            </div>

          </div>
          <div className='Home__itemCategoryItem'>
            <div className='Home__itemCategoryItem_Icon_Container'>
              <img src={Mobile2} alt='' style={{width:'40px', height:'40px'}}/>
            </div>
            <div className='Home__itemCategorydetailContainer'>
              <span>Electronics</span>
              <span>103024 ads</span>
              
            </div>

          </div>
          <div className='Home__itemCategoryItem'>
            <div className='Home__itemCategoryItem_Icon_Container'>
              <img src={Mobile2} alt='' style={{width:'40px', height:'40px'}}/>
            </div>
            <div className='Home__itemCategorydetailContainer'>
              <span>Electronics</span>
              <span>103024 ads</span>
              
            </div>

          </div>
          <div className='Home__itemCategoryItem'>
            <div className='Home__itemCategoryItem_Icon_Container'>
              <img src={Mobile2} alt='' style={{width:'40px', height:'40px'}}/>
            </div>
            <div className='Home__itemCategorydetailContainer'>
              <span>Electronics</span>
              <span>103024 ads</span>
              
            </div>

          </div><div className='Home__itemCategoryItem'>
            <div className='Home__itemCategoryItem_Icon_Container'>
              <img src={Mobile2} alt='' style={{width:'40px', height:'40px'}}/>
            </div>
            <div className='Home__itemCategorydetailContainer'>
              <span>Electronics</span>
              <span>103024 ads</span>
              
            </div>

          </div><div className='Home__itemCategoryItem'>
            <div className='Home__itemCategoryItem_Icon_Container'>
              <img src={Mobile2} alt='' style={{width:'40px', height:'40px'}}/>
            </div>
            <div className='Home__itemCategorydetailContainer'>
              <span>Electronics</span>
              <span>103024 ads</span>
              
            </div>

          </div>

        </div>
        

      </section>
    </div>
  )
}

export default Home
