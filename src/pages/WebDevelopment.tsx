import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  FaArrowRight,
  FaCode,
  FaMobileAlt,
  FaShoppingCart,
  FaChartLine,
  FaUserFriends,
  FaLaptopCode,
  FaCheckCircle
} from 'react-icons/fa';
import Hero from '../components/Hero';
import Section from '../components/Section';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';
import { getUnsplashImage, unsplashImages } from '../utils/unsplashImages';

const ServiceContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const ServiceIntro = styled.div`
  max-width: 800px;
  margin: 0 auto ${({ theme }) => theme.space[12]};

  p {
    font-size: ${({ theme }) => theme.fontSizes.lg};
    color: ${({ theme }) => theme.colors.text};
    line-height: ${({ theme }) => theme.lineHeights.relaxed};
    margin-bottom: ${({ theme }) => theme.space[6]};
  }
`;

const ServiceTypesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${({ theme }) => theme.space[8]};
  margin-bottom: ${({ theme }) => theme.space[16]};

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

const ServiceTypeCard = styled(motion.div)`
  background-color: #FFFFFF;
  border-radius: ${({ theme }) => theme.radii.lg};
  box-shadow: ${({ theme }) => theme.shadows.md};
  overflow: hidden;

  .card-image {
    height: 200px;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.5s ease;
    }
  }

  &:hover .card-image img {
    transform: scale(1.05);
  }

  .card-content {
    padding: ${({ theme }) => theme.space[6]};

    h3 {
      font-size: ${({ theme }) => theme.fontSizes.xl};
      color: #333333;
      margin-bottom: ${({ theme }) => theme.space[3]};
    }

    p {
      color: #666666;
      margin-bottom: ${({ theme }) => theme.space[4]};
      line-height: ${({ theme }) => theme.lineHeights.relaxed};
    }
  }

  .card-icon {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.light};
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    margin-bottom: ${({ theme }) => theme.space[4]};
  }
`;

const ProcessSection = styled(Section)`
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.accent});
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
    background: rgba(255, 255, 255, 0.3);
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
  background: ${({ theme }) => theme.colors.light};
  color: ${({ theme }) => theme.colors.primary};
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
    font-size: ${({ theme }) => theme.fontSizes.xl};
    margin-bottom: ${({ theme }) => theme.space[4]};
    color: ${({ theme }) => theme.colors.light};
  }

  p {
    color: rgba(255, 255, 255, 0.8);
    line-height: ${({ theme }) => theme.lineHeights.relaxed};
  }
`;

const TechnologiesSection = styled.div`
  margin-bottom: ${({ theme }) => theme.space[16]};
`;

const TechnologiesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: ${({ theme }) => theme.space[6]};

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`;

const TechnologyCard = styled(motion.div)`
  background-color: #FFFFFF;
  border-radius: ${({ theme }) => theme.radii.lg};
  box-shadow: ${({ theme }) => theme.shadows.md};
  padding: ${({ theme }) => theme.space[6]};
  text-align: center;

  img {
    height: 60px;
    margin-bottom: ${({ theme }) => theme.space[4]};
  }

  h3 {
    font-size: ${({ theme }) => theme.fontSizes.lg};
    color: #333333;
    margin-bottom: ${({ theme }) => theme.space[2]};
  }

  p {
    color: #666666;
    font-size: ${({ theme }) => theme.fontSizes.sm};
  }
`;

const BenefitsSection = styled.div`
  margin-bottom: ${({ theme }) => theme.space[16]};
`;

const BenefitsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${({ theme }) => theme.space[8]};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

const BenefitItem = styled(motion.div)`
  display: flex;
  gap: ${({ theme }) => theme.space[4]};

  .icon {
    color: ${({ theme }) => theme.colors.primary};
    font-size: 1.5rem;
    flex-shrink: 0;
    margin-top: ${({ theme }) => theme.space[1]};
  }

  .content {
    h3 {
      font-size: ${({ theme }) => theme.fontSizes.lg};
      color: #333333;
      margin-bottom: ${({ theme }) => theme.space[2]};
    }

    p {
      color: #666666;
      line-height: ${({ theme }) => theme.lineHeights.relaxed};
    }
  }
`;

const CTASection = styled(Section)`
  text-align: center;
