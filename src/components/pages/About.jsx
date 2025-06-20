import React from 'react'

const About = () => {
  return (
    <div>
        <h1 className='about'>About Us</h1>
 <section class="about-section">
    <h1>About Me</h1>
    <p>
      Hi! I'm a passionate web developer who loves turning ideas into reality through elegant code. 
      With a strong eye for design and a commitment to user experience, I build responsive, efficient websites that leave a lasting impression.
    </p>
  </section>

  <section class="skills-section">
    <h2>Skills</h2>
    <ul className="skills-list">
      <li className="skill-item">HTML</li>
      <li className="skill-item">CSS</li>
      <li className="skill-item">Bootstrap</li>
      <li className="skill-item">Tailwind CSS</li>
      <li className="skill-item">JavaScript</li>
      <li className="skill-item">React</li>
     
    </ul>
  </section>

    </div>
  )
}

export default About