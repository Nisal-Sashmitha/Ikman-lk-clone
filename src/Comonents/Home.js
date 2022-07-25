import React from 'react';
import "../Styles/Home.css"
import {  Link } from "react-router-dom";
import Mobile from '../Assests/Icons/mobile-phone-svgrepo-com.svg';
import Footer from './Footer';

const itemCategories = [
  {
    image:"https://img.icons8.com/external-vitaliy-gorbachev-flat-vitaly-gorbachev/58/000000/external-mobile-phone-children-toys-vitaliy-gorbachev-flat-vitaly-gorbachev.png",
    title:'Electronics',
    noOfAdds:'232,000 ads'

  },
  {
    image:"https://img.icons8.com/fluency/48/000000/car.png",
    title:'Vehicles',
    noOfAdds:'32,000 ads'

  },
  {
    image:"https://img.icons8.com/fluency/48/000000/cottage.png",
    title:'Properties',
    noOfAdds:'44,449 ads'

  },
  {
    image:"https://img.icons8.com/external-kiranshastry-lineal-color-kiranshastry/64/000000/external-oven-appliances-kiranshastry-lineal-color-kiranshastry.png",
    title:'Home & Garden',
    noOfAdds:'17453 ads'

  },
  {
    image:"https://img.icons8.com/stickers/100/000000/factory.png",
    title:'Bussiness & Industry',
    noOfAdds:"13,243 ads"

  },
  {
    image:"https://img.icons8.com/color-glass/48/000000/dog.png"  ,
    title:'Animals',
    noOfAdds:'12,345 ads'

  },
  {
    image:"https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/000000/external-services-marketing-technology-flaticons-lineal-color-flat-icons.png",
    title:'Services',
    noOfAdds:'8,439 ads'

  },
  {
    image:"https://img.icons8.com/doodle/48/000000/football2--v1.png",
    title:'Hobby, Sport, & Kids',
    noOfAdds:'8,562 ads'

  },
  {
    image:"https://img.icons8.com/external-sbts2018-flat-sbts2018/58/000000/external-jobs-social-media-basic-1-sbts2018-flat-sbts2018.png",
    title:'Jobs',
    noOfAdds:'5,151 ads'

  },
  {
    image:"https://img.icons8.com/external-icongeek26-linear-colour-icongeek26/64/000000/external-watch-measurement-icongeek26-linear-colour-icongeek26.png",
    title:'Fasion & Beauty',
    noOfAdds:'4,581 ads'

  },{
    image:"https://img.icons8.com/fluency/48/000000/grocery-bag.png",
    title:'Essentials',
    noOfAdds:'2,212 ads'

  },{
    image:"https://img.icons8.com/color/48/000000/graduation-cap.png",
    title:'Education',
    noOfAdds:'1,858 ads'

  }
  ,{
    image:"https://img.icons8.com/color/48/000000/open-box.png",
    title:'Other',
    noOfAdds:'1,548 ads'

  },{
    image:"https://img.icons8.com/external-flat-icons-maxicons/85/000000/external-agriculture-farming-flat-flat-icons-maxicons-13.png",
    title:'Agriculture',
    noOfAdds:'1,251 ads'

  },{
    image:"https://img.icons8.com/color-glass/48/000000/business.png",
    title:'Work Overseas',
    noOfAdds:'858 ads'

  }
]

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
          {itemCategories.map((category,index)=>(
            <div key={index} className='Home__itemCategoryItem'>
              <div className='Home__itemCategoryItem_Icon_Container'>
                <img src={category.image} alt='' style={{width:'50px', height:'50px'}}/>
              </div>
              <div className='Home__itemCategorydetailContainer'>
                <span>{category.title}</span>
                <span>{category.noOfAdds}</span>
                
              </div>

            </div>


          ))}
          
          
          
          
        </div>
       

      </section>
      <footer>
        <Footer/>
      </footer>
      
    </div>
  )
}

export default Home
