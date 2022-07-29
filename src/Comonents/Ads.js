import React, { useState } from 'react';
import '../Styles/Ads.css';
import Navigation from './Navigation';
import Posts from './Posts';





function Ads() {

    const [dropdonwValue,setDropdonwValue] = useState('Date: Newest on top');
    const [typeOfPosterdropdonwDownVal,setTypeOfPosterdropdonwDownVal] = useState('Date: Newest on top');
    const [dropdonwDown, setDropdonwDown] = useState(false);
    const [typeOfPosterdropdonwDown, setTypeOfPosterdropdonwDown] = useState(false);

    const dropdownClicked = () =>{
        if(dropdonwDown){
            setDropdonwDown(false)
        }else{
            setDropdonwDown(true)
        }
    }
    const typeOfPosterDropdownClicked = () =>{
        if(typeOfPosterdropdonwDown){
            setTypeOfPosterdropdonwDown(false)
        }else{
            setTypeOfPosterdropdonwDown(true)
        }
    }



  return (
    <div className='ads_baseContainer'>
      <Navigation/>
      <div className='ads_containerContainer'>
        <div className='ads_Container'>
            <section className="ads_container_searchSection">
                <div className="ads_container_searchSection_selecLocation_container ads_container_searchSection_items">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                        <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                    </svg>
                    <span>Select Location</span>
                </div>
                <div className="ads_container_searchSection_selecCategory_container ads_container_searchSection_items">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 448 512">
                        <path d="M48 32H197.5C214.5 32 230.7 38.74 242.7 50.75L418.7 226.7C443.7 251.7 443.7 292.3 418.7 317.3L285.3 450.7C260.3 475.7 219.7 475.7 194.7 450.7L18.75 274.7C6.743 262.7 0 246.5 0 229.5V80C0 53.49 21.49 32 48 32L48 32zM112 176C129.7 176 144 161.7 144 144C144 126.3 129.7 112 112 112C94.33 112 80 126.3 80 144C80 161.7 94.33 176 112 176z"/>
                    </svg>
                    <span>Select Category</span>
                </div>
                <div className="ads_container_searchSection_textSearch_container">
                    <div className="ads__textSearch">
                        <input type = 'text' placeholder='What are you looking for?'/>
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                            </svg>
                        </span>
                    </div>
                </div>
            </section>
            <section className='ads_Container_adsAndOptionList'>
                <div className='ads_Container_adsOptionList'>
                    <span className='ads_Container_adsOptionList_titles'>Sort results by</span>
                    <div className='dropudown' onClick={dropdownClicked}>
                        
                        <div className='dropdownText'>
                            <span  className='dropdonwn_selected_item'>{dropdonwValue}</span>
                            <div className={`dropdonw_items_list ${dropdonwDown ? "" : "hide"}`}>
                                <span  className='dropdonw_item' onClick={()=>setDropdonwValue('Date: Newest on top')}>Date: Newest on top</span>
                                <span  className='dropdonw_item' onClick={()=>setDropdonwValue('Date: Oldest on top')}>Date: Oldest on top</span>
                                <span  className='dropdonw_item' onClick={()=>setDropdonwValue('Price: High to low')}>Price: High to low</span>
                                <span  className='dropdonw_item' onClick={()=>setDropdonwValue('price: Low to high')}>price: Low to high</span>

                            </div>
                            
                        </div>
                            
                        
                        
                        <div className='dropdownIcon' onClick={dropdownClicked}>{dropdonwDown ? (<img src={require('../Assests/Icons/Chevron up.svg').default}/>) :
                                                                         (<img src={require('../Assests/Icons/Chevron down.svg').default}/>)}
                        </div>
                    </div>
                    <span className='ads_Container_adsOptionList_titles'>Type of poster</span>
                    <div className='ads_Container_adsOptionList_checkbox'>
                        <input type='checkbox'/> <span>BOOSTER DELIVERY</span>
                    </div>
                    <div className='ads_Container_adsOptionList_checkbox'>
                        <input type='checkbox'/> <span>URGENT</span>
                    </div>
                    <div className='ads_Container_adsOptionList_checkbox'>
                        <input type='checkbox'/> <span>FEATURED</span>
                    </div>
                    <span className='ads_Container_adsOptionList_titles'>Filter ads by</span>
                    <div className='dropudown' onClick={typeOfPosterDropdownClicked}>
                        
                        <div className='dropdownText'>
                            <span  className='dropdonwn_selected_item'>{typeOfPosterdropdonwDownVal}</span>
                            <div className={`dropdonw_items_list ${typeOfPosterdropdonwDown ? "" : "hide"}`}>
                                <span  className='dropdonw_item' onClick={()=>setTypeOfPosterdropdonwDownVal('Date: Newest on top')}>Date: Newest on top</span>
                                <span  className='dropdonw_item' onClick={()=>setTypeOfPosterdropdonwDownVal('Date: Oldest on top')}>Date: Oldest on top</span>
                                <span  className='dropdonw_item' onClick={()=>setTypeOfPosterdropdonwDownVal('Price: High to low')}>Price: High to low</span>
                                <span  className='dropdonw_item' onClick={()=>setTypeOfPosterdropdonwDownVal('price: Low to high')}>price: Low to high</span>

                            </div>
                            
                        </div>
                            
                        
                        
                        <div className='dropdownIcon' onClick={typeOfPosterDropdownClicked}>{typeOfPosterdropdonwDown ? (<img src={require('../Assests/Icons/Chevron up.svg').default}/>) :
                                                                         (<img src={require('../Assests/Icons/Chevron down.svg').default}/>)}
                        </div>
                    </div>
                </div>
                <div className='ads_Container_adsList'>
                    <Posts/>
                    <Posts/>
                    <Posts/>
                    <Posts/>
                </div>
            </section>
        </div>

      </div>
    </div>
  )
}

export default Ads
