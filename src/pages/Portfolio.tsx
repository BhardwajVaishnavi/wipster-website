import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import Section from '../components/Section';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';
import ProjectCard from '../components/ProjectCard';
import { projectsData } from '../data/projectsData';
import { FaArrowRight } from 'react-icons/fa';

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
      url('/portfolio-hero.jpg') no-repeat center center/cover;
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

const FilterContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.space[3]};
  margin-bottom: ${({ theme }) => theme.space[8]};
  justify-content: center;
`;

const FilterButton = styled.button<{ active: boolean }>`
  padding: ${({ theme }) => `${theme.space[2]} ${theme.space[4]}`};
  background-color: ${({ active, theme }) => 
    active ? theme.colors.primary : 'rgba(37, 99, 235, 0.1)'};
  color: ${({ active, theme }) => 
    active ? theme.colors.light : theme.colors.primary};
  border: none;
  border-radius: ${({ theme }) => theme.radii.full};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.default};
  
  &:hover {
    background-color: ${({ active, theme }) => 
      active ? theme.colors.primary : 'rgba(37, 99, 235, 0.2)'};
  }
`;

const ProjectsGrid = styled(motion.div)`
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

const FeaturedProject = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.space[12]};
  align-items: center;
  margin-bottom: ${({ theme }) => theme.space[16]};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: 1fr;
  }
`;

const FeaturedImage = styled(motion.div)`
  position: relative;
  
  img {
    width: 100%;
    border-radius: ${({ theme }) => theme.radii.lg};
    box-shadow: ${({ theme }) => theme.shadows.xl};
  }
  
  &::before {
    content: 'Featured Project';
    position: absolute;
    top: -15px;
    left: -15px;
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.light};
    padding: ${({ theme }) => `${theme.space[2]} ${theme.space[4]}`};
    border-radius: ${({ theme }) => theme.radii.md};
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    font-size: ${({ theme }) => theme.fontSizes.sm};
    z-index: 1;
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    margin-bottom: ${({ theme }) => theme.space[8]};
  }
`;

const FeaturedContent = styled(motion.div)`
  h2 {
    font-size: ${({ theme }) => theme.fontSizes['3xl']};
    margin-bottom: ${({ theme }) => theme.space[4]};
  }
  
  p {
    color: ${({ theme }) => theme.colors.gray};
    margin-bottom: ${({ theme }) => theme.space[6]};
    line-height: ${({ theme }) => theme.lineHeights.relaxed};
  }
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.space[2]};
  margin-bottom: ${({ theme }) => theme.space[6]};
`;

const TechBadge = styled.span`
  background-color: rgba(37, 99, 235, 0.1);
  color: ${({ theme }) => theme.colors.primary};
  padding: ${({ theme }) => `${theme.space[1]} ${theme.space[3]}`};
  border-radius: ${({ theme }) => theme.radii.full};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
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

const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState('All');
  const [filteredProjects, setFilteredProjects] = useState(projectsData);
  const [categories, setCategories] = useState<string[]>([]);
  
  useEffect(() => {
    // Extract unique categories
    const uniqueCategories = ['All', ...new Set(projectsData.map(project => project.category))];
    setCategories(uniqueCategories);
    
    // Filter projects based on selected category
    if (filter === 'All') {
      setFilteredProjects(projectsData);
    } else {
      setFilteredProjects(projectsData.filter(project => project.category === filter));
    }
  }, [filter]);

  return (
    <>
      <HeroSection fullHeight padding="none">
        <HeroContent>
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Our <span>Portfolio</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Explore our diverse portfolio of successful projects across various industries. Each project showcases our expertise, creativity, and commitment to excellence.
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
              Start Your Project
            </Button>
          </motion.div>
        </HeroContent>
      </HeroSection>
      
      <Section id="featured-project">
        <SectionTitle
          title="Featured Project"
          subtitle="A showcase of our capabilities and expertise in delivering exceptional solutions."
        />
        
        <FeaturedProject>
          <FeaturedImage
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <img src={projectsData[0].image || '/projects/featured-project.jpg'} alt={projectsData[0].title} />
          </FeaturedImage>
          
          <FeaturedContent
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2>{projectsData[0].title}</h2>
            <p>{projectsData[0].description}</p>
            <p>
              This project exemplifies our ability to deliver complex solutions that address real-world challenges. Our team worked closely with the client to understand their unique requirements and develop a tailored solution that exceeded their expectations.
            </p>
            <TechStack>
              {projectsData[0].technologies.map((tech, index) => (
                <TechBadge key={index}>{tech}</TechBadge>
              ))}
            </TechStack>
            {projectsData[0].link && (
              <Button
                as="a"
                href={projectsData[0].link}
                target="_blank"
                rel="noopener noreferrer"
                icon={<FaArrowRight />}
                iconPosition="right"
              >
                View Project
              </Button>
            )}
          </FeaturedContent>
        </FeaturedProject>
      </Section>
      
      <Section id="all-projects">
        <SectionTitle
          title="Our Projects"
          subtitle="Browse our portfolio of successful projects across various industries."
        />
        
        <FilterContainer>
          {categories.map((category) => (
            <FilterButton
              key={category}
              active={filter === category}
              onClick={() => setFilter(category)}
            >
              {category}
            </FilterButton>
          ))}
        </FilterContainer>
        
        <AnimatePresence mode="wait">
          <ProjectsGrid
            key={filter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </ProjectsGrid>
        </AnimatePresence>
      </Section>
      
      <CTASection>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Have a Project in Mind?
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Let's discuss how we can bring your vision to life. Our team is ready to help you create a solution that meets your unique needs and drives your business forward.
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
            Get in Touch
          </Button>
        </motion.div>
      </CTASection>
    </>
  );
};

export default Portfolio;
