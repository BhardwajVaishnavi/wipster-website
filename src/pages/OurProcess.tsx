import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  FaArrowRight,
  FaLightbulb,
  FaClipboardCheck,
  FaCode,
  FaRocket,
  FaTools,
  FaChartLine
} from 'react-icons/fa';
import Hero from '../components/Hero';
import Section from '../components/Section';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';
import { getUnsplashImage, unsplashImages } from '../utils/unsplashImages';

const ProcessContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const ProcessIntro = styled.div`
  max-width: 800px;
  margin: 0 auto ${({ theme }) => theme.space[12]};
  text-align: center;

  p {
    font-size: ${({ theme }) => theme.fontSizes.lg};
    color: ${({ theme }) => theme.colors.text};
    line-height: ${({ theme }) => theme.lineHeights.relaxed};
  }
`;

const ProcessSteps = styled.div`
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    width: 4px;
    height: 100%;
    background: ${({ theme }) => theme.colors.primary};
    transform: translateX(-50%);

    @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
      left: 30px;
    }
  }
`;

const ProcessStep = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.space[8]};
  margin-bottom: ${({ theme }) => theme.space[16]};
  position: relative;

  &:last-child {
    margin-bottom: 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: 1fr;
    padding-left: 80px;
  }
`;

const StepNumber = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.light};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  z-index: 1;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    left: 30px;
  }
`;

interface StepContentProps {
  align: 'left' | 'right';
}

const StepContent = styled.div<StepContentProps>`
  grid-column: ${({ align }) => align === 'left' ? '1 / 2' : '2 / 3'};

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-column: 1;
  }

  h3 {
    font-size: ${({ theme }) => theme.fontSizes['2xl']};
    margin-bottom: ${({ theme }) => theme.space[4]};
    color: ${({ theme }) => theme.colors.primary};
  }

  p {
    color: ${({ theme }) => theme.colors.text};
    line-height: ${({ theme }) => theme.lineHeights.relaxed};
    margin-bottom: ${({ theme }) => theme.space[4]};
  }

  ul {
    color: ${({ theme }) => theme.colors.text};
    line-height: ${({ theme }) => theme.lineHeights.relaxed};
    padding-left: ${({ theme }) => theme.space[6]};

    li {
      margin-bottom: ${({ theme }) => theme.space[2]};
    }
  }
`;

interface StepImageProps {
  align: 'left' | 'right';
}

const StepImage = styled.div<StepImageProps>`
  grid-column: ${({ align }) => align === 'left' ? '2 / 3' : '1 / 2'};
  border-radius: ${({ theme }) => theme.radii.lg};
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadows.lg};
  height: 300px;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-column: 1;
    margin-top: ${({ theme }) => theme.space[6]};
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const MethodologySection = styled(Section)`
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.accent});
`;

const MethodologyGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${({ theme }) => theme.space[6]};

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

const MethodologyCard = styled(motion.div)`
  background-color: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: ${({ theme }) => theme.radii.lg};
  padding: ${({ theme }) => theme.space[6]};
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.2);

  .icon {
    font-size: 2.5rem;
    color: ${({ theme }) => theme.colors.light};
    margin-bottom: ${({ theme }) => theme.space[4]};
  }

  h3 {
    color: ${({ theme }) => theme.colors.light};
    margin-bottom: ${({ theme }) => theme.space[3]};
  }

  p {
    color: rgba(255, 255, 255, 0.8);
  }
`;

const CTASection = styled(Section)`
  text-align: center;
