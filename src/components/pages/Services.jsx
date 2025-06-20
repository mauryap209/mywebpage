import React from "react";

const Services = () => {
  return (
    <div>
      <h1 className="services">Our Services</h1>
      <section className="services-section">
        <h1>What We Offer</h1>
        <p>
          We provide a range of services to help you achieve your digital goals.
          From web development to digital marketing, our team is here to support
          you every step of the way.
        </p>
      </section>

      <section className="services-list-section">
        {/* <h2>Our Services</h2> */}
        <ul className="services-list">
          <li className="service-item">Web Development</li>
          <li className="service-item">Mobile App Development</li>
          <li className="service-item">Digital Marketing</li>
          <li className="service-item">SEO Optimization</li>
          <li className="service-item">Content Creation</li>
          <li className="service-item">E-commerce Solutions</li>
        </ul>
      </section>
      <section className="contact-section">
        <h2>Contact Us</h2>
        <p>
          Ready to take your project to the next level?
          <br />
          <a href="/contact" className="contact-link">
            Get in touch with us today!
          </a>
        </p>
      </section>
      
    </div>
  );
};

export default Services;
