import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaLaptopCode, FaMobileAlt, FaPaintBrush, FaUsers, FaChartLine, FaCloud, FaShoppingCart, FaMegaport } from 'react-icons/fa';
import { Service } from '../types';
import { getUnsplashImage, unsplashImages } from '../utils/unsplashImages';

interface ServiceCardProps {
  service: Service;
  index: number;
}

interface CardProps {
  variant?: 'primary' | 'default';
}

const Card = styled(motion.div)<CardProps>`
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: ${({ theme }) => theme.radii.lg};
  box-shadow: ${({ theme }) => theme.shadows.md};
  padding: ${({ theme }) => theme.space[8]};
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  transition: ${({ theme }) => theme.transitions.default};

  &:hover {
    box-shadow: ${({ theme }) => theme.shadows.xl};
    transform: translateY(-5px);

    .service-image {
      transform: scale(1.05);
    }

    .arrow-icon {
      transform: translateX(5px);
    }
  }

  ${({ theme, variant }) => variant === 'primary' && `
    background-color: ${theme.colors.primary};

    ${Title}, ${Description} {
      color: ${theme.colors.light};
    }

    .icon-container {
      background-color: ${theme.colors.light};
      color: ${theme.colors.primary};
    }

    .arrow-icon {
      color: ${theme.colors.light};
      transform: translateX(5px);
    }

    .feature-list li {
      color: ${theme.colors.light};

      &::before {
        background-color: ${theme.colors.light};
      }
    }
  `}
`;

const ServiceImageContainer = styled.div`
  width: 100%;
  height: 180px;
  margin-bottom: ${({ theme }) => theme.space[6]};
  border-radius: ${({ theme }) => theme.radii.md};
  overflow: hidden;
`;

const ServiceImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
`;

const IconContainer = styled.div`
  width: 60px;
  height: 60px;
  border-radius: ${({ theme }) => theme.radii.full};
  background-color: rgba(37, 99, 235, 0.1);
  color: ${({ theme }) => theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: ${({ theme }) => theme.space[4]};
  font-size: 1.5rem;
  transition: ${({ theme }) => theme.transitions.default};
`;

const Title = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  margin-bottom: ${({ theme }) => theme.space[3]};
  color: ${({ theme }) => theme.colors.text};
  transition: ${({ theme }) => theme.transitions.default};
`;

const Description = styled.p`
  color: ${({ theme }) => theme.colors.gray};
  margin-bottom: ${({ theme }) => theme.space[6]};
  line-height: ${({ theme }) => theme.lineHeights.relaxed};
  transition: ${({ theme }) => theme.transitions.default};
`;

const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 ${({ theme }) => theme.space[6]};
  flex-grow: 1;

  li {
    position: relative;
    padding-left: ${({ theme }) => theme.space[6]};
    margin-bottom: ${({ theme }) => theme.space[3]};
    color: ${({ theme }) => theme.colors.gray};
    transition: ${({ theme }) => theme.transitions.default};

    &::before {
      content: '';
      position: absolute;
      left: 0;
      top: 10px;
      width: 6px;
      height: 6px;
      border-radius: ${({ theme }) => theme.radii.full};
      background-color: ${({ theme }) => theme.colors.primary};
      transition: ${({ theme }) => theme.transitions.default};
    }
  }
`;

const LearnMore = styled(Link)`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  text-decoration: none;
  margin-top: auto;

  .arrow-icon {
    margin-left: ${({ theme }) => theme.space[2]};
    transition: transform 0.3s ease;
  }

  &:hover {
    text-decoration: underline;
  }
`;

const getIcon = (iconName: string) => {
  switch (iconName) {
    case 'FaLaptopCode':
      return <FaLaptopCode />;
    case 'FaMobileAlt':
      return <FaMobileAlt />;
    case 'FaPaintBrush':
      return <FaPaintBrush />;
    case 'FaUsers':
      return <FaUsers />;
    case 'FaChartLine':
      return <FaChartLine />;
    case 'FaCloud':
      return <FaCloud />;
    case 'FaShoppingCart':
      return <FaShoppingCart />;
    case 'FaMegaport':
      return <FaMegaport />;
    default:
      return <FaLaptopCode />;
  }
};

// Function to get the appropriate Unsplash image for a service
const getServiceImage = (serviceTitle: string) => {
  const title = serviceTitle.toLowerCase();

  if (title.includes('web')) {
    return getUnsplashImage(unsplashImages.services.webDev);
  } else if (title.includes('mobile')) {
    return getUnsplashImage(unsplashImages.services.mobileDev);
  } else if (title.includes('ui') || title.includes('ux') || title.includes('design')) {
    return getUnsplashImage(unsplashImages.services.uiUx);
  } else if (title.includes('crm')) {
    return getUnsplashImage(unsplashImages.services.crm);
  } else if (title.includes('erp')) {
    return getUnsplashImage(unsplashImages.services.erp);
  } else if (title.includes('cloud')) {
    return getUnsplashImage(unsplashImages.services.cloud);
  } else if (title.includes('e-commerce') || title.includes('ecommerce')) {
    return getUnsplashImage(unsplashImages.services.ecommerce);
  } else if (title.includes('marketing')) {
    return getUnsplashImage(unsplashImages.services.marketing);
  } else {
    return getUnsplashImage(unsplashImages.services.webDev);
  }
};

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

const ServiceCard: React.FC<ServiceCardProps> = ({ service, index }) => {
  return (
    <Card
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      custom={index}
    >
      <ServiceImageContainer>
        <ServiceImage
          src={getServiceImage(service.title)}
          alt={service.title}
          className="service-image"
        />
      </ServiceImageContainer>
      <IconContainer className="icon-container">{getIcon(service.icon)}</IconContainer>
      <Title>{service.title}</Title>
      <Description>{service.description}</Description>
      <FeatureList className="feature-list">
        {service.features.slice(0, 4).map((feature, idx) => (
          <li key={idx}>{feature}</li>
        ))}
      </FeatureList>
      <LearnMore to={`/services#${service.title.toLowerCase().replace(/\s+/g, '-')}`}>
        Learn More <FaArrowRight className="arrow-icon" />
      </LearnMore>
    </Card>
  );
};

export default ServiceCard;
