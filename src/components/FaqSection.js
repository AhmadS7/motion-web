import React from 'react';
import styled from  'styled-components';
import {About} from '../styles';


const FaqSection = () => {
  return (
    <Faq>
      <h2>Ask here</h2>
      <div className="question">
        <h4>How do i start?</h4>
        <div>
          <p>Lorem ipsum dolor sit amet.</p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti,
            minus!
          </p>
        </div>
      </div>
      <div className="question">
        <h4>what payment methods do you accept?</h4>
        <div>
          <p>Lorem ipsum dolor sit amet.</p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti,
            minus!
          </p>
        </div>
      </div>
      <div className="question">
        <h4>How do i get an appointment?</h4>
        <div>
          <p>Lorem ipsum dolor sit amet.</p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti,
            minus!
          </p>
        </div>
      </div>
    </Faq>
  );
};

const Faq = styled(About)``


export default FaqSection;
