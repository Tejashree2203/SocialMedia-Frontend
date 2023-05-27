import React from 'react'
import './ProfileCard'
import './ProfileCard.css'
import { Link } from 'react-router-dom';

const ProfileCard = () => {

    const ProfilePage = true;

    return(
      <Link to = '/profile' style={{textDecoration:"none", color:"black"}}>
        <div className="ProfileCard">
            <div className="ProfileImages">
                <img src="https://i.pinimg.com/originals/f8/d3/b1/f8d3b19df0c2f09a485ad5b0f34552ae.jpg" alt="" />
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjVXi3G3T5pLuY38GRe4xWj_ajwTzgvTsRUA&usqp=CAU" alt="" />
            </div>

            <div className="ProfileName">
                <span>Jerry</span>
                <span>Entertainer</span>
            </div>

            <div className="followStatus">
                <hr />
                <div className="following">
                    <span className='num'>7894</span>
                    <span className='tells'>Followings</span>
                </div>
                <div className='vl'></div>
                <div className="followers">
                    <span className='num'>1565</span>
                    <span className='tells'>Followers</span>
                </div>
                {ProfilePage && (
        
              <div className="postsnum">
                <span className='num'>3</span>
                <span className='tells'>Posts</span>
              </div>
          )}
          <hr />
        </div>
        
      {ProfilePage ? "" : <span>My Profile</span>}
    </div>
    </Link>
  );
};

export default ProfileCard