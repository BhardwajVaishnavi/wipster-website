import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import { FaHome, FaEnvelope } from 'react-icons/fa';

const NotFoundContainer = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.space[4]};
  background: linear-gradient(135deg, rgba(30, 41, 59, 0.97), rgba(30, 41, 59, 0.95)),
    url('/404-bg.jpg') no-repeat center center/cover;
`;

const Content = styled(motion.div)`
  text-align: center;
  max-width: 600px;
  color: ${({ theme }) => theme.colors.light};
`;

const ErrorCode = styled.h1`
  font-size: clamp(6rem, 15vw, 12rem);
  font-weight: ${({ theme }) => theme.fontWeights.extrabold};
  margin: 0;
  line-height: 1;
  background: linear-gradient(to right, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.accent});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: transparent;
`;

const Title = styled.h2`
  font-size: clamp(1.5rem, 5vw, 2.5rem);
  margin-bottom: ${({ theme }) => theme.space[6]};
`;

const Description = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  margin-bottom: ${({ theme }) => theme.space[8]};
  color: rgba(255, 255, 255, 0.8);
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.space[4]};
  justify-content: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column;
    width: 100%;
  }
`;

const NotFound: React.FC = () => {
  return (
    <NotFoundContainer>
      <Content
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <ErrorCode>404</ErrorCode>
        <Title>Page Not Found</Title>
        <Description>
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </Description>
        <ButtonGroup>
          <Button
            as={Link}
            to="/"
            icon={<FaHome />}
            iconPosition="left"
          >
            Back to Home
          </Button>
          <Button
            as={Link}
            to="/contact"
            variant="outline"
            icon={<FaEnvelope />}
            iconPosition="left"
          >
            Contact Support
          </Button>
        </ButtonGroup>
      </Content>
    </NotFoundContainer>
  );
};

export default NotFound;
