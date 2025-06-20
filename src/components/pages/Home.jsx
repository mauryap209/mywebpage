import React from "react";

const Home = () => {
  return (
    <div>
      <div className="home-page">
        <h1 className="heading"><i>Welcome to my Project</i></h1>
        <p className="home-text">
          <i>Welcome to my project page! I have created using React. 
          aspects of web development, Feel free to click on the links to view the projects.
        </i></p>
      </div>
      {/* Card  of Start*/}
      <div className="card-container">
        <div className="card">
          <img src="./img/reactweb.png" alt="Card image" />
          <div className="card-content">
            <h3 className="card-title">React web </h3>
            <p className="card-text">
              Building dynamic and responsive web applications using React
            </p>
            <a
              className="responsive-link"
              target="_blank"
              href="https://mywebreact.netlify.app/"
            >
              Click Me
            </a>
          </div>
        </div>

        <div className="card">
          <img src="./img/education.png" alt="Card image" />
          <div className="card-content">
            <h3 className="card-title">Education Portal</h3>
            <p className="card-text">
              Creating educational platforms for universities and schools.
            </p>
            <a
              className="responsive-link"
              target="_blank"
              href="https://educationtwo.netlify.app/"
            >
              Click Me
            </a>
          </div>
        </div>

        <div className="card">
          <img src="./img/nature.png" alt="Card image" />
          <div className="card-content">
            <h3 className="card-title">Nature Projects</h3>
            <p className="card-text">
              Showcasing nature through interactive web projects.
            </p>
            <a
              className="responsive-link"
              target="_blank"
              href="https://mauryap209.github.io/MyNature/"
            >
              Click Me
            </a>
          </div>
        </div>

        <div className="card">
          <img src="./img/kids.png  " alt="Card image" />
          <div className="card-content">
            <h3 className="card-title">Kids zone</h3>
            <p className="card-text">
              Creating fun and educational websites for kids.
            </p>
            <a
              className="responsive-link"
              target="_blank"
              href="https://kidingzone.netlify.app/"
            >
              Click Me
            </a>
          </div>
        </div>
      </div>

      {/* End of Card */}
    </div>
  );
};

export default Home;
