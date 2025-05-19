import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { Project } from '../types';
import { getUnsplashImage, unsplashImages } from '../utils/unsplashImages';

interface ProjectCardProps {
  project: Project;
  index: number;
}

const Card = styled(motion.div)`
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: ${({ theme }) => theme.radii.lg};
  box-shadow: ${({ theme }) => theme.shadows.md};
  overflow: hidden;
  height: 100%;
  display: flex;
  flex-direction: column;
  transition: ${({ theme }) => theme.transitions.default};

  &:hover {
    box-shadow: ${({ theme }) => theme.shadows.xl};
    transform: translateY(-5px);

    .project-image {
      transform: scale(1.05);
    }
  }
`;

const ImageContainer = styled.div`
  position: relative;
  height: 220px;
  overflow: hidden;
`;

const Image = styled.div<{ image: string }>`
  width: 100%;
  height: 100%;
  background-image: url(${({ image }) => image});
  background-size: cover;
  background-position: center;
  transition: transform 0.5s ease;
`;

const FeaturedBadge = styled.div`
  position: absolute;
  top: ${({ theme }) => theme.space[4]};
  left: ${({ theme }) => theme.space[4]};
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.light};
  padding: ${({ theme }) => `${theme.space[1]} ${theme.space[3]}`};
  border-radius: ${({ theme }) => theme.radii.full};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  z-index: 1;
`;

const CategoryBadge = styled.div`
  position: absolute;
  bottom: ${({ theme }) => theme.space[4]};
  right: ${({ theme }) => theme.space[4]};
  background-color: rgba(0, 0, 0, 0.7);
  color: ${({ theme }) => theme.colors.light};
  padding: ${({ theme }) => `${theme.space[1]} ${theme.space[3]}`};
  border-radius: ${({ theme }) => theme.radii.full};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  z-index: 1;
`;

const Content = styled.div`
  padding: ${({ theme }) => theme.space[6]};
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const Title = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  margin-bottom: ${({ theme }) => theme.space[3]};
  color: ${({ theme }) => theme.colors.text};
`;

const Description = styled.p`
  color: ${({ theme }) => theme.colors.gray};
  margin-bottom: ${({ theme }) => theme.space[4]};
  line-height: ${({ theme }) => theme.lineHeights.relaxed};
  flex-grow: 1;
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.space[2]};
  margin-bottom: ${({ theme }) => theme.space[4]};
`;

const TechBadge = styled.span`
  background-color: ${({ theme }) => `rgba(37, 99, 235, 0.1)`};
  color: ${({ theme }) => theme.colors.primary};
  padding: ${({ theme }) => `${theme.space[1]} ${theme.space[2]}`};
  border-radius: ${({ theme }) => theme.radii.sm};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
`;

const ViewProject = styled(motion.a)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.space[2]};
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.light};
  padding: ${({ theme }) => `${theme.space[3]} ${theme.space[4]}`};
  border-radius: ${({ theme }) => theme.radii.md};
  text-decoration: none;
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  transition: ${({ theme }) => theme.transitions.default};

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
  }
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

// Function to get the appropriate Unsplash image for a project
const getProjectImage = (projectTitle: string, projectCategory: string) => {
  const title = projectTitle.toLowerCase();
  const category = projectCategory.toLowerCase();

  if (title.includes('healthcare') || category.includes('healthcare') || category.includes('health')) {
    return getUnsplashImage(unsplashImages.projects.healthcare);
  } else if (title.includes('banking') || title.includes('finance') || category.includes('banking') || category.includes('finance')) {
    return getUnsplashImage(unsplashImages.projects.banking);
  } else if (title.includes('education') || category.includes('education')) {
    return getUnsplashImage(unsplashImages.projects.education);
  } else if (title.includes('retail') || category.includes('retail') || category.includes('e-commerce')) {
    return getUnsplashImage(unsplashImages.projects.retail);
  } else if (title.includes('travel') || category.includes('travel') || category.includes('tourism')) {
    return getUnsplashImage(unsplashImages.projects.travel);
  } else if (title.includes('logistics') || category.includes('logistics') || category.includes('supply chain')) {
    return getUnsplashImage(unsplashImages.projects.logistics);
  } else {
    return getUnsplashImage(unsplashImages.projects.healthcare); // Default image
  }
};

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  return (
    <Card
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      custom={index}
    >
      <ImageContainer>
        <Image
          image={getProjectImage(project.title, project.category)}
          className="project-image"
        />
        {project.featured && (
          <FeaturedBadge>Featured</FeaturedBadge>
        )}
        <CategoryBadge>{project.category}</CategoryBadge>
      </ImageContainer>
      <Content>
        <Title>{project.title}</Title>
        <Description>{project.description}</Description>
        <TechStack>
          {project.technologies.map((tech, idx) => (
            <TechBadge key={idx}>{tech}</TechBadge>
          ))}
        </TechStack>
        
      </Content>
    </Card>
  );
};

export default ProjectCard;
