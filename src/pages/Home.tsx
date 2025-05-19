import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Section from '../components/Section';
import SectionTitle from '../components/SectionTitle';
import ServiceCard from '../components/ServiceCard';
import ProjectCard from '../components/ProjectCard';
import TestimonialCard from '../components/TestimonialCard';
import Button from '../components/Button';
import AnimatedText from '../components/AnimatedText';
import ParallaxSection from '../components/ParallaxSection';
import { servicesData } from '../data/servicesData';
import { projectsData } from '../data/projectsData';
import { testimonialsData } from '../data/testimonialsData';
import { getUnsplashImage, unsplashImages } from '../utils/unsplashImages';
import { FaRocket, FaUsers, FaLightbulb, FaCode, FaChartLine, FaArrowRight } from 'react-icons/fa';
import Hero from '../components/Hero';

const StatsSection = styled(Section)`
  margin-top: 0; /* No margin needed */
  padding-top: 50px; /* Add padding instead */
  z-index: 10;
  position: relative;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: ${({ theme }) => theme.space[6]};

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`;

const StatCard = styled(motion.div)`
  background-color: #FFFFFF;
  border-radius: ${({ theme }) => theme.radii.lg};
  box-shadow: ${({ theme }) => theme.shadows.md};
  padding: ${({ theme }) => theme.space[6]};
  text-align: center;

  .icon {
    font-size: 2.5rem;
    color: ${({ theme }) => theme.colors.primary};
    margin-bottom: ${({ theme }) => theme.space[4]};
  }

  .stat-value {
    font-size: ${({ theme }) => theme.fontSizes['3xl']};
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    margin-bottom: ${({ theme }) => theme.space[2]};
    color: #333333;
  }

  h3 {
    color: #333333;
    margin-bottom: ${({ theme }) => theme.space[3]};
    font-size: 1.25rem;
  }

  p {
    color: #666666;
    margin: 0;
  }
`;

const ServicesGrid = styled.div`
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

const ProjectsGrid = styled.div`
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

const TestimonialsGrid = styled.div`
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

  h2, .cta-title {
    margin-bottom: ${({ theme }) => theme.space[6]};
    font-size: ${({ theme }) => theme.fontSizes['4xl']};
    color: ${({ theme }) => theme.colors.light};
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  }

  p {
    max-width: 700px;
    margin: 0 auto ${({ theme }) => theme.space[8]};
    font-size: ${({ theme }) => theme.fontSizes.lg};
    color: ${({ theme }) => theme.colors.light};
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: ${({ theme }) => theme.space[4]};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 300px;
    margin: 0 auto;
  }
`;

const statCardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
    },
  }),
};

const Home: React.FC = () => {
  return (
    <>
      <Hero
        useVideo={false}
      />

      <StatsSection padding="large">
        <StatsGrid>
          <StatCard
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
            variants={statCardVariants}
          >
            <div className="icon">
              <FaRocket />
            </div>
            <div className="stat-value">
              142
            </div>
            <p>Projects Completed</p>
          </StatCard>

          <StatCard
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
            variants={statCardVariants}
          >
            <div className="icon">
              <FaUsers />
            </div>
            <div className="stat-value">
              138
            </div>
            <p>Happy Clients</p>
          </StatCard>

          <StatCard
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={2}
            variants={statCardVariants}
          >
            <div className="icon">
              <FaLightbulb />
            </div>
            <div className="stat-value">
              3
            </div>
            <p>Years of Experience</p>
          </StatCard>

          <StatCard
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={3}
            variants={statCardVariants}
          >
            <div className="icon">
              <FaCode />
            </div>
            <div className="stat-value">
              5
            </div>
            <p>Expert Developers</p>
          </StatCard>
        </StatsGrid>
      </StatsSection>

      <Section id="services">
        <SectionTitle
          title="Our Services"
          subtitle="We provide a wide range of IT services to help businesses grow and succeed in the digital world."
        />

        <ServicesGrid>
          {servicesData.slice(0, 6).map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </ServicesGrid>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.5 }}
          style={{ textAlign: 'center', marginTop: '3rem' }}
        >
          <Button
            as={Link}
            to="/services"
            icon={<FaArrowRight />}
            iconPosition="right"
          >
            View All Services
          </Button>
        </motion.div>
      </Section>

      <Section id="about" background="dark">
        <SectionTitle
          title="Why Choose Wipster Technologies"
          subtitle="We combine technical expertise with business acumen to deliver solutions that drive growth and innovation."
          light
        />

        <StatsGrid>
          <StatCard
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
            variants={statCardVariants}
          >
            <div className="icon">
              <FaLightbulb />
            </div>
            <h3>Innovative Solutions</h3>
            <p>We leverage the latest technologies to create innovative solutions that solve complex business challenges.</p>
          </StatCard>

          <StatCard
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
            variants={statCardVariants}
          >
            <div className="icon">
              <FaUsers />
            </div>
            <h3>Expert Team</h3>
            <p>Our team of experienced professionals brings deep expertise across various technologies and industries.</p>
          </StatCard>

          <StatCard
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={2}
            variants={statCardVariants}
          >
            <div className="icon">
              <FaRocket />
            </div>
            <h3>Agile Approach</h3>
            <p>We follow an agile methodology that ensures rapid development, continuous improvement, and adaptability.</p>
          </StatCard>

          <StatCard
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={3}
            variants={statCardVariants}
          >
            <div className="icon">
              <FaChartLine />
            </div>
            <h3>Results-Driven</h3>
            <p>We focus on delivering measurable results that help our clients achieve their business objectives.</p>
          </StatCard>
        </StatsGrid>
      </Section>

      <Section id="projects">
        <SectionTitle
          title="Our Recent Projects"
          subtitle="Take a look at some of our recent work that showcases our expertise and capabilities."
        />

        <ProjectsGrid>
          {projectsData.slice(0, 3).map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </ProjectsGrid>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
          style={{ textAlign: 'center', marginTop: '3rem' }}
        >
          <Button
            as={Link}
            to="/portfolio"
            icon={<FaArrowRight />}
            iconPosition="right"
          >
            View All Projects
          </Button>
        </motion.div>
      </Section>

      <Section id="testimonials" background="gradient">
        <SectionTitle
          title="What Our Clients Say"
          subtitle="Don't just take our word for it. Here's what our clients have to say about working with us."
          light
        />

        <TestimonialsGrid>
          {testimonialsData.slice(0, 3).map((testimonial, index) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} index={index} />
          ))}
        </TestimonialsGrid>
      </Section>

      <ParallaxSection
        backgroundImage={getUnsplashImage(unsplashImages.backgrounds.texture2)}
        height="80vh"
        speed={0.3}
      >
        <CTASection background="transparent" padding="none">
          <AnimatedText
            text="Ready to Transform Your Business?"
            el="h2"
            className="cta-title"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Let's discuss how Wipster Technologies can help you achieve your digital transformation goals. Our team is ready to bring your vision to life.
          </motion.p>

        <ButtonContainer>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
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

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <Button
              variant="outline"
              size="large"
              as={Link}
              to="/services"
            >
              Explore Services
            </Button>
          </motion.div>
        </ButtonContainer>
      </CTASection>
      </ParallaxSection>
    </>
  );
};

export default Home;
