import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Section from '../components/Section';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';
import TeamMemberCard from '../components/TeamMemberCard';
import { teamData } from '../data/teamData';
import { FaCheckCircle, FaArrowRight } from 'react-icons/fa';

const HeroSection = styled(Section)`
  min-height: 60vh;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, rgba(30, 41, 59, 0.9), rgba(30, 41, 59, 0.8)),
      url('/about-hero.jpg') no-repeat center center/cover;
    z-index: -1;
  }
`;

const HeroContent = styled.div`
  text-align: center;
  color: ${({ theme }) => theme.colors.light};
  max-width: 800px;
  margin: 0 auto;
  
  h1 {
    font-size: clamp(2.5rem, 5vw, 4rem);
    margin-bottom: ${({ theme }) => theme.space[6]};
    
    span {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
  
  p {
    font-size: ${({ theme }) => theme.fontSizes.xl};
    margin-bottom: ${({ theme }) => theme.space[8]};
    color: rgba(255, 255, 255, 0.8);
  }
`;

const AboutContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.space[12]};
  align-items: center;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: 1fr;
  }
`;

const AboutImage = styled(motion.div)`
  position: relative;
  
  img {
    width: 100%;
    border-radius: ${({ theme }) => theme.radii.lg};
    box-shadow: ${({ theme }) => theme.shadows.xl};
  }
  
  &::before {
    content: '';
    position: absolute;
    top: -20px;
    left: -20px;
    width: 100%;
    height: 100%;
    border: 5px solid ${({ theme }) => theme.colors.primary};
    border-radius: ${({ theme }) => theme.radii.lg};
    z-index: -1;
  }
  
  &::after {
    content: '10+ Years of Excellence';
    position: absolute;
    bottom: -30px;
    right: -30px;
    background: ${({ theme }) => theme.colors.accent};
    color: ${({ theme }) => theme.colors.light};
    padding: ${({ theme }) => `${theme.space[4]} ${theme.space[6]}`};
    border-radius: ${({ theme }) => theme.radii.md};
    font-weight: ${({ theme }) => theme.fontWeights.bold};
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    margin-bottom: ${({ theme }) => theme.space[12]};
  }
`;

const AboutText = styled(motion.div)`
  h2 {
    font-size: ${({ theme }) => theme.fontSizes['3xl']};
    margin-bottom: ${({ theme }) => theme.space[6]};
    position: relative;
    
    &::after {
      content: '';
      position: absolute;
      bottom: -10px;
      left: 0;
      width: 80px;
      height: 4px;
      background: ${({ theme }) => theme.colors.primary};
      border-radius: ${({ theme }) => theme.radii.full};
    }
  }
  
  p {
    margin-bottom: ${({ theme }) => theme.space[6]};
    color: ${({ theme }) => theme.colors.gray};
    line-height: ${({ theme }) => theme.lineHeights.relaxed};
  }
`;

const ValuesList = styled.ul`
  list-style: none;
  padding: 0;
  margin-bottom: ${({ theme }) => theme.space[8]};
  
  li {
    display: flex;
    align-items: center;
    margin-bottom: ${({ theme }) => theme.space[4]};
    
    svg {
      color: ${({ theme }) => theme.colors.primary};
      margin-right: ${({ theme }) => theme.space[3]};
      flex-shrink: 0;
    }
  }
`;

const MissionSection = styled(Section)`
  background-color: rgba(37, 99, 235, 0.05);
`;

const MissionContent = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${({ theme }) => theme.space[12]};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: 1fr;
  }
`;

const MissionCard = styled(motion.div)`
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: ${({ theme }) => theme.radii.lg};
  box-shadow: ${({ theme }) => theme.shadows.md};
  padding: ${({ theme }) => theme.space[8]};
  height: 100%;
  
  h3 {
    font-size: ${({ theme }) => theme.fontSizes['2xl']};
    margin-bottom: ${({ theme }) => theme.space[4]};
    color: ${({ theme }) => theme.colors.primary};
    position: relative;
    padding-bottom: ${({ theme }) => theme.space[4]};
    
    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 60px;
      height: 3px;
      background: ${({ theme }) => theme.colors.accent};
      border-radius: ${({ theme }) => theme.radii.full};
    }
  }
  
  p {
    color: ${({ theme }) => theme.colors.gray};
    line-height: ${({ theme }) => theme.lineHeights.relaxed};
  }
`;

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${({ theme }) => theme.space[8]};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

