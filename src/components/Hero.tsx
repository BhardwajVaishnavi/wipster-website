import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Button from './Button';
import AnimatedText from './AnimatedText';
import VideoBackground from './VideoBackground';
import AnimatedBackground from './AnimatedBackground';
import FloatingElements from './FloatingElements';
import { FaArrowRight, FaPlay } from 'react-icons/fa';
import { getUnsplashImage, unsplashImages, unsplashVideos } from '../utils/unsplashImages';

const HeroContainer = styled.div`
  position: relative;
  height: calc(100vh - 90px);
  min-height: 600px;
  width: 100%;
  overflow: hidden;
  display: flex;
  align-items: center;
  margin-top: 90px; /* Height of the navbar */
  background: linear-gradient(135deg, #1A1A2E, #16213E);

  &.image-bg {
    background: linear-gradient(135deg, rgba(26, 26, 46, 0.9), rgba(22, 33, 62, 0.8)),
      url(${() => getUnsplashImage(unsplashImages.hero.main)}) no-repeat center center/cover;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at center, rgba(78, 205, 196, 0.1) 0%, rgba(255, 111, 181, 0.1) 100%);
  }
`;

const HeroLogo = styled.div`
  display: flex;
  justify-content: center;
  margin-top: -4rem;
  margin-bottom: ${({ theme }) => theme.space[8]};
`;

const LogoImage = styled.img`
  height: 235px;
  margin-bottom: ${({ theme }) => theme.space[4]};
`;

const HeroContent = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  text-align: center;
  z-index: 1;
  position: relative;
  backdrop-filter: blur(5px);
  border-radius: 20px;
  padding: ${({ theme }) => theme.space[10]};
  background: rgb(255 255 255 / 8%);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
  margin-top: -20px; /* Adjust vertical position */
  border: 1px solid rgba(255, 255, 255, 0.05);
`;

// Styles for the AnimatedText component
const StyledContent = styled.div`
  .hero-title {
    color: ${({ theme }) => theme.colors.light};
    font-size: 2.7rem;
    margin-top: -6rem;
    margin-bottom: -4rem;
    line-height: 1.2;
    text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
    font-weight: 800;
    letter-spacing: -0.5px;

    span:nth-child(4), span:nth-child(5), span:nth-child(6), span:nth-child(7) {
      color: ${({ theme }) => theme.colors.primary};
      position: relative;

      &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 4px;
        background: ${({ theme }) => theme.colors.secondary};
        border-radius: ${({ theme }) => theme.radii.full};
      }
    }
  }
`;

const HeroSubtitle = styled(motion.p)`
  color: rgba(255, 255, 255, 0.9);
  font-size: ${({ theme }) => theme.fontSizes.lg};
  max-width: 800px;
  margin: 5rem auto ${({ theme }) => theme.space[8]};
  line-height: ${({ theme }) => theme.lineHeights.relaxed};
  text-shadow: 0 1px 5px rgba(0, 0, 0, 0.2);
  font-weight: ${({ theme }) => theme.fontWeights.medium};
`;

const ButtonGroup = styled(motion.div)`
  display: flex;
  gap: ${({ theme }) => theme.space[4]};
  justify-content: center;
  margin-bottom: ${({ theme }) => theme.space[8]};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column;
    align-items: center;
  }

  a {
    transform: scale(1.1);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
    transition: all 0.3s ease;

    &:hover {
      transform: scale(1.15) translateY(-2px);
      box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
    }
  }
`;

const PlayButtonWrapper = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: ${({ theme }) => theme.space[8]};
`;

const PlayButton = styled(motion.button)`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.light};
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transform: translateX(-100%);
    transition: 0.6s;
  }

  &:hover::before {
    transform: translateX(100%);
  }

  svg {
    font-size: 1.5rem;
    margin-left: 5px;
  }
`;

const PlayButtonText = styled.span`
  color: ${({ theme }) => theme.colors.light};
  margin-left: ${({ theme }) => theme.space[4]};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
  letter-spacing: 0.5px;
`;

const ScrollIndicator = styled(motion.div)`
  position: absolute;
  bottom: ${({ theme }) => theme.space[4]};
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${({ theme }) => theme.colors.light};

  .mouse {
    width: 30px;
    height: 50px;
    border: 2px solid ${({ theme }) => theme.colors.light};
    border-radius: 20px;
    position: relative;
    margin-bottom: ${({ theme }) => theme.space[2]};

    &::before {
      content: '';
      position: absolute;
      top: 10px;
      left: 50%;
      transform: translateX(-50%);
      width: 6px;
      height: 6px;
      background-color: ${({ theme }) => theme.colors.light};
      border-radius: 50%;
      animation: scroll 2s infinite;
    }
  }

  p {
    font-size: ${({ theme }) => theme.fontSizes.sm};
    opacity: 0.8;
  }

  @keyframes scroll {
    0% {
      transform: translate(-50%, 0);
      opacity: 1;
    }
    100% {
      transform: translate(-50%, 20px);
      opacity: 0;
    }
  }
`;

