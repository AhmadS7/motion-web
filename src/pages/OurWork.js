import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
//Images
import athlete from '../img/athlete-small.png';
import theracher from '../img/theracer-small.png';
import goodtimes from '../img/goodtimes-small.png';
//Animations
import { motion } from 'framer-motion';
import { pageAnimation } from '../animation';

const OurWork = () => {
  return (
    <Work variants={pageAnimation} initial="hidden" animate="show">
      <Docu>
        <h2>The Athlete</h2>
        <div className="line"></div>
        <Link to="/work/the-athlete">
          <img src={athlete} alt="athlete" />
        </Link>
      </Docu>
      <Docu>
        <h2>The Racer</h2>
        <div className="line"></div>
        <Link to="/work/the-racer">
          <img src={theracher} alt="theracer" />
        </Link>
      </Docu>
      <Docu>
        <h2>Good Times</h2>
        <div className="line"></div>
        <Link to="/work/good-times">
          <img src={goodtimes} alt="goodtimes" />
        </Link>
      </Docu>
    </Work>
  );
};

const Work = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;
  h2 {
    padding: 1rem 0rem;
  }
`;
const Docu = styled.div`
  padding-bottom: 10rem;
  .line {
    height: 0.5rem;
    background: #cccccc;
    margin-bottom: 3rem;
  }
  img {
    width: 100%;
    height: 70%;
    object-fit: cover;
  }
`;

export default OurWork;
