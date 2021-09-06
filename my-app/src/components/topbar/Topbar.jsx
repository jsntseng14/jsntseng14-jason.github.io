import React from 'react'
import './topbar.css'
import {Person, Mail} from '@material-ui/icons'
import HomeIcon from '@material-ui/icons/Home';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={'topbar ' + (menuOpen && 'active')}>
      <div className='wrapper'>
        <div className='left'>
          <div className='itemContainer'>
          <a href='#intro' className='logo'>
          <HomeIcon  fontSize='large' href='#intro' className='icon'></HomeIcon>
          </a>
          </div>
          <div className='itemContainer'>
            <Person className='icon'/>
            <span> (714) 756-1037</span>
          </div>
          <div className='itemContainer'>
            <Mail className='icon'/>
            <span> jsntseng14@gmail.com</span>
          </div>
          <div className='itemContainer'>
            <LinkedInIcon fontSize='large'/>
          </div>
        </div>
        <div className='right'>
          <div className='hamburger' onClick={() =>setMenuOpen(!menuOpen)}>
            <span className='line1'></span>
            <span className='line2'></span>
            <span className='line3'></span>
          </div>
        </div>
      </div>
    </div>
  )
}
