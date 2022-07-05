import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {BiMessageSquareDetail} from 'react-icons/bi'
import {useState} from 'react'

const Nav = () => {
  const[activeNav, setActiveNev] = useState('#')
  return (
    <nav>
      <a href="#" onClick={() => setActiveNev('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome /></a>
      <a href="#about" onClick={() => setActiveNev('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser /></a>
      <a href="#portfolio" onClick={() => setActiveNev('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}><BiBook /></a>
      <a href="#contact" onClick={() => setActiveNev('#contact')} className={activeNav === '#contact' ? 'active' : ''}><BiMessageSquareDetail /></a>
    </nav>
  )
}

export default Nav