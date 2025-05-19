import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FaArrowRight, 
  FaMobileAlt, 
  FaApple, 
  FaAndroid, 
  FaRocket, 
  FaShieldAlt, 
  FaSync,
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
  background-color: #0000002b;
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
      color: #fff;
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
  background-color: #0000002b;
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
    color: #fff;
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
      color: #fff;
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

const MobileDevelopment: React.FC = () => {
  return (
    <>
      <Hero
        useVideo={false}
      />
      
      <Section>
        <ServiceContainer>
          <SectionTitle
            title="Mobile App Development"
            subtitle="Custom mobile solutions that engage users and drive business growth."
          />
          
          <ServiceIntro>
            <p>
              In today's mobile-first world, having a powerful, intuitive mobile app is essential for businesses looking to engage with their customers and stay competitive. At Wipster Technologies, we specialize in creating custom mobile applications that deliver exceptional user experiences across all platforms.
            </p>
            <p>
              Our team of experienced mobile developers combines technical expertise with creative design to build apps that not only look great but also perform flawlessly. Whether you need a native iOS or Android app, a cross-platform solution, or a progressive web app, we have the skills and experience to bring your vision to life.
            </p>
          </ServiceIntro>
          
          <SectionTitle
            title="Our Mobile Development Services"
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
                <img src={getUnsplashImage(unsplashImages.services.mobileDev)} alt="iOS App Development" />
              </div>
              <div className="card-content">
                <div className="card-icon">
                  <FaApple />
                </div>
                <h3>iOS App Development</h3>
                <p>
                  Native iOS applications designed and developed for iPhone and iPad devices, leveraging the latest Apple technologies.
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
                <img src={getUnsplashImage(unsplashImages.services.mobileDev)} alt="Android App Development" />
              </div>
              <div className="card-content">
                <div className="card-icon">
                  <FaAndroid />
                </div>
                <h3>Android App Development</h3>
                <p>
                  Custom Android applications built to perform seamlessly across the diverse ecosystem of Android devices.
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
                <img src={getUnsplashImage(unsplashImages.services.mobileDev)} alt="Cross-Platform Development" />
              </div>
              <div className="card-content">
                <div className="card-icon">
                  <FaMobileAlt />
                </div>
                <h3>Cross-Platform Development</h3>
                <p>
                  Efficient development of apps that work on both iOS and Android from a single codebase, reducing time and cost.
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
                <img src={getUnsplashImage(unsplashImages.services.mobileDev)} alt="App Modernization" />
              </div>
              <div className="card-content">
                <div className="card-icon">
                  <FaSync />
                </div>
                <h3>App Modernization</h3>
                <p>
                  Upgrading and redesigning existing mobile applications to improve performance, user experience, and security.
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
                <img src={getUnsplashImage(unsplashImages.services.mobileDev)} alt="Mobile App Security" />
              </div>
              <div className="card-content">
                <div className="card-icon">
                  <FaShieldAlt />
                </div>
                <h3>Mobile App Security</h3>
                <p>
                  Implementation of robust security measures to protect user data and ensure compliance with industry standards.
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
                <img src={getUnsplashImage(unsplashImages.services.mobileDev)} alt="App Performance Optimization" />
              </div>
              <div className="card-content">
                <div className="card-icon">
                  <FaRocket />
                </div>
                <h3>App Performance Optimization</h3>
                <p>
                  Enhancing app speed, responsiveness, and resource efficiency to provide a smooth user experience.
                </p>
              </div>
            </ServiceTypeCard>
          </ServiceTypesGrid>
          
          <TechnologiesSection>
            <SectionTitle
              title="Technologies We Use"
              subtitle="We leverage the latest mobile development technologies and frameworks to build high-quality applications."
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
                <img src="/images/Swift.png" alt="Swift" />
                <h3>Swift</h3>
                <p>For native iOS development</p>
              </TechnologyCard>
              
              <TechnologyCard
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={1}
                variants={techVariants}
              >
                <img src="/images/Kotlin.png" alt="Kotlin" />
                <h3>Kotlin</h3>
                <p>For native Android development</p>
              </TechnologyCard>
              
              <TechnologyCard
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={2}
                variants={techVariants}
              >
                <img src="/images/react.png" alt="React Native" />
                <h3>React Native</h3>
                <p>For cross-platform development</p>
              </TechnologyCard>
              
              <TechnologyCard
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={3}
                variants={techVariants}
              >
                <img src="/images/Flutter.png" alt="Flutter" />
                <h3>Flutter</h3>
                <p>For cross-platform UI development</p>
              </TechnologyCard>
              
              <TechnologyCard
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={4}
                variants={techVariants}
              >
                <img src="/images/Firebase.png" alt="Firebase" />
                <h3>Firebase</h3>
                <p>For backend and analytics</p>
              </TechnologyCard>
              
              <TechnologyCard
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={5}
                variants={techVariants}
              >
                <img src="/images/AWS Amplify.png" alt="AWS Amplify" />
                <h3>AWS Amplify</h3>
                <p>For cloud integration</p>
              </TechnologyCard>
              
              <TechnologyCard
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={6}
                variants={techVariants}
              >
                <img src="/images/GraphQL.png" alt="GraphQL" />
                <h3>GraphQL</h3>
                <p>For efficient API development</p>
              </TechnologyCard>
              
              <TechnologyCard
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={7}
                variants={techVariants}
              >
                <img src="/images/Figma.png" alt="Figma" />
                <h3>Figma</h3>
                <p>For UI/UX design</p>
              </TechnologyCard>
            </TechnologiesGrid>
          </TechnologiesSection>
          
          <BenefitsSection>
            <SectionTitle
              title="Benefits of Our Mobile Development Services"
              subtitle="Why choose Wipster Technologies for your mobile app development needs."
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
                  <h3>User-Centered Design</h3>
                  <p>
                    We prioritize user experience, creating intuitive interfaces that engage users and drive adoption.
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
                  <h3>Cross-Platform Expertise</h3>
                  <p>
                    Our experience with both native and cross-platform development allows us to recommend the best approach for your specific needs.
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
                    We build apps with scalability in mind, ensuring they can grow with your business and accommodate increasing user numbers.
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
                  <h3>Robust Security</h3>
                  <p>
                    We implement industry-standard security measures to protect user data and ensure compliance with regulations.
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
                  <h3>Continuous Support</h3>
                  <p>
                    Our relationship doesn't end at launch. We provide ongoing maintenance and updates to keep your app running smoothly.
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
                  <h3>Transparent Development Process</h3>
                  <p>
                    We keep you informed throughout the development process with regular updates and clear communication.
                  </p>
                </div>
              </BenefitItem>
            </BenefitsGrid>
          </BenefitsSection>
        </ServiceContainer>
      </Section>
      
      <ProcessSection>
        <SectionTitle
          title="Our Mobile App Development Process"
          subtitle="A structured approach to delivering high-quality mobile applications."
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
              <h3>Discovery & Planning</h3>
              <p>
                We begin by understanding your business goals, target audience, and app requirements. This phase involves market research, competitor analysis, and defining the app's core features and functionality.
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
              <h3>UI/UX Design</h3>
              <p>
                Our designers create wireframes and prototypes to visualize the app's interface and user flow. We focus on creating intuitive, engaging experiences that align with your brand identity and meet user expectations.
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
                Our development team brings the design to life, writing clean, efficient code that adheres to platform-specific guidelines and best practices. We use agile methodologies to ensure regular progress updates and flexibility.
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
                We conduct thorough testing across different devices and scenarios to ensure your app functions flawlessly. This includes functional testing, performance testing, security testing, and user acceptance testing.
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
                Once testing is complete, we prepare your app for submission to the App Store and/or Google Play Store, handling all aspects of the submission process to ensure a smooth launch.
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
              <h3>Post-Launch Support</h3>
              <p>
                We provide ongoing maintenance and support to ensure your app continues to perform optimally. This includes regular updates, bug fixes, and feature enhancements based on user feedback and changing market needs.
              </p>
            </StepContent>
          </ProcessStep>
        </ProcessSteps>
      </ProcessSection>
      
      <CTASection>
        <SectionTitle
          title="Ready to Build Your Mobile App?"
          subtitle="Let's discuss how our mobile development services can help your business reach its goals."
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

export default MobileDevelopment;
