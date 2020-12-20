import React from 'react';
import home1 from '../img/home1.png';

const AboutSection = () => {
  return (
    <div>
      <div className="description">
        <div className="title">
          <div className="hide">
            <h2>We Make Documaries</h2>
          </div>
          <div className="hide">
            <h2>
              Where <span>Reality</span> Becomes Fairytale
            </h2>
          </div>
          <div className="hide">
            <h2>Ture.</h2>
          </div>
        </div>
        <p>
          Contact us about our videography, also let us know your idea, what
          story you want us to do next
        </p>
        <button>Contact Us</button>
      </div>

      <div className="image">
        <img src={home1} alt="man in white shirt holding camera" />
      </div>
    </div>
  );
};

export default AboutSection;
