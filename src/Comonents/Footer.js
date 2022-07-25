import React from 'react';
import '../Styles/Footer.css';

function Footer() {
  return (
    <div style={{width:"100%", display:'flex', flexDirection:'column', alignItems:'center'}}>
      <hr className='footer__horizontalLine'/>
      <div className='footer_details_container'>
        <div className='footer_detail_container'>
          <span className='footer_link_titile'></span>
          <span>Sell Fast</span>
          <span>2</span>
          <span>3</span>
          <span>4</span>
        </div> 
        <div className='footer_detail_container'>
          <span className='footer_link_titile'>More from ikman</span>
          <span className='footer_link'><a href='#'>Sell fast</a></span>
          <span className='footer_link'><a href='#'>Door step delivery</a></span>
          <span className='footer_link'><a href='#'>Membership</a></span>
          <span className='footer_link'><a href='#'>Banner Ads</a></span>
          <span className='footer_link'><a href='#'>Ad Promotions</a></span>
          <span className='footer_link'><a href='#'>Staffing solutions</a></span>
        </div> 
        <div className='footer_detail_container'>
          <span className='footer_link_titile'>Help and Support</span>
          <span className='footer_link'><a href='#'>FAQ</a></span>
          <span className='footer_link'><a href='#'>Stay Safe</a></span>
          <span className='footer_link'><a href='#'>Contact Us</a></span>
          
        </div> 
        <div className='footer_detail_container'>
            <span className='footer_link_titile'>Follow ikman</span>

          <span className='footer_link'><a href='#'>Blog</a></span>
          <span className='footer_link'><a href='#'>Facebook</a></span>
          <span className='footer_link'><a href='#'>Twitter</a></span>
          <span className='footer_link'><a href='#'>YouTube</a></span>
        </div> 
        <div className='footer_detail_container'>
            <span className='footer_link_titile'>About ikman</span>

          <span className='footer_link'><a href='#'>About Us</a></span>
          <span className='footer_link'><a href='#'>Career</a></span>
          <span className='footer_link'><a href='#'>Terms and Conditions</a></span>
          <span className='footer_link'><a href='#'>Privacy policy</a></span>
          <span className='footer_link'><a href='#'>Sitemap</a></span>
        </div> 

      </div>
    </div>
  )
}

export default Footer