`;

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
    },
  }),
};

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

const techVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
    },
  }),
};

const benefitVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
    },
  }),
};

const WebDevelopment: React.FC = () => {
  return (
    <>
      <Hero
        useVideo={false}
      />

      <Section>
        <ServiceContainer>
          <SectionTitle
            title="Web Development Services"
            subtitle="Custom web solutions designed to meet your business needs and exceed user expectations."
          />

          <ServiceIntro>
            <p>
              At Wipster Technologies, we specialize in creating custom web applications and websites that help businesses achieve their goals. Our web development services combine technical expertise with creative design to deliver solutions that are not only visually appealing but also functional, scalable, and secure.
            </p>
            <p>
              Whether you need a simple informational website, a complex web application, or an e-commerce platform, our team has the skills and experience to bring your vision to life. We follow industry best practices and use the latest technologies to ensure that your web solution is modern, responsive, and optimized for performance.
            </p>
          </ServiceIntro>

          <SectionTitle
            title="Our Web Development Services"
            size="medium"
            align="left"
          />

          <ServiceTypesGrid>
            <ServiceTypeCard
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0}
              variants={cardVariants}
            >
              <div className="card-image">
                <img src={getUnsplashImage(unsplashImages.services.webDev1)} alt="Custom Web Applications" />
              </div>
              <div className="card-content">
                <div className="card-icon">
                  <FaLaptopCode />
                </div>
                <h3>Custom Web Applications</h3>
                <p>
                  Tailored web applications designed to address specific business challenges and streamline operations.
                </p>
              </div>
            </ServiceTypeCard>

            <ServiceTypeCard
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={1}
              variants={cardVariants}
            >
              <div className="card-image">
                <img src={getUnsplashImage(unsplashImages.services.webDev2)} alt="Responsive Websites" />
              </div>
              <div className="card-content">
                <div className="card-icon">
                  <FaMobileAlt />
                </div>
                <h3>Responsive Websites</h3>
                <p>
                  Modern, mobile-friendly websites that provide an optimal viewing experience across all devices.
                </p>
              </div>
            </ServiceTypeCard>

            <ServiceTypeCard
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={2}
              variants={cardVariants}
            >
              <div className="card-image">
                <img src={getUnsplashImage(unsplashImages.services.webDev3)} alt="E-Commerce Solutions" />
              </div>
              <div className="card-content">
                <div className="card-icon">
                  <FaShoppingCart />
                </div>
                <h3>E-Commerce Solutions</h3>
                <p>
                  Secure, user-friendly online stores that provide a seamless shopping experience for your customers.
                </p>
              </div>
            </ServiceTypeCard>

            <ServiceTypeCard
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={3}
              variants={cardVariants}
            >
              <div className="card-image">
                <img src={getUnsplashImage(unsplashImages.services.webDev4)} alt="Web Portals" />
              </div>
              <div className="card-content">
                <div className="card-icon">
                  <FaUserFriends />
                </div>
                <h3>Web Portals</h3>
                <p>
                  Secure portals for customers, partners, or employees to access information and services.
                </p>
              </div>
            </ServiceTypeCard>

            <ServiceTypeCard
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={4}
              variants={cardVariants}
            >
              <div className="card-image">
                <img src={getUnsplashImage(unsplashImages.services.webDev5)} alt="Progressive Web Apps" />
              </div>
              <div className="card-content">
                <div className="card-icon">
                  <FaCode />
                </div>
                <h3>Progressive Web Apps</h3>
                <p>
                  Web applications that offer a native app-like experience with offline capabilities and fast loading.
                </p>
              </div>
            </ServiceTypeCard>

            <ServiceTypeCard
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={5}
              variants={cardVariants}
            >
              <div className="card-image">
                <img src={getUnsplashImage(unsplashImages.services.webDev6)} alt="Website Optimization" />
              </div>
              <div className="card-content">
                <div className="card-icon">
                  <FaChartLine />
                </div>
                <h3>Website Optimization</h3>
                <p>
                  Performance improvements, SEO optimization, and accessibility enhancements for existing websites.
                </p>
              </div>
            </ServiceTypeCard>
          </ServiceTypesGrid>

          <TechnologiesSection>
            <SectionTitle
              title="Technologies We Use"
              subtitle="We leverage the latest technologies and frameworks to build modern, scalable web solutions."
              size="medium"
            />

            <TechnologiesGrid>
              <TechnologyCard
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={0}
                variants={techVariants}
              >
                <img src="/images/tech/react.svg" alt="React" />
                <h3>React</h3>
                <p>For building interactive user interfaces</p>
              </TechnologyCard>

              <TechnologyCard
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={1}
                variants={techVariants}
              >
                <img src="/images/tech/node.svg" alt="Node.js" />
                <h3>Node.js</h3>
                <p>For scalable server-side applications</p>
              </TechnologyCard>

              <TechnologyCard
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={2}
                variants={techVariants}
              >
                <img src="/images/tech/typescript.svg" alt="TypeScript" />
                <h3>TypeScript</h3>
                <p>For type-safe JavaScript development</p>
              </TechnologyCard>

              <TechnologyCard
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={3}
                variants={techVariants}
              >
                <img src="/images/tech/next.svg" alt="Next.js" />
                <h3>Next.js</h3>
                <p>For server-side rendering and static sites</p>
              </TechnologyCard>

              <TechnologyCard
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={4}
                variants={techVariants}
              >
                <img src="/images/tech/graphql.svg" alt="GraphQL" />
                <h3>GraphQL</h3>
                <p>For efficient API development</p>
              </TechnologyCard>

              <TechnologyCard
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={5}
                variants={techVariants}
              >
                <img src="/images/tech/aws.svg" alt="AWS" />
                <h3>AWS</h3>
                <p>For cloud infrastructure and hosting</p>
              </TechnologyCard>

              <TechnologyCard
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={6}
                variants={techVariants}
              >
                <img src="/images/tech/mongodb.svg" alt="MongoDB" />
                <h3>MongoDB</h3>
                <p>For flexible, scalable databases</p>
              </TechnologyCard>

              <TechnologyCard
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={7}
                variants={techVariants}
              >
                <img src="/images/tech/docker.svg" alt="Docker" />
                <h3>Docker</h3>
                <p>For containerization and deployment</p>
              </TechnologyCard>
            </TechnologiesGrid>
          </TechnologiesSection>

          <BenefitsSection>
            <SectionTitle
              title="Benefits of Our Web Development Services"
              subtitle="Why choose Wipster Technologies for your web development needs."
              size="medium"
            />

            <BenefitsGrid>
              <BenefitItem
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={0}
                variants={benefitVariants}
              >
                <div className="icon">
                  <FaCheckCircle />
                </div>
                <div className="content">
                  <h3>Custom Solutions</h3>
                  <p>
                    We don't believe in one-size-fits-all approaches. Our web solutions are tailored to your specific business needs and goals.
                  </p>
                </div>
              </BenefitItem>

              <BenefitItem
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={1}
                variants={benefitVariants}
              >
                <div className="icon">
                  <FaCheckCircle />
                </div>
                <div className="content">
                  <h3>Responsive Design</h3>
                  <p>
                    All our web solutions are built with a mobile-first approach, ensuring they look and function perfectly on all devices.
                  </p>
                </div>
              </BenefitItem>

              <BenefitItem
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={2}
                variants={benefitVariants}
              >
                <div className="icon">
                  <FaCheckCircle />
                </div>
                <div className="content">
                  <h3>Scalable Architecture</h3>
                  <p>
                    We build solutions that can grow with your business, accommodating increased traffic and functionality as needed.
                  </p>
                </div>
              </BenefitItem>

              <BenefitItem
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={3}
                variants={benefitVariants}
              >
                <div className="icon">
                  <FaCheckCircle />
                </div>
                <div className="content">
                  <h3>Performance Optimization</h3>
                  <p>
                    We optimize for speed and performance, ensuring fast loading times and smooth user experiences.
                  </p>
                </div>
              </BenefitItem>

              <BenefitItem
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={4}
                variants={benefitVariants}
              >
                <div className="icon">
                  <FaCheckCircle />
                </div>
                <div className="content">
                  <h3>SEO-Friendly</h3>
                  <p>
                    Our websites are built with search engine optimization in mind, helping you rank higher in search results.
                  </p>
                </div>
              </BenefitItem>

              <BenefitItem
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={5}
                variants={benefitVariants}
              >
                <div className="icon">
                  <FaCheckCircle />
                </div>
                <div className="content">
                  <h3>Ongoing Support</h3>
                  <p>
                    We provide maintenance and support services to ensure your web solution continues to perform optimally.
                  </p>
                </div>
              </BenefitItem>
            </BenefitsGrid>
          </BenefitsSection>
        </ServiceContainer>
      </Section>

      <ProcessSection>
        <SectionTitle
          title="Our Web Development Process"
          subtitle="A structured approach to delivering high-quality web solutions."
          light
        />

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
                We begin by understanding your business goals, target audience, and specific requirements for the web solution. This phase involves in-depth discussions, research, and analysis to define clear project objectives.
              </p>
            </StepContent>
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
                Based on the requirements, we create a detailed project plan and design the user interface and experience. This includes wireframes, mockups, and prototypes to visualize the final product before development begins.
              </p>
            </StepContent>
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
                Our development team brings the design to life, writing clean, efficient code that adheres to industry standards. We use agile methodologies to ensure regular progress updates and flexibility to accommodate changes.
              </p>
            </StepContent>
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
                Rigorous testing ensures that the web solution functions flawlessly across different browsers and devices. We conduct performance, security, and usability testing to identify and fix any issues.
              </p>
            </StepContent>
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
                Once testing is complete, we deploy the web solution to the production environment, ensuring a smooth transition and minimal disruption. We handle all aspects of the deployment process, from domain configuration to server setup.
              </p>
            </StepContent>
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
                Our relationship doesn't end at deployment. We provide ongoing maintenance and support to ensure your web solution continues to perform optimally, with regular updates, security patches, and performance monitoring.
              </p>
            </StepContent>
          </ProcessStep>
        </ProcessSteps>
      </ProcessSection>

      <CTASection>
        <SectionTitle
          title="Ready to Start Your Web Project?"
          subtitle="Let's discuss how our web development services can help your business grow."
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

export default WebDevelopment;
