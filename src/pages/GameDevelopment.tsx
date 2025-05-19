import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FaArrowRight, 
  FaGamepad, 
  FaMobileAlt, 
  FaDesktop, 
  FaVrCardboard, 
  FaCode, 
  FaPaintBrush,
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

const GameDevelopment: React.FC = () => {
  return (
    <>
      <Hero
        useVideo={false}
      />
      
      <Section>
        <ServiceContainer>
          <SectionTitle
            title="Game Development Services"
            subtitle="Creating immersive gaming experiences that captivate and engage players."
          />
          
          <ServiceIntro>
            <p>
              At Wipster Technologies, we combine technical expertise with creative vision to develop engaging, high-quality games across multiple platforms. Our team of experienced game developers, designers, and artists work together to bring your game concept to life, whether you're looking to create a mobile game, PC/console title, or VR/AR experience.
            </p>
            <p>
              We handle every aspect of the game development process, from initial concept and design to development, testing, and deployment. Our focus is on creating games that not only look and play great but also deliver a compelling experience that keeps players coming back for more.
            </p>
          </ServiceIntro>
          
          <SectionTitle
            title="Our Game Development Services"
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
                <img src={getUnsplashImage(unsplashImages.services.mobileDev)} alt="Mobile Game Development" />
              </div>
              <div className="card-content">
                <div className="card-icon">
                  <FaMobileAlt />
                </div>
                <h3>Mobile Game Development</h3>
                <p>
                  Creating engaging games for iOS and Android platforms, optimized for performance and user experience.
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
                <img src={getUnsplashImage(unsplashImages.services.webDev)} alt="PC & Console Games" />
              </div>
              <div className="card-content">
                <div className="card-icon">
                  <FaDesktop />
                </div>
                <h3>PC & Console Games</h3>
                <p>
                  Developing immersive gaming experiences for PC and major gaming consoles with advanced graphics and gameplay.
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
                <img src={getUnsplashImage(unsplashImages.services.webDev)} alt="VR/AR Game Development" />
              </div>
              <div className="card-content">
                <div className="card-icon">
                  <FaVrCardboard />
                </div>
                <h3>VR/AR Game Development</h3>
                <p>
                  Creating innovative virtual and augmented reality gaming experiences that push the boundaries of immersion.
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
                <img src={getUnsplashImage(unsplashImages.services.webDev)} alt="Game Design & Prototyping" />
              </div>
              <div className="card-content">
                <div className="card-icon">
                  <FaPaintBrush />
                </div>
                <h3>Game Design & Prototyping</h3>
                <p>
                  Conceptualizing game mechanics, storylines, and characters, and creating playable prototypes to test and refine ideas.
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
                <img src={getUnsplashImage(unsplashImages.services.webDev)} alt="Game Porting" />
              </div>
              <div className="card-content">
                <div className="card-icon">
                  <FaGamepad />
                </div>
                <h3>Game Porting</h3>
                <p>
                  Adapting existing games to run on different platforms while maintaining performance and user experience.
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
                <img src={getUnsplashImage(unsplashImages.services.webDev)} alt="Game Backend Development" />
              </div>
              <div className="card-content">
                <div className="card-icon">
                  <FaCode />
                </div>
                <h3>Game Backend Development</h3>
                <p>
                  Building robust server infrastructure for multiplayer games, leaderboards, user authentication, and in-app purchases.
                </p>
              </div>
            </ServiceTypeCard>
          </ServiceTypesGrid>
          
          <TechnologiesSection>
            <SectionTitle
              title="Technologies We Use"
              subtitle="We leverage industry-leading game development engines and tools to create exceptional gaming experiences."
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
                <img src="/images/Unity.png" alt="Unity" />
                <h3>Unity</h3>
                <p>For cross-platform game development</p>
              </TechnologyCard>
              
              <TechnologyCard
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={1}
                variants={techVariants}
              >
                <img src="/images/Unreal Engine.png" alt="Unreal Engine" />
                <h3>Unreal Engine</h3>
                <p>For high-fidelity graphics and gameplay</p>
              </TechnologyCard>
              
              <TechnologyCard
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={2}
                variants={techVariants}
              >
                <img src="/images/C.png" alt="C#" />
                <h3>C#</h3>
                <p>For Unity game development</p>
              </TechnologyCard>
              
              <TechnologyCard
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={3}
                variants={techVariants}
              >
                <img src="/images/Cpluse.png" alt="C++" />
                <h3>C++</h3>
                <p>For Unreal Engine development</p>
              </TechnologyCard>
              
              <TechnologyCard
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={4}
                variants={techVariants}
              >
                <img src="/images/Blender.png" alt="Blender" />
                <h3>Blender</h3>
                <p>For 3D modeling and animation</p>
              </TechnologyCard>
              
              <TechnologyCard
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={5}
                variants={techVariants}
              >
                <img src="/images/AdobeCreativeSuite.png" alt="Adobe Creative Suite" />
                <h3>Adobe Creative Suite</h3>
                <p>For 2D art and UI design</p>
              </TechnologyCard>
              
              <TechnologyCard
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={6}
                variants={techVariants}
              >
                <img src="/images/AWS.png" alt="AWS" />
                <h3>AWS</h3>
                <p>For game server infrastructure</p>
              </TechnologyCard>
              
              <TechnologyCard
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={7}
                variants={techVariants}
              >
                <img src="/images/Firebase.png" alt="Firebase" />
                <h3>Firebase</h3>
                <p>For backend services and analytics</p>
              </TechnologyCard>
            </TechnologiesGrid>
          </TechnologiesSection>
          
          <BenefitsSection>
            <SectionTitle
              title="Benefits of Our Game Development Services"
              subtitle="Why choose Wipster Technologies for your game development project."
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
                  <h3>End-to-End Development</h3>
                  <p>
                    We handle every aspect of game development, from initial concept to final release, ensuring a cohesive and polished product.
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
                    Our experience with multiple platforms allows us to develop games that perform consistently across different devices and operating systems.
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
                  <h3>Optimized Performance</h3>
                  <p>
                    We optimize our games for smooth performance, fast loading times, and efficient resource usage, even on lower-end devices.
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
                  <h3>Engaging User Experience</h3>
                  <p>
                    We focus on creating intuitive controls, compelling gameplay, and immersive environments that keep players engaged.
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
                  <h3>Monetization Strategy</h3>
                  <p>
                    We help you implement effective monetization strategies, from premium pricing to in-app purchases and ad integration.
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
                  <h3>Post-Launch Support</h3>
                  <p>
                    We provide ongoing maintenance, updates, and support to ensure your game continues to perform well and engage players.
                  </p>
                </div>
              </BenefitItem>
            </BenefitsGrid>
          </BenefitsSection>
        </ServiceContainer>
      </Section>
      
      <ProcessSection>
        <SectionTitle
          title="Our Game Development Process"
          subtitle="A structured approach to creating engaging and successful games."
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
              <h3>Concept & Planning</h3>
              <p>
                We begin by defining your game concept, target audience, and core gameplay mechanics. This phase involves brainstorming, market research, and creating a detailed game design document that serves as a blueprint for development.
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
              <h3>Prototyping</h3>
              <p>
                We create a playable prototype to test core gameplay mechanics and validate the concept. This allows us to identify potential issues early and make necessary adjustments before full-scale development begins.
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
              <h3>Art & Asset Creation</h3>
              <p>
                Our artists and designers create the visual elements of your game, including characters, environments, UI elements, and animations. We ensure all assets align with your game's style and vision.
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
              <h3>Development</h3>
              <p>
                Our development team brings your game to life, implementing gameplay mechanics, systems, and features. We use agile methodologies to ensure regular progress updates and flexibility to accommodate changes.
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
              <h3>Testing & Quality Assurance</h3>
              <p>
                We conduct thorough testing to identify and fix bugs, balance gameplay, and ensure a smooth user experience. This includes functional testing, performance testing, and user playtesting to gather feedback.
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
              <h3>Launch & Post-Launch Support</h3>
              <p>
                We handle the submission process to app stores and gaming platforms, and provide ongoing support after launch, including updates, bug fixes, and new content to keep players engaged.
              </p>
            </StepContent>
          </ProcessStep>
        </ProcessSteps>
      </ProcessSection>
      
      <CTASection>
        <SectionTitle
          title="Ready to Bring Your Game Idea to Life?"
          subtitle="Let's discuss how our game development services can help you create an engaging and successful game."
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

export default GameDevelopment;
