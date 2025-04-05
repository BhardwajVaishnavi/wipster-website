import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';
import { Testimonial } from '../types';
import { getUnsplashImage, unsplashImages } from '../utils/unsplashImages';

interface TestimonialCardProps {
  testimonial: Testimonial;
  index: number;
}

const Card = styled(motion.div)`
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: ${({ theme }) => theme.radii.lg};
  box-shadow: ${({ theme }) => theme.shadows.md};
  padding: ${({ theme }) => theme.space[8]};
  position: relative;
  overflow: hidden;
  height: 100%;
  display: flex;
  flex-direction: column;
  transition: ${({ theme }) => theme.transitions.default};

  &:hover {
    box-shadow: ${({ theme }) => theme.shadows.xl};
    transform: translateY(-5px);
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 5px;
    background: linear-gradient(to right, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.accent});
  }
`;

const QuoteIcon = styled.div`
  position: absolute;
  top: ${({ theme }) => theme.space[8]};
  right: ${({ theme }) => theme.space[8]};
  color: ${({ theme }) => `rgba(37, 99, 235, 0.1)`};
  font-size: 4rem;
  line-height: 1;
`;

const Rating = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.space[1]};
  margin-bottom: ${({ theme }) => theme.space[4]};
  font-size: ${({ theme }) => theme.fontSizes.lg};
`;

const Content = styled.div`
  margin-bottom: ${({ theme }) => theme.space[6]};
  flex-grow: 1;
`;

const Quote = styled.p`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  line-height: ${({ theme }) => theme.lineHeights.relaxed};
  font-style: italic;
`;

const Author = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.space[4]};
`;

const Avatar = styled.div<{ image: string }>`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-image: url(${({ image }) => image});
  background-size: cover;
  background-position: center;
  border: 3px solid ${({ theme }) => theme.colors.primary};
`;

const AuthorInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const Name = styled.h4`
  font-size: ${({ theme }) => theme.fontSizes.md};
  margin-bottom: ${({ theme }) => theme.space[1]};
  color: ${({ theme }) => theme.colors.text};
`;

const Company = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.gray};
`;

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
    },
  }),
};

// Function to get the appropriate Unsplash image for a testimonial
const getTestimonialImage = (testimonialName: string) => {
  const name = testimonialName.toLowerCase();

  if (name.includes('rajesh')) {
    return getUnsplashImage(unsplashImages.testimonials.client1);
  } else if (name.includes('priya')) {
    return getUnsplashImage(unsplashImages.testimonials.client2);
  } else if (name.includes('vikram')) {
    return getUnsplashImage(unsplashImages.testimonials.client3);
  } else if (name.includes('ananya')) {
    return getUnsplashImage(unsplashImages.testimonials.client4);
  } else if (name.includes('rahul')) {
    return getUnsplashImage(unsplashImages.testimonials.client5);
  } else {
    // Default image if no match
    return getUnsplashImage(unsplashImages.testimonials.client1);
  }
};

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial, index }) => {
  return (
    <Card
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      custom={index}
    >
      <QuoteIcon>
        <FaQuoteLeft />
      </QuoteIcon>
      <Rating>
        {[...Array(5)].map((_, i) => (
          <FaStar key={i} color={i < testimonial.rating ? '#F59E0B' : '#E5E7EB'} />
        ))}
      </Rating>
      <Content>
        <Quote>"{testimonial.testimonial}"</Quote>
      </Content>
      <Author>
        <Avatar image={getUnsplashImage(testimonial.image)} />
        <AuthorInfo>
          <Name>{testimonial.name}</Name>
          <Company>{testimonial.company}</Company>
        </AuthorInfo>
      </Author>
    </Card>
  );
};

export default TestimonialCard;
