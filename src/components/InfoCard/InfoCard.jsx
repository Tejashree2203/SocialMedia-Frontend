import React from 'react'
import './InfoCard.css'
import {UilPen} from '@iconscout/react-unicons'
import { useState } from 'react'
import ProfileModal from '../ProfileModel/ProfileModel'
import { Link } from 'react-router-dom'

const InfoCard = () =>{

  const[modalOpened,setModalOpened]=useState(false)
    return(
        <div className="InfoCard">
            <div className="infohead">
            <h4>Your info </h4> 
            <div className='pen'>
            <UilPen onClick={()=>setModalOpened(true)}/>
            <ProfileModal modalOpened={modalOpened}
            setModalOpened={setModalOpened}/>
            </div>
            
            </div>
            <div className="info">
        <span>
          <b>Status </b>
        </span>
        <span>Active</span>
      </div>

      <div className="info">
        <span>
          <b>Lives in </b>
        </span>
        <span>Imagination</span>
      </div>

      <div className="info">
        <span>
          <b>Famous for </b>
        </span>
        <span>My jokes</span>
      </div>
      <Link to = '/' style={{textDecoration:"none" }}>
      <button className="button logout-button">Logout</button>
      </Link>
     
        </div>
    )
}

export default InfoCard