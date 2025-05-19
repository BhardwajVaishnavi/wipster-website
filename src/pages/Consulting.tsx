import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FaArrowRight, 
  FaLightbulb, 
  FaChartLine, 
  FaRocket, 
  FaShieldAlt, 
  FaUsers, 
  FaClipboardCheck,
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

const IndustriesSection = styled.div`
  margin-bottom: ${({ theme }) => theme.space[16]};
`;

const IndustriesGrid = styled.div`
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

const IndustryCard = styled(motion.div)`
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

const industryVariants = {
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

const Consulting: React.FC = () => {
  return (
    <>
      <Hero
        useVideo={false}
      />
      
      <Section>
        <ServiceContainer>
          <SectionTitle
            title="IT Consulting Services"
            subtitle="Strategic technology guidance to drive business growth and innovation."
          />
          
          <ServiceIntro>
            <p>
              At Wipster Technologies, we provide expert IT consulting services to help businesses leverage technology for growth, efficiency, and competitive advantage. Our team of experienced consultants combines deep technical knowledge with business acumen to deliver strategic guidance tailored to your specific needs and goals.
            </p>
            <p>
              Whether you're looking to optimize your existing IT infrastructure, implement new technologies, or develop a comprehensive digital transformation strategy, we work closely with you to understand your challenges and opportunities, and develop solutions that deliver measurable results.
            </p>
          </ServiceIntro>
          
          <SectionTitle
            title="Our IT Consulting Services"
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
                <img src={getUnsplashImage(unsplashImages.services.cloud)} alt="IT Strategy" />
              </div>
              <div className="card-content">
                <div className="card-icon">
                  <FaLightbulb />
                </div>
                <h3>IT Strategy & Planning</h3>
                <p>
                  Develop a comprehensive IT strategy aligned with your business goals, including technology roadmaps and investment planning.
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
                <img src={getUnsplashImage(unsplashImages.services.cloud)} alt="Digital Transformation" />
              </div>
              <div className="card-content">
                <div className="card-icon">
                  <FaRocket />
                </div>
                <h3>Digital Transformation</h3>
                <p>
                  Guide your organization through digital transformation initiatives to improve efficiency, enhance customer experience, and drive innovation.
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
                <img src={getUnsplashImage(unsplashImages.services.cloud)} alt="Technology Assessment" />
              </div>
              <div className="card-content">
                <div className="card-icon">
                  <FaClipboardCheck />
                </div>
                <h3>Technology Assessment</h3>
                <p>
                  Evaluate your current IT infrastructure, applications, and processes to identify opportunities for improvement and optimization.
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
                <img src={getUnsplashImage(unsplashImages.services.cloud)} alt="IT Governance" />
              </div>
              <div className="card-content">
                <div className="card-icon">
                  <FaShieldAlt />
                </div>
                <h3>IT Governance & Compliance</h3>
                <p>
                  Establish effective IT governance frameworks and ensure compliance with relevant regulations and industry standards.
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
                <img src={getUnsplashImage(unsplashImages.services.cloud)} alt="Process Optimization" />
              </div>
              <div className="card-content">
                <div className="card-icon">
                  <FaChartLine />
                </div>
                <h3>Process Optimization</h3>
                <p>
                  Streamline and automate business processes to improve efficiency, reduce costs, and enhance productivity.
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
                <img src={getUnsplashImage(unsplashImages.services.cloud)} alt="IT Staff Augmentation" />
              </div>
              <div className="card-content">
                <div className="card-icon">
                  <FaUsers />
                </div>
                <h3>IT Staff Augmentation</h3>
                <p>
                  Supplement your team with skilled IT professionals to address specific project needs or fill capability gaps.
                </p>
              </div>
            </ServiceTypeCard>
          </ServiceTypesGrid>
          
          <IndustriesSection>
            <SectionTitle
              title="Industries We Serve"
              subtitle="Our IT consulting expertise spans across various industries."
              size="medium"
            />
            
            <IndustriesGrid>
              <IndustryCard
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={0}
                variants={industryVariants}
              >
                <img src="/images/healthcare.png" alt="Healthcare" />
                <h3>Healthcare</h3>
                <p>Improving patient care through technology</p>
              </IndustryCard>
              
              <IndustryCard
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={1}
                variants={industryVariants}
              >
                <img src="/images/Finance.png" alt="Finance" />
                <h3>Finance</h3>
                <p>Secure and efficient financial systems</p>
              </IndustryCard>
              
              <IndustryCard
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={2}
                variants={industryVariants}
              >
                <img src="/images/Retail.png" alt="Retail" />
                <h3>Retail</h3>
                <p>Enhancing customer experience</p>
              </IndustryCard>
              
              <IndustryCard
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={3}
                variants={industryVariants}
              >
                <img src="/images/Manufacturing.png" alt="Manufacturing" />
                <h3>Manufacturing</h3>
                <p>Optimizing production processes</p>
              </IndustryCard>
              
              <IndustryCard
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={4}
                variants={industryVariants}
              >
                <img src="/images/Education.png" alt="Education" />
                <h3>Education</h3>
                <p>Transforming learning experiences</p>
              </IndustryCard>
              
              <IndustryCard
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={5}
                variants={industryVariants}
              >
                <img src="/images/Government.png" alt="Government" />
                <h3>Government</h3>
                <p>Modernizing public services</p>
              </IndustryCard>
              
              <IndustryCard
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={6}
                variants={industryVariants}
              >
                <img src="/images/industries/logistics.svg" alt="Logistics" />
                <h3>Logistics</h3>
                <p>Streamlining supply chain operations</p>
              </IndustryCard>
              
              <IndustryCard
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={7}
                variants={industryVariants}
              >
                <img src="/images/Energy.png" alt="Energy" />
                <h3>Energy</h3>
                <p>Innovative solutions for energy sector</p>
              </IndustryCard>
            </IndustriesGrid>
          </IndustriesSection>
          
          <BenefitsSection>
            <SectionTitle
              title="Benefits of Our IT Consulting Services"
              subtitle="Why choose Wipster Technologies for your IT consulting needs."
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
                  <h3>Strategic Alignment</h3>
                  <p>
                    Ensure your IT initiatives are aligned with your business goals and deliver measurable value to your organization.
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
                  <h3>Cost Optimization</h3>
                  <p>
                    Identify opportunities to reduce IT costs while maintaining or improving service levels and capabilities.
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
                  <h3>Risk Mitigation</h3>
                  <p>
                    Identify and address potential risks in your IT environment, including security vulnerabilities and compliance issues.
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
                  <h3>Innovation Enablement</h3>
                  <p>
                    Leverage emerging technologies and best practices to drive innovation and create competitive advantage.
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
                  <h3>Objective Perspective</h3>
                  <p>
                    Gain valuable insights from experienced consultants who bring an external, unbiased perspective to your challenges.
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
                  <h3>Knowledge Transfer</h3>
                  <p>
                    Build internal capabilities through knowledge sharing and training, enabling your team to maintain and enhance solutions.
                  </p>
                </div>
              </BenefitItem>
            </BenefitsGrid>
          </BenefitsSection>
        </ServiceContainer>
      </Section>
      
      <ProcessSection>
        <SectionTitle
          title="Our IT Consulting Process"
          subtitle="A structured approach to delivering value through IT consulting."
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
              <h3>Discovery & Assessment</h3>
              <p>
                We begin by understanding your business objectives, challenges, and current IT environment. This involves stakeholder interviews, documentation review, and technical assessments to establish a clear baseline and identify key areas for improvement.
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
              <h3>Analysis & Strategy Development</h3>
              <p>
                Based on our findings, we analyze your needs and develop a tailored strategy that addresses your specific challenges and aligns with your business goals. This includes prioritizing initiatives, defining success metrics, and creating a roadmap for implementation.
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
              <h3>Solution Design</h3>
              <p>
                We design detailed solutions for the prioritized initiatives, including technology selection, architecture design, process improvements, and organizational changes. Each solution is tailored to your specific requirements and constraints.
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
              <h3>Implementation Planning</h3>
              <p>
                We develop a detailed implementation plan that outlines the steps, resources, timeline, and dependencies for executing the recommended solutions. This includes risk management strategies and change management considerations.
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
              <h3>Implementation Support</h3>
              <p>
                We provide guidance and support during the implementation phase, whether you're executing the plan with your internal team or with our implementation services. This ensures that the solutions are implemented effectively and according to plan.
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
              <h3>Evaluation & Optimization</h3>
              <p>
                After implementation, we evaluate the results against the defined success metrics and identify opportunities for further optimization. This continuous improvement approach ensures that you achieve maximum value from your IT investments.
              </p>
            </StepContent>
          </ProcessStep>
        </ProcessSteps>
      </ProcessSection>
      
      <CTASection>
        <SectionTitle
          title="Ready to Transform Your IT Strategy?"
          subtitle="Let's discuss how our IT consulting services can help your business achieve its goals."
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

export default Consulting;
