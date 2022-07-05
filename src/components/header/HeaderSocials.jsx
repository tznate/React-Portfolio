import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {GrInstagram} from 'react-icons/gr'

const HeaderSocials = () => {
  return (
    <div className='header_socials'>
        <a href="https://linkedin.com" target="blank" className='hicon'><BsLinkedin /></a>
        <a href="https://github.com" target="blank" className='hicon'><FaGithub /></a>
        <a href="https://instagram.com" target="blank" className='hicon'><GrInstagram /></a>
    </div>
  )
}

export default HeaderSocials