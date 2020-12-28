import React from 'react';
import home1 from '../img/home1.png';
import styled from 'styled-components';
import {About, Description, Image, Hide} from '../styles'

const AboutSection = () => {
  return (
    <About>
      <Description>
        <div className="title">
          <Hide>
            <h2>We Make Documentaries, </h2>
          </Hide>
          <Hide>
            <h2>
              Where <span>Fairytale</span> Becomes
            </h2>
          </Hide>
          <Hide>
            <h2>Reality.</h2>
          </Hide>
        </div>
        <p>
          Contact us about our videography, also let us know, what story you
          want us to cover next.
        </p>
        <button>Contact Us</button>
      </Description>

      <Image>
        <img src={home1} alt="man in white shirt holding camera" />
      </Image>
    </About>
  );
};

// //Styled Component
// const About = styled.div`
//   min-height: 90vh;
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   padding: 5rem 10rem;
//   color: white;
// `;

// const Description = styled.div`
//   flex: 1;
//   padding-right: 5rem;
//   h2 {
//     font-weight: lighter;
//   }
// `;

// const Image = styled.div`
//   flex: 1;
//   overflow: hidden;
//   img {
//     width: 100%;
//     height: 80vh;
//     object-fit: cover;
//   }
// `;

// const Hide = styled.div`
//   overflow: hidden;
// `;

export default AboutSection;
