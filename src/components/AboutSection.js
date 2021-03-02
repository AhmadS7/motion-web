import React from 'react';
import home1 from '../img/home1.png';
import { About, Description, Image, Hide } from '../styles';
//Framer Motion
import { motion } from 'framer-motion';
import { titleAnim, fade, photoAnim } from '../animation';

const AboutSection = () => {
  return (
    <About>
      <Description>
        <motion.div>
          <Hide>
            <motion.h2 variants={titleAnim}>We Make Documentaries</motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>
              Where <span>Fairytale</span> Becomes
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>Reality.</motion.h2>
          </Hide>
        </motion.div>
        <motion.p variants={fade}>
          Contact us about our videography, also let us know, what story you
          want us to cover next.
        </motion.p>
        <motion.button variants={fade}>Contact Us</motion.button>
      </Description>

      <Image>
        <motion.img
          variants={photoAnim}
          src={home1}
          alt="man in white shirt holding camera"
        />
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
