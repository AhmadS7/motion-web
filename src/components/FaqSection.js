import React from 'react';
import styled from 'styled-components';
import { About } from '../styles';

const FaqSection = () => {
  return (
    <Faq>
      <h2>
        Ask Us <span>FAQ</span>
      </h2>
      <div classname="question">
        <h4>How Do I Contact?</h4>
        <div className="answer">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt,
            distinctio.
          </p>
        </div>
        <div className="faq-line"></div>
      </div>
      <div classname="question">
        <h4>Payment Methods.</h4>
        <div className="answer">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt,
            distinctio.
          </p>
        </div>
        <div className="faq-line"></div>
      </div>
      <div classname="question">
        <h4>How Do You Ship?</h4>
        <div className="answer">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt,
            distinctio.
          </p>
        </div>
        <div className="faq-line"></div>
      </div>
    </Faq>
  );
};

const Faq = styled(About)`
  display: block;
  span {
    display: block;
  }
  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }
  .faq-line {
    background-color: #cccccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
  }
  .question {
    padding: 3rem 0rem;
    cursor: pointer;
  }
  .answer {
    padding: 2rem;
    p {
      padding: 1rem 0rem;
    }
  }
`;

export default FaqSection;
