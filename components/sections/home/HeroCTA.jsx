import React from 'react';
import styled from 'styled-components';
import Button from '@/components/reusables/Buttons/Button';
const StyledHeroCTA = styled.div`
  width: 100%;

  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  & * {
    transition: color 3s, background-color 3s;
  }
  .CTA__Title {
    margin-bottom: 1.75rem;
  }
  .CTA__Subtitle {
    font-size: calc(20px + (40 - 20) * ((100vw - 300px) / (1920 - 300)));
    font-weight: ${({ theme: { thin } }) => thin};
    margin-bottom: 2.75rem;
    opacity: 80%;
  }
  .CTA__button-container {
    display: flex;

    .CTA__button--left {
      margin: 0 1.2rem 0 auto;
    }
    .CTA__button--right {
      margin: 0 auto 0 1.2rem;
    }
  }

  @media only screen and (min-width: 1980px) {
    top: 35%;
  }
`;

function HeroCTA() {
  return (
    <StyledHeroCTA className='CTA'>
      <h1 className='CTA__Title'>Silas Cundiff</h1>
      <h2 className='CTA__Subtitle'>Designer - Developer - Dreamer</h2>
      <div className='CTA__button-container'>
        <Button className='CTA__button--left'>My Work</Button>
        <Button className='CTA__button--right' ghost>
          Let&apos;s Chat
        </Button>
      </div>
    </StyledHeroCTA>
  );
}

export default HeroCTA;