const CTASection = styled(Section)`
  text-align: center;
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.accent});
  color: ${({ theme }) => theme.colors.light};
  
  h2 {
    margin-bottom: ${({ theme }) => theme.space[6]};
    font-size: ${({ theme }) => theme.fontSizes['4xl']};
  }
  
  p {
    max-width: 700px;
    margin: 0 auto ${({ theme }) => theme.space[8]};
    font-size: ${({ theme }) => theme.fontSizes.lg};
    opacity: 0.9;
  }
`;

const About: React.FC = () => {
  return (
    <>
      <HeroSection fullHeight padding="none">
        <HeroContent>
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            About <span>Wipster Technologies</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            We are a team of passionate technology experts dedicated to delivering innovative IT solutions that drive business growth.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Button
              size="large"
              as={Link}
              to="/contact"
              icon={<FaArrowRight />}
              iconPosition="right"
            >
              Get in Touch
            </Button>
          </motion.div>
        </HeroContent>
      </HeroSection>
      
      <Section>
        <AboutContent>
          <AboutImage
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <img src="/about-image.jpg" alt="Wipster Technologies Team" />
          </AboutImage>
          
          <AboutText
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2>Our Story</h2>
            <p>
              Founded in 2022 by Pritish Dhal and Vaishnavi Bhardwaj, Wipster Technologies began with a vision to bridge the gap between technology and business needs. What started as a small team of passionate developers has grown into a full-service IT company with expertise across various domains.
            </p>
            <p>
              Over the years, we have successfully delivered hundreds of projects for clients ranging from startups to Fortune 500 companies. Our commitment to quality, innovation, and client satisfaction has been the cornerstone of our growth and success.
            </p>
            <h2>Our Values</h2>
            <ValuesList>
              <li>
                <FaCheckCircle /> <span>Excellence in everything we do</span>
              </li>
              <li>
                <FaCheckCircle /> <span>Innovation that drives business growth</span>
              </li>
              <li>
                <FaCheckCircle /> <span>Integrity and transparency in all interactions</span>
              </li>
              <li>
                <FaCheckCircle /> <span>Client-centric approach to problem-solving</span>
              </li>
              <li>
                <FaCheckCircle /> <span>Continuous learning and improvement</span>
              </li>
            </ValuesList>
            <Button
              as={Link}
              to="/team"
              icon={<FaArrowRight />}
              iconPosition="right"
            >
              Meet Our Team
            </Button>
          </AboutText>
        </AboutContent>
      </Section>
      
      <MissionSection>
        <SectionTitle
          title="Our Mission & Vision"
          subtitle="Guided by our core principles, we strive to make a positive impact through technology."
        />
        
        <MissionContent>
          <MissionCard
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3>Our Mission</h3>
            <p>
              To empower businesses with innovative technology solutions that drive growth, efficiency, and competitive advantage. We are committed to delivering high-quality software that solves real-world problems and creates tangible value for our clients.
            </p>
            <p>
              We strive to build long-term partnerships with our clients, understanding their unique challenges and working collaboratively to develop solutions that exceed expectations. Our goal is to be a trusted technology partner that helps businesses navigate the complexities of digital transformation.
            </p>
          </MissionCard>
          
          <MissionCard
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3>Our Vision</h3>
            <p>
              To be a global leader in technology innovation, recognized for our expertise, integrity, and the transformative impact of our solutions. We envision a future where businesses of all sizes can leverage cutting-edge technology to achieve their full potential.
            </p>
            <p>
              We aim to create a workplace that fosters creativity, collaboration, and continuous learning, attracting and retaining the best talent in the industry. Through our work, we aspire to contribute to the advancement of technology and its positive application in solving business and societal challenges.
            </p>
          </MissionCard>
        </MissionContent>
      </MissionSection>
      
      <Section id="founders">
        <SectionTitle
          title="Our Leadership"
          subtitle="Meet the visionaries behind Wipster Technologies who drive our mission and values."
        />
        
        <TeamGrid>
          {teamData.filter(member => member.isFounder).map((member, index) => (
            <TeamMemberCard key={member.id} member={member} index={index} />
          ))}
        </TeamGrid>
      </Section>
      
      <CTASection>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Ready to Work With Us?
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Let's discuss how Wipster Technologies can help you achieve your business goals through innovative technology solutions.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <Button
            variant="outline"
            size="large"
            as={Link}
            to="/contact"
          >
            Contact Us Today
          </Button>
        </motion.div>
      </CTASection>
    </>
  );
};

export default About;
