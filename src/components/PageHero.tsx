import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

interface PageHeroProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  buttonLink?: string;
  backgroundImage?: string;
}

interface HeroSectionProps {
  backgroundImage?: string;
}

const HeroSection = styled.div<HeroSectionProps>`
  position: relative;
  min-height: 100vh; /* Set to 100vh to match the image */
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  margin-top: 0;
  margin-bottom: 0;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
      url("/images/server-bg.jpg") no-repeat center center/cover;
    z-index: -1;
  }
`;

const ScrollIndicator = styled.div`
  position: absolute;
  bottom: 40px; /* Increased bottom position */
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  font-size: 1rem; /* Increased font size */
  opacity: 0.7;

  .circle {
    width: 50px; /* Increased size */
    height: 50px; /* Increased size */
    border: 2px solid rgba(255, 255, 255, 0.5);
    border-radius: 50%;
    position: relative;
    margin-bottom: 8px; /* Increased margin */
    display: flex;
    align-items: center;
    justify-content: center;
  }

  p {
    margin: 0;
    font-weight: 500; /* Added font weight */
  }
`;

const HeroContent = styled.div`
  text-align: center;
  color: white;
  max-width: 800px;
  margin: 0 auto;
  padding: 40px;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(5px);
  border-radius: 10px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.05);

  .logo {
    font-size: 5.5rem; /* Increased font size */
    font-weight: bold;
    margin-bottom: 2rem; /* Increased margin */
    color: white;

    span {
      color: #ff3e81;
    }
  }

  h1 {
    font-size: 3.2rem; /* Increased font size */
    margin-bottom: 2rem; /* Increased margin */
    position: relative;

    &::after {
      content: '';
      position: absolute;
      bottom: -10px;
      left: 50%;
      transform: translateX(-50%);
      width: 80%;
      height: 3px;
      background: linear-gradient(to right, #00e0d8, #ff3e81);
    }

    span {
      color: #ff3e81;
    }
  }

  p {
    font-size: 1.25rem; /* Increased font size */
    margin: 3rem 0; /* Increased margin */
    color: rgba(255, 255, 255, 0.9);
    line-height: 1.7; /* Increased line height */
    max-width: 650px; /* Increased max width */
    margin-left: auto;
    margin-right: auto;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem; /* Increased gap */
  margin-top: 3rem; /* Increased margin */
`;

const PrimaryButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 2rem; /* Increased padding */
  background-color: #ff3e81;
  color: white;
  border: none;
  border-radius: 5px;
  font-weight: 500;
  font-size: 1.1rem; /* Increased font size */
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    background-color: #e0357a;
    transform: translateY(-2px);
  }

  svg {
    margin-left: 0.5rem;
    font-size: 1.2rem; /* Increased icon size */
  }
`;

const OutlineButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 2rem; /* Increased padding */
  background-color: transparent;
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 5px;
  font-weight: 500;
  font-size: 1.1rem; /* Increased font size */
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    border-color: white;
    background-color: rgba(255, 255, 255, 0.1);
    transform: translateY(-2px);
  }
`;

const PageHero: React.FC<PageHeroProps> = ({
  subtitle,
  buttonLink
}) => {
  return (
    <HeroSection>
      <HeroContent>
        <div className="logo">
          W<span>ipster</span>
        </div>

        <h1>
          Innovative <span>IT</span> Solutions <span>for</span> Business <span>Growth</span>
        </h1>

        <p>
          {subtitle || "We transform your business with cutting-edge technology solutions. Our expert team delivers custom software, cloud services, and digital transformation strategies tailored to your unique needs."}
        </p>

        <ButtonContainer>
          <PrimaryButton
            to={buttonLink || "/contact"}
          >
            Get Started <FaArrowRight />
          </PrimaryButton>

          <OutlineButton
            to="/services"
          >
            Our Services
          </OutlineButton>
        </ButtonContainer>
      </HeroContent>

      <ScrollIndicator>
        <div className="circle">
          <div className="arrow" style={{ width: '15px', height: '15px', borderRight: '3px solid rgba(255, 255, 255, 0.8)', borderBottom: '3px solid rgba(255, 255, 255, 0.8)', transform: 'rotate(45deg)' }}></div>
        </div>
        <p>Scroll Down</p>
      </ScrollIndicator>
    </HeroSection>
  );
};

export default PageHero;
