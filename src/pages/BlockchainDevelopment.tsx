import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FaArrowRight, 
  FaLink, 
  FaExchangeAlt, 
  FaShieldAlt, 
  FaCode, 
  FaFileContract, 
  FaCubes,
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

const BlockchainDevelopment: React.FC = () => {
  return (
    <>
      <Hero
        useVideo={false}
      />
      
      <Section>
        <ServiceContainer>
          <SectionTitle
            title="Blockchain Development Services"
            subtitle="Innovative blockchain solutions that enhance security, transparency, and efficiency."
          />
          
          <ServiceIntro>
            <p>
              At Wipster Technologies, we help businesses leverage the power of blockchain technology to create secure, transparent, and efficient solutions. Our team of blockchain experts combines deep technical knowledge with business acumen to develop custom blockchain applications that address your specific challenges and opportunities.
            </p>
            <p>
              Whether you're looking to implement a private blockchain for your enterprise, develop a decentralized application (dApp), or create a custom cryptocurrency, we have the expertise to guide you through the entire process, from concept to deployment and beyond.
            </p>
          </ServiceIntro>
          
          <SectionTitle
            title="Our Blockchain Development Services"
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
                <img src={getUnsplashImage(unsplashImages.services.cloud)} alt="Smart Contract Development" />
              </div>
              <div className="card-content">
                <div className="card-icon">
                  <FaFileContract />
                </div>
                <h3>Smart Contract Development</h3>
                <p>
                  Creating secure, efficient smart contracts that automate processes and enforce agreements without intermediaries.
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
                <img src={getUnsplashImage(unsplashImages.services.cloud)} alt="dApp Development" />
              </div>
              <div className="card-content">
                <div className="card-icon">
                  <FaCode />
                </div>
                <h3>dApp Development</h3>
                <p>
                  Building decentralized applications that run on blockchain networks, providing transparency and resistance to censorship.
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
                <img src={getUnsplashImage(unsplashImages.services.cloud)} alt="Private Blockchain Development" />
              </div>
              <div className="card-content">
                <div className="card-icon">
                  <FaLink />
                </div>
                <h3>Private Blockchain Development</h3>
                <p>
                  Creating custom, permissioned blockchain networks for enterprises that require control over access and data privacy.
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
                <img src={getUnsplashImage(unsplashImages.services.cloud)} alt="Cryptocurrency Development" />
              </div>
              <div className="card-content">
                <div className="card-icon">
                  <FaExchangeAlt />
                </div>
                <h3>Cryptocurrency Development</h3>
                <p>
                  Developing custom tokens and cryptocurrencies for various use cases, including utility tokens, security tokens, and stablecoins.
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
                <img src={getUnsplashImage(unsplashImages.services.cloud)} alt="Blockchain Security" />
              </div>
              <div className="card-content">
                <div className="card-icon">
                  <FaShieldAlt />
                </div>
                <h3>Blockchain Security</h3>
                <p>
                  Implementing robust security measures for blockchain applications, including smart contract audits and vulnerability assessments.
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
                <img src={getUnsplashImage(unsplashImages.services.cloud)} alt="Blockchain Integration" />
              </div>
              <div className="card-content">
                <div className="card-icon">
                  <FaCubes />
                </div>
                <h3>Blockchain Integration</h3>
                <p>
                  Integrating blockchain technology with existing systems and applications to enhance functionality and security.
                </p>
              </div>
            </ServiceTypeCard>
          </ServiceTypesGrid>
          
          <TechnologiesSection>
            <SectionTitle
              title="Technologies We Use"
              subtitle="We leverage leading blockchain platforms and tools to develop secure, scalable solutions."
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
                <img src="/images/tech/ethereum.svg" alt="Ethereum" />
                <h3>Ethereum</h3>
                <p>For smart contracts and dApps</p>
              </TechnologyCard>
              
              <TechnologyCard
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={1}
                variants={techVariants}
              >
                <img src="/images/tech/solidity.svg" alt="Solidity" />
                <h3>Solidity</h3>
                <p>For Ethereum smart contract development</p>
              </TechnologyCard>
              
              <TechnologyCard
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={2}
                variants={techVariants}
              >
                <img src="/images/tech/hyperledger.svg" alt="Hyperledger" />
                <h3>Hyperledger</h3>
                <p>For enterprise blockchain solutions</p>
              </TechnologyCard>
              
              <TechnologyCard
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={3}
                variants={techVariants}
              >
                <img src="/images/tech/binance.svg" alt="Binance Smart Chain" />
                <h3>Binance Smart Chain</h3>
                <p>For cost-effective smart contracts</p>
              </TechnologyCard>
              
              <TechnologyCard
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={4}
                variants={techVariants}
              >
                <img src="/images/tech/web3js.svg" alt="Web3.js" />
                <h3>Web3.js</h3>
                <p>For blockchain frontend integration</p>
              </TechnologyCard>
              
              <TechnologyCard
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={5}
                variants={techVariants}
              >
                <img src="/images/tech/truffle.svg" alt="Truffle" />
                <h3>Truffle</h3>
                <p>For smart contract development and testing</p>
              </TechnologyCard>
              
              <TechnologyCard
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={6}
                variants={techVariants}
              >
                <img src="/images/tech/ipfs.svg" alt="IPFS" />
                <h3>IPFS</h3>
                <p>For decentralized storage</p>
              </TechnologyCard>
              
              <TechnologyCard
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={7}
                variants={techVariants}
              >
                <img src="/images/tech/metamask.svg" alt="MetaMask" />
                <h3>MetaMask</h3>
                <p>For wallet integration</p>
              </TechnologyCard>
            </TechnologiesGrid>
          </TechnologiesSection>
          
          <BenefitsSection>
            <SectionTitle
              title="Benefits of Our Blockchain Development Services"
              subtitle="Why choose Wipster Technologies for your blockchain project."
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
                  <h3>Technical Expertise</h3>
                  <p>
                    Our team has deep knowledge of blockchain technologies and development practices, ensuring high-quality, secure solutions.
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
                  <h3>Business-Focused Approach</h3>
                  <p>
                    We focus on understanding your business needs and developing blockchain solutions that deliver tangible value.
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
                  <h3>Security-First Mindset</h3>
                  <p>
                    We prioritize security in all aspects of blockchain development, implementing best practices and conducting thorough audits.
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
                  <h3>Scalable Solutions</h3>
                  <p>
                    We design blockchain applications with scalability in mind, ensuring they can grow with your business and user base.
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
                  <h3>End-to-End Development</h3>
                  <p>
                    We handle all aspects of blockchain development, from initial concept and design to deployment and ongoing support.
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
                  <h3>Regulatory Compliance</h3>
                  <p>
                    We help navigate the complex regulatory landscape of blockchain and cryptocurrency, ensuring compliance with relevant laws and regulations.
                  </p>
                </div>
              </BenefitItem>
            </BenefitsGrid>
          </BenefitsSection>
        </ServiceContainer>
      </Section>
      
      <ProcessSection>
        <SectionTitle
          title="Our Blockchain Development Process"
          subtitle="A structured approach to creating secure, effective blockchain solutions."
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
                We begin by understanding your business needs and objectives, conducting feasibility studies, and determining if blockchain is the right solution for your specific use case.
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
              <h3>Architecture Design</h3>
              <p>
                We design the architecture of your blockchain solution, selecting the appropriate platform, consensus mechanism, and security measures based on your requirements.
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
                Our development team brings the design to life, writing clean, efficient code for smart contracts, dApps, or custom blockchain networks, following industry best practices.
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
              <h3>Testing & Security Audit</h3>
              <p>
                We conduct thorough testing and security audits to identify and fix vulnerabilities, ensuring your blockchain solution is secure, reliable, and performs as expected.
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
                Once testing is complete, we deploy your blockchain solution to the appropriate network, whether it's a public blockchain, private network, or hybrid solution.
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
                We provide ongoing maintenance and support to ensure your blockchain solution continues to perform optimally, with regular updates and improvements as needed.
              </p>
            </StepContent>
          </ProcessStep>
        </ProcessSteps>
      </ProcessSection>
      
      <CTASection>
        <SectionTitle
          title="Ready to Leverage Blockchain Technology?"
          subtitle="Let's discuss how our blockchain development services can help your business innovate and grow."
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

export default BlockchainDevelopment;
