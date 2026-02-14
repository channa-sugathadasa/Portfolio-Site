import React from 'react'
import './intro.css'
import bg from '../../assets/image.png';
import { Link } from 'react-scroll'
import btnImage from '../../assets/hireme.png'

const Intro = () => {
  return (
        <section id="intro">
            <div className="introContent">
                <spam className="hello">Hello</spam>
                <spam className="introText">I'm </spam><spam className="introName">Channa Sugathadasa </spam> <br /> <spam> Web Site Designer </spam>
                <p className='introPara'>I'a skilled Web designer with experience in creating <br/> visually appeling and user friendly websites. </p>
                <Link><button className='btn'><img src={btnImage} alt="Hire me" className='btnImg'/>Hire Me</button></Link>
            </div>
            <img src={bg} alt="Profile" className="bg" />
        </section>  
    )
}

export default Intro; 