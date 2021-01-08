import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { DocuState } from '../docuState';
//Animations
import { motion } from 'framer-motion';
import { pageAnimation } from '../animation';

const DocuDetail = () => {
  const history = useHistory();
  const url = history.location.pathname;
  const [docus, setDocus] = useState(DocuState);
  const [docu, setDocu] = useState(null);

  //UseEffect
  useEffect(() => {
    const currentDocu = docus.filter((stateDocu) => stateDocu.url === url);
    setDocu(currentDocu[0]);
  }, [docus, url]);

  return (
    <React.Fragment>
      {docu && (
        <Details
          exit="exit"
          variants={pageAnimation}
          initial="hidden"
          animate="show"
        >
          <HeadLine>
            <h2>{docu.title}</h2>
            <img src={docu.mainImg} alt="docu" />
          </HeadLine>
          <Awards>
            {docu.awards.map((award) => (
              <Award
                title={award.title}
                description={award.description}
                key={award.title}
              />
            ))}
          </Awards>
          <ImageDisplay>
            <img src={docu.secondaryImg} alt="docu"></img>
          </ImageDisplay>
        </Details>
      )}
    </React.Fragment>
  );
};

const Details = styled(motion.div)`
  color: white;
`;
const HeadLine = styled.div`
  min-height: 90vh;
  padding-top: 20vh;
  position: relative;
  h2 {
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translate(-50%, -10%);
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;
const Awards = styled.div`
  min-height: 80vh;
  display: flex;
  margin: 5rem 10 rem;
  align-items: center;
  justify-content: space-around;
`;

const AwardStyle = styled.div`
  padding: 5rem;
  h3 {
    font-size: 2rem;
  }
  .line {
    width: 100%;
    background: #23d997;
    height: 0.5rem;
    margin: 1rem 0rem;
  }

  p {
    padding: 2rem 0rem;
  }
`;

const ImageDisplay = styled.div`
  min-height: 50vh;
  img {
    width: 100%;
    height: 100vh;
    object-fit: cover;
  }
`;

// Award Component
const Award = ({ title, description }) => {
  return (
    <AwardStyle>
      <h3>{title}</h3>
      <div className="line"></div>
      <p>{description}</p>
    </AwardStyle>
  );
};

export default DocuDetail;
