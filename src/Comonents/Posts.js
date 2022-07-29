import React from 'react';
import '../Styles/Post.css'

function Posts({postImgSrc,postName,Detail1, detail2}) {
  return (
    <div className='Post_Container'>
        <div className='Post_left'>
            <img height='100%' width='100%' src="https://auto-lanka.com/img.web/UserImage/220611032047/image_cdc15c671c8fc09765f58c79822badd3d727cee6440eb3dfcf6b4a57a40fc477.jpg"
            alt='car'/>
        </div>
        <div className='Post_right'>
         
            <span className='Post__title'>susuky car pissu hadei </span>
            <span className='post__details1'>11,000 km </span>
            <span className='post__details2'>Galle, car </span>
            <span className='post__prince'>Rs 2,300,000</span>
        
           
            <span className='post__timeDate'>5 days</span>

            

        </div>
      
    </div>
  )
}

export default Posts