`;

const stepVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.5,
    },
  }),
};

const methodologyVariants = {
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

const OurProcess: React.FC = () => {
  return (
    <>
      <Hero
        useVideo={false}
      />

      <Section>
        <ProcessContainer>
          <SectionTitle
            title="Our Development Process"
            subtitle="A structured approach to delivering high-quality solutions that meet your business needs."
          />

          <ProcessIntro>
            <p>
              At Wipster Technologies, we follow a well-defined process that ensures transparency, quality, and timely delivery of projects. Our methodology combines industry best practices with our own proven approaches to create a streamlined workflow that maximizes efficiency and results.
            </p>
          </ProcessIntro>

          <ProcessSteps>
            <ProcessStep
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0}
              variants={stepVariants}
            >
              <StepNumber>1</StepNumber>
              <StepContent align="left">
                <h3>Discovery & Requirements</h3>
                <p>
                  We begin by understanding your business, goals, and challenges. This phase involves in-depth discussions, research, and analysis to define clear project requirements.
                </p>
                <ul>
                  <li>Stakeholder interviews</li>
                  <li>Business process analysis</li>
                  <li>Requirements documentation</li>
                  <li>Project scope definition</li>
                </ul>
              </StepContent>
              <StepImage align="right">
                <img src={getUnsplashImage(unsplashImages.process.discovery)} alt="Discovery Phase" />
              </StepImage>
            </ProcessStep>

            <ProcessStep
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={1}
              variants={stepVariants}
            >
              <StepNumber>2</StepNumber>
              <StepContent align="right">
                <h3>Planning & Design</h3>
                <p>
                  With requirements in hand, we create a detailed project plan and design the solution architecture. This phase sets the foundation for development.
                </p>
                <ul>
                  <li>Project timeline creation</li>
                  <li>Resource allocation</li>
                  <li>Technical architecture design</li>
                  <li>UI/UX wireframing and prototyping</li>
                </ul>
              </StepContent>
              <StepImage align="left">
                <img src={getUnsplashImage(unsplashImages.process.planning)} alt="Planning Phase" />
              </StepImage>
            </ProcessStep>

            <ProcessStep
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={2}
              variants={stepVariants}
            >
              <StepNumber>3</StepNumber>
              <StepContent align="left">
                <h3>Development</h3>
                <p>
                  Our development team brings the design to life, writing clean, efficient code that adheres to industry standards and best practices.
                </p>
                <ul>
                  <li>Agile development methodology</li>
                  <li>Regular code reviews</li>
                  <li>Continuous integration</li>
                  <li>Progress tracking and reporting</li>
                </ul>
              </StepContent>
              <StepImage align="right">
                <img src={getUnsplashImage(unsplashImages.process.development)} alt="Development Phase" />
              </StepImage>
            </ProcessStep>

            <ProcessStep
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={3}
              variants={stepVariants}
            >
              <StepNumber>4</StepNumber>
              <StepContent align="right">
                <h3>Testing & Quality Assurance</h3>
                <p>
                  Rigorous testing ensures that the solution meets all requirements and functions flawlessly across different environments.
                </p>
                <ul>
                  <li>Functional testing</li>
                  <li>Performance testing</li>
                  <li>Security testing</li>
                  <li>User acceptance testing</li>
                </ul>
              </StepContent>
              <StepImage align="left">
                <img src={getUnsplashImage(unsplashImages.process.testing)} alt="Testing Phase" />
              </StepImage>
            </ProcessStep>

            <ProcessStep
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={4}
              variants={stepVariants}
            >
              <StepNumber>5</StepNumber>
              <StepContent align="left">
                <h3>Deployment</h3>
                <p>
                  Once testing is complete, we deploy the solution to production, ensuring a smooth transition and minimal disruption to your business.
                </p>
                <ul>
                  <li>Deployment planning</li>
                  <li>Data migration</li>
                  <li>System integration</li>
                  <li>Go-live support</li>
                </ul>
              </StepContent>
              <StepImage align="right">
                <img src={getUnsplashImage(unsplashImages.process.deployment)} alt="Deployment Phase" />
              </StepImage>
            </ProcessStep>

            <ProcessStep
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={5}
              variants={stepVariants}
            >
              <StepNumber>6</StepNumber>
              <StepContent align="right">
                <h3>Maintenance & Support</h3>
                <p>
                  Our relationship doesn't end at deployment. We provide ongoing maintenance and support to ensure your solution continues to perform optimally.
                </p>
                <ul>
                  <li>Regular updates and patches</li>
                  <li>Performance monitoring</li>
                  <li>Technical support</li>
                  <li>Feature enhancements</li>
                </ul>
              </StepContent>
              <StepImage align="left">
                <img src={getUnsplashImage(unsplashImages.process.support)} alt="Support Phase" />
              </StepImage>
            </ProcessStep>
          </ProcessSteps>
        </ProcessContainer>
      </Section>

      <MethodologySection>
        <SectionTitle
          title="Our Methodologies"
          subtitle="We employ industry-standard methodologies tailored to each project's unique requirements."
          light
        />

        <MethodologyGrid>
          <MethodologyCard
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
            variants={methodologyVariants}
          >
            <div className="icon">
              <FaRocket />
            </div>
            <h3>Agile Development</h3>
            <p>Iterative approach with regular client feedback to ensure the solution evolves to meet changing needs.</p>
          </MethodologyCard>

          <MethodologyCard
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
            variants={methodologyVariants}
          >
            <div className="icon">
              <FaClipboardCheck />
            </div>
            <h3>Scrum Framework</h3>
            <p>Structured sprints with daily stand-ups and regular reviews to maintain momentum and transparency.</p>
          </MethodologyCard>

          <MethodologyCard
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={2}
            variants={methodologyVariants}
          >
            <div className="icon">
              <FaCode />
            </div>
            <h3>DevOps Practices</h3>
            <p>Continuous integration and deployment to streamline development and ensure rapid, reliable delivery.</p>
          </MethodologyCard>

          <MethodologyCard
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={3}
            variants={methodologyVariants}
          >
            <div className="icon">
              <FaLightbulb />
            </div>
            <h3>Design Thinking</h3>
            <p>User-centered approach that focuses on understanding user needs and creating intuitive solutions.</p>
          </MethodologyCard>

          <MethodologyCard
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={4}
            variants={methodologyVariants}
          >
            <div className="icon">
              <FaTools />
            </div>
            <h3>Lean Development</h3>
            <p>Eliminating waste and focusing on value-adding activities to maximize efficiency and results.</p>
          </MethodologyCard>

          <MethodologyCard
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={5}
            variants={methodologyVariants}
          >
            <div className="icon">
              <FaChartLine />
            </div>
            <h3>Data-Driven Approach</h3>
            <p>Using metrics and analytics to make informed decisions and continuously improve processes.</p>
          </MethodologyCard>
        </MethodologyGrid>
      </MethodologySection>

      <CTASection>
        <SectionTitle
          title="Ready to Start Your Project?"
          subtitle="Let's discuss how our process can be tailored to meet your specific needs."
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ textAlign: 'center' }}
        >
          <Button
            as={Link}
            to="/contact"
            size="large"
            icon={<FaArrowRight />}
            iconPosition="right"
          >
            Get in Touch
          </Button>
        </motion.div>
      </CTASection>
    </>
  );
};

export default OurProcess;
