import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FaArrowRight, 
  FaCode, 
  FaServer, 
  FaCloudUploadAlt, 
  FaChartLine, 
  FaShieldAlt, 
  FaSyncAlt,
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

const DevOps: React.FC = () => {
  return (
    <>
      <Hero
        useVideo={false}
      />
      
      <Section>
        <ServiceContainer>
          <SectionTitle
            title="DevOps Services"
            subtitle="Streamline your development and operations with our comprehensive DevOps solutions."
          />
          
          <ServiceIntro>
            <p>
              At Wipster Technologies, we help organizations bridge the gap between development and operations through our comprehensive DevOps services. By implementing DevOps practices, we enable faster, more reliable software delivery while maintaining high quality and security standards.
            </p>
            <p>
              Our DevOps approach focuses on automation, collaboration, and continuous improvement to help your team deliver value to customers more efficiently. Whether you're looking to implement CI/CD pipelines, containerize your applications, or adopt infrastructure as code, our experienced DevOps engineers can help you achieve your goals.
            </p>
          </ServiceIntro>
          
          <SectionTitle
            title="Our DevOps Services"
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
                <img src={getUnsplashImage(unsplashImages.services.cloud)} alt="CI/CD Implementation" />
              </div>
              <div className="card-content">
                <div className="card-icon">
                  <FaCode />
                </div>
                <h3>CI/CD Implementation</h3>
                <p>
                  Design and implement continuous integration and continuous delivery pipelines to automate your software delivery process.
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
                <img src={getUnsplashImage(unsplashImages.services.cloud)} alt="Infrastructure as Code" />
              </div>
              <div className="card-content">
                <div className="card-icon">
                  <FaServer />
                </div>
                <h3>Infrastructure as Code</h3>
                <p>
                  Automate infrastructure provisioning and management using tools like Terraform, CloudFormation, and Ansible.
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
                <img src={getUnsplashImage(unsplashImages.services.cloud)} alt="Containerization" />
              </div>
              <div className="card-content">
                <div className="card-icon">
                  <FaCloudUploadAlt />
                </div>
                <h3>Containerization & Orchestration</h3>
                <p>
                  Containerize your applications using Docker and manage them at scale with Kubernetes for improved portability and scalability.
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
                <img src={getUnsplashImage(unsplashImages.services.cloud)} alt="Monitoring & Logging" />
              </div>
              <div className="card-content">
                <div className="card-icon">
                  <FaChartLine />
                </div>
                <h3>Monitoring & Logging</h3>
                <p>
                  Implement comprehensive monitoring and logging solutions to gain visibility into your applications and infrastructure.
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
                <img src={getUnsplashImage(unsplashImages.services.cloud)} alt="DevSecOps" />
              </div>
              <div className="card-content">
                <div className="card-icon">
                  <FaShieldAlt />
                </div>
                <h3>DevSecOps</h3>
                <p>
                  Integrate security practices into your DevOps processes to ensure your applications and infrastructure are secure by design.
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
                <img src={getUnsplashImage(unsplashImages.services.cloud)} alt="DevOps Consulting" />
              </div>
              <div className="card-content">
                <div className="card-icon">
                  <FaSyncAlt />
                </div>
                <h3>DevOps Consulting & Training</h3>
                <p>
                  Get expert guidance on DevOps best practices and training for your team to build a DevOps culture within your organization.
                </p>
              </div>
            </ServiceTypeCard>
          </ServiceTypesGrid>
          
          <TechnologiesSection>
            <SectionTitle
              title="DevOps Tools & Technologies"
              subtitle="We leverage industry-leading tools and technologies to implement effective DevOps solutions."
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
                <img src="/images/Jenkins.png" alt="Jenkins" />
                <h3>Jenkins</h3>
                <p>For continuous integration and delivery</p>
              </TechnologyCard>
              
              <TechnologyCard
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={1}
                variants={techVariants}
              >
                <img src="/images/GitLab CICD.png" alt="GitLab CI/CD" />
                <h3>GitLab CI/CD</h3>
                <p>For integrated CI/CD pipelines</p>
              </TechnologyCard>
              
              <TechnologyCard
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={2}
                variants={techVariants}
              >
                <img src="/images/Docker.png" alt="Docker" />
                <h3>Docker</h3>
                <p>For containerization</p>
              </TechnologyCard>
              
              <TechnologyCard
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={3}
                variants={techVariants}
              >
                <img src="/images/Kubernetes.png" alt="Kubernetes" />
                <h3>Kubernetes</h3>
                <p>For container orchestration</p>
              </TechnologyCard>
              
              <TechnologyCard
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={4}
                variants={techVariants}
              >
                <img src="/images/Terraform.png" alt="Terraform" />
                <h3>Terraform</h3>
                <p>For infrastructure as code</p>
              </TechnologyCard>
              
              <TechnologyCard
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={5}
                variants={techVariants}
              >
                <img src="/images/Ansible.png" alt="Ansible" />
                <h3>Ansible</h3>
                <p>For configuration management</p>
              </TechnologyCard>
              
              <TechnologyCard
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={6}
                variants={techVariants}
              >
                <img src="/images/Prometheus.png" alt="Prometheus" />
                <h3>Prometheus</h3>
                <p>For monitoring and alerting</p>
              </TechnologyCard>
              
              <TechnologyCard
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={7}
                variants={techVariants}
              >
                <img src="/images/Grafana.png" alt="Grafana" />
                <h3>Grafana</h3>
                <p>For metrics visualization</p>
              </TechnologyCard>
            </TechnologiesGrid>
          </TechnologiesSection>
          
          <BenefitsSection>
            <SectionTitle
              title="Benefits of Our DevOps Services"
              subtitle="Why choose Wipster Technologies for your DevOps transformation."
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
                  <h3>Faster Time to Market</h3>
                  <p>
                    Accelerate your software delivery process with automated CI/CD pipelines, enabling more frequent and reliable releases.
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
                  <h3>Improved Quality & Reliability</h3>
                  <p>
                    Implement automated testing and deployment processes to catch issues early and ensure consistent, reliable releases.
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
                  <h3>Enhanced Collaboration</h3>
                  <p>
                    Break down silos between development, operations, and security teams to foster better communication and collaboration.
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
                  <h3>Increased Efficiency</h3>
                  <p>
                    Automate repetitive tasks and streamline processes to reduce manual effort and allow your team to focus on high-value work.
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
                  <h3>Scalability & Flexibility</h3>
                  <p>
                    Build infrastructure and deployment processes that can scale with your business and adapt to changing requirements.
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
                  <h3>Enhanced Security</h3>
                  <p>
                    Integrate security into your development and operations processes to identify and address vulnerabilities early.
                  </p>
                </div>
              </BenefitItem>
            </BenefitsGrid>
          </BenefitsSection>
        </ServiceContainer>
      </Section>
      
      <ProcessSection>
        <SectionTitle
          title="Our DevOps Implementation Process"
          subtitle="A structured approach to DevOps transformation."
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
              <h3>Assessment & Strategy</h3>
              <p>
                We begin by evaluating your current development and operations processes, identifying pain points, and understanding your business goals. Based on this assessment, we develop a tailored DevOps strategy and roadmap for implementation.
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
              <h3>Tool Selection & Architecture</h3>
              <p>
                We help you select the right tools and technologies for your specific needs and design a DevOps architecture that aligns with your business requirements. This includes CI/CD pipelines, infrastructure as code, containerization, and monitoring solutions.
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
              <h3>Implementation & Automation</h3>
              <p>
                We implement the selected tools and automate key processes, including build, test, deployment, and infrastructure provisioning. This phase focuses on creating repeatable, reliable processes that reduce manual effort and minimize errors.
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
              <h3>Testing & Validation</h3>
              <p>
                We thoroughly test the implemented DevOps processes and tools to ensure they meet your requirements and function as expected. This includes validating CI/CD pipelines, infrastructure automation, and monitoring systems.
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
              <h3>Knowledge Transfer & Training</h3>
              <p>
                We provide comprehensive training and documentation to ensure your team has the knowledge and skills needed to effectively use and maintain the DevOps tools and processes we've implemented.
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
              <h3>Continuous Improvement</h3>
              <p>
                We help you establish metrics and feedback loops to continuously monitor and improve your DevOps processes. This ongoing optimization ensures your DevOps practices evolve with your business needs and technological advancements.
              </p>
            </StepContent>
          </ProcessStep>
        </ProcessSteps>
      </ProcessSection>
      
      <CTASection>
        <SectionTitle
          title="Ready to Transform Your Development Process?"
          subtitle="Let's discuss how our DevOps services can help your organization deliver software faster and more reliably."
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

export default DevOps;