// Animation variants
const titleAnimation = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const subtitleAnimation = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay: 0.3,
      ease: [0.215, 0.61, 0.355, 1],
    },
  },
};

const buttonGroupAnimation = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay: 0.5,
      ease: [0.215, 0.61, 0.355, 1],
    },
  },
};

const playButtonAnimation = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.7,
      delay: 0.7,
      ease: [0.215, 0.61, 0.355, 1],
    },
  },
};

const scrollAnimation = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay: 1.2,
      ease: [0.215, 0.61, 0.355, 1],
    },
  },
};

const floatAnimation = {
  y: [0, -10, 0],
  transition: {
    duration: 2,
    repeat: Infinity,
    repeatType: "mirror" as const,
    ease: "easeInOut"
  }
};

interface HeroProps {
  useVideo?: boolean;
}

const Hero: React.FC<HeroProps> = ({ useVideo = true }) => {
  return (
    <HeroContainer className={!useVideo ? 'image-bg' : ''}>
      {useVideo ? (
        <AnimatedBackground>
          <FloatingElements />
          <HeroContent as={StyledContent}>
            <HeroLogo>
              <LogoImage src="/logo.png" alt="Wipster Technologies Logo" />
            </HeroLogo>
            <AnimatedText
              text="Innovative IT Solutions for Business Growth"
              el="h1"
              className="hero-title"
            />

            <HeroSubtitle
              initial="hidden"
              animate="visible"
              variants={subtitleAnimation}
            >
              We transform your business with cutting-edge technology solutions. Our expert team delivers custom software, cloud services, and digital transformation strategies tailored to your unique needs.
            </HeroSubtitle>

            <ButtonGroup
              initial="hidden"
              animate="visible"
              variants={buttonGroupAnimation}
            >
              <Button
                size="large"
                as={Link}
                to="/contact"
                icon={<FaArrowRight />}
                iconPosition="right"
              >
                Get Started
              </Button>

              <Button
                variant="outline"
                size="large"
                as={Link}
                to="/services"
              >
                Our Services
              </Button>
            </ButtonGroup>

            <PlayButtonWrapper
              initial="hidden"
              animate="visible"
              variants={playButtonAnimation}
            >
              <PlayButton
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaPlay />
              </PlayButton>
              <PlayButtonText>Watch Our Story</PlayButtonText>
            </PlayButtonWrapper>
          </HeroContent>

          <ScrollIndicator
            initial="hidden"
            animate="visible"
            variants={scrollAnimation}
          >
            <motion.div
              className="mouse"
              animate={floatAnimation}
            ></motion.div>
            <motion.p
              animate={{ opacity: [0.5, 1, 0.5], transition: { duration: 2, repeat: Infinity, repeatType: "mirror" as const } }}
            >
              Scroll Down
            </motion.p>
          </ScrollIndicator>
        </AnimatedBackground>
      ) : (
        <>
          <HeroContent as={StyledContent}>
            <HeroLogo>
              <LogoImage src="/logo.png" alt="Wipster Technologies Logo" />
            </HeroLogo>
            <AnimatedText
              text="Innovative IT Solutions for Business Growth"
              el="h1"
              className="hero-title"
            />

            <HeroSubtitle
              initial="hidden"
              animate="visible"
              variants={subtitleAnimation}
            >
              We transform your business with cutting-edge technology solutions. Our expert team delivers custom software, cloud services, and digital transformation strategies tailored to your unique needs.
            </HeroSubtitle>

            <ButtonGroup
              initial="hidden"
              animate="visible"
              variants={buttonGroupAnimation}
            >
              <Button
                size="large"
                as={Link}
                to="/contact"
                icon={<FaArrowRight />}
                iconPosition="right"
              >
                Get Started
              </Button>

              <Button
                variant="outline"
                size="large"
                as={Link}
                to="/services"
              >
                Our Services
              </Button>
            </ButtonGroup>

            <PlayButtonWrapper
              initial="hidden"
              animate="visible"
              variants={playButtonAnimation}
            >
              <PlayButton
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaPlay />
              </PlayButton>
              <PlayButtonText>Watch Our Story</PlayButtonText>
            </PlayButtonWrapper>
          </HeroContent>

          <ScrollIndicator
            initial="hidden"
            animate="visible"
            variants={scrollAnimation}
          >
            <motion.div
              className="mouse"
              animate={floatAnimation}
            ></motion.div>
            <motion.p
              animate={{ opacity: [0.5, 1, 0.5], transition: { duration: 2, repeat: Infinity, repeatType: "mirror" as const } }}
            >
              Scroll Down
            </motion.p>
          </ScrollIndicator>
        </>
      )}
    </HeroContainer>
  );
};

export default Hero;
