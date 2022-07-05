import React from 'react'
import './about.css'
import ME from '../../assets/abme.jpeg'
import {AiFillBook} from 'react-icons/ai'
import {VscFolderLibrary} from 'react-icons/vsc'
import {TbLanguage} from 'react-icons/tb'


const About = () => {
  return (
    <section id='about'>
      <h5>
        Get To Know
      </h5>
      <h2>About Me</h2>
      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className='about_card'>
              <AiFillBook className='about_icon'/>
              <h5>Education</h5>
              <small>Currently in 3rd year</small>
            </article>

            <article className='about_card'>
              <VscFolderLibrary className='about_icon'/>
              <h5>Projects</h5>
              <small>10+</small>
            </article>

            <article className='about_card'>
              <TbLanguage className='about_icon'/>
              <h5>Languages</h5>
              <small>HTML,CSS,REACTJS,PYTHON,C</small>
            </article>
          </div>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi perspiciatis ea cumque ad numquam unde vero possimus nulla animi, nostrum nobis illo! Pariatur, reiciendis aperiam cupiditate iusto sunt excepturi cumque.
          </p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        
        </div>
      </div>
    </section>
  )
}

export default About