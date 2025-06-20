import React from "react";

const Home = () => {
  return (
    <div>
      <h1 className="home">My Project</h1>

      {/* Card  of Start*/}

 
< div className="card-container">
    <div className ="card">
      <img src="./img/reactweb.png" alt="Card image"/>
      <div className="card-content">
        <h3 className="card-title">React web page</h3>
        <p className="card-text">My new react project.</p>
         <a className="responsive-link"  target="_blank" href="https://mywebreact.netlify.app/">Click Me</a>
      </div>
    </div>

    <div className ="card">
      <img src="./img/education.png" alt="Card image"/>
      <div className="card-content">
        <h3 className="card-title">Education </h3>
        <p className="card-text">education for univercity.</p>
        <a className="responsive-link"  target="_blank" href="https://educationtwo.netlify.app/">Click Me</a>
      </div>
    </div>

    <div className="card">
      <img src="./img/nature.png" alt="Card image"/>
      <div className="card-content">
        <h3 className="card-title">My Nature</h3>
        <p className="card-text">My Nature project description.</p>
        <a className="responsive-link"  target="_blank" href="https://mauryap209.github.io/MyNature/">Click Me</a>
      </div>
    </div>

    <div className="card">
      <img src="./img/kids.png  " alt="Card image"/>
      <div className="card-content">
        <h3 className="card-title">Kids zone</h3>
        <p className="card-text">simple bootstrap kids zone.</p>
        <a className="responsive-link" target="_blank" href="https://kidingzone.netlify.app/">Click Me</a>
          
      </div>
    </div>

    
    

    

    
  </div>


      {/* End of Card */}


    </div>
  );
};

export default Home;
