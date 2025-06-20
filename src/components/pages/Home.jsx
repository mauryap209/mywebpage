import React from "react";
// import img from "../img/reactweb.png";
// import img from "../img/education.png";
const Home = ({ imgsrc, title, description }) => {
  return (
    <div>
      <h1 className="home">{title}</h1>

      {/* Card  of Start*/}


  <div className="card-container">
    {/* <div className ="card">
      <img src={imgsrc} alt="Card image"/>
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-text">{description}</p>
         <a className="responsive" href="https://mywebreact.netlify.app/">Click Me</a>
      </div>
    </div> */}










    <div className ="card">
      <img src="https://img.freepik.com/premium-photo/illustration-of-school-girl_635702-1714.jpg" alt="Card image"/>
      <div className="card-content">
        <h3 className="card-title">React web page</h3>
        <p className="card-text">My new react project.</p>
         <a className="responsive-link" href="https://mywebreact.netlify.app/">Click Me</a>
      </div>
    </div>

    <div className ="card">
      <img src="https://img.freepik.com/premium-photo/illustration-of-school-girl_635702-1714.jpg" alt="Card image"/>
      <div className="card-content">
        <h3 className="card-title">Education </h3>
        <p className="card-text">education for univercity.</p>
        <a className="responsive-link" href="https://educationtwo.netlify.app/">Click Me</a>
      </div>
    </div>

<div className="card">
      <img src="https://img.freepik.com/premium-photo/illustration-of-school-girl_635702-1714.jpg" alt="Card image"/>
      <div className="card-content">
        <h3 className="card-title">My Nature</h3>
        <p className="card-text">My Nature project description.</p>
        <a className="responsive-link" href="https://mauryap209.github.io/MyNature/">Click Me</a>
      </div>
    </div>

    <div className="card">
      <img src="https://i.pinimg.com/736x/e4/e9/c4/e4e9c491ee11efe67b691d17360fada7.jpg" alt="Card image"/>
      <div className="card-content">
        <h3 className="card-title">Kids zone</h3>
        <p className="card-text">simple bootstrap kids zone.</p>
        <a className="responsive-link" href="https://kidingzone.netlify.app/">Click Me</a>
          
      </div>
    </div>

    
    

    <div className="card">
      <img src="https://img.freepik.com/premium-photo/illustration-of-school-girl_635702-1714.jpg" alt="Card image"/>
      <div className="card-content">
        <h3 className="card-title">Card Title 4</h3>
        <p className="card-text">This is a sample description for the Four card.</p>
        <a className="responsive-link" href="https://mywebreact.netlify.app/">Click Me</a>
      </div>
    </div>

    <div className="card">
      <img src="https://img.freepik.com/premium-photo/illustration-of-school-girl_635702-1714.jpg" alt="Card image"/>
      <div className="card-content">
        <h3 className="card-title">Card Title 4</h3>
        <p className="card-text">This is a sample description for the Four card.</p>
        <a className="responsive-link" href="https://mywebreact.netlify.app/">Click Me</a>
      </div>
    </div>
  </div>


      {/* End of Card */}


    </div>
  );
};

export default Home;
