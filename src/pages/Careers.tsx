import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaBriefcase, FaGraduationCap, FaUsers, FaLaptopCode, FaChartLine, FaHandshake } from 'react-icons/fa';
import Hero from '../components/Hero';
import Section from '../components/Section';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';
import { getUnsplashImage, unsplashImages } from '../utils/unsplashImages';

const CareersContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const CareersIntro = styled.div`
  max-width: 800px;
  margin: 0 auto ${({ theme }) => theme.space[12]};
  text-align: center;
  
  p {
    font-size: ${({ theme }) => theme.fontSizes.lg};
    color: ${({ theme }) => theme.colors.text};
    line-height: ${({ theme }) => theme.lineHeights.relaxed};
  }
`;

const JobListingsSection = styled.div`
  margin-bottom: ${({ theme }) => theme.space[16]};
`;

const JobCategoryTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.space[6]};
  padding-bottom: ${({ theme }) => theme.space[2]};
  border-bottom: 2px solid ${({ theme }) => theme.colors.primary};
`;

const JobListing = styled(motion.div)`
  background-color: #FFFFFF;
  border-radius: ${({ theme }) => theme.radii.lg};
  box-shadow: ${({ theme }) => theme.shadows.md};
  padding: ${({ theme }) => theme.space[6]};
  margin-bottom: ${({ theme }) => theme.space[6]};
  
  h4 {
    font-size: ${({ theme }) => theme.fontSizes.lg};
    color: #333333;
    margin-bottom: ${({ theme }) => theme.space[2]};
  }
  
  .job-meta {
    display: flex;
    gap: ${({ theme }) => theme.space[4]};
    margin-bottom: ${({ theme }) => theme.space[4]};
    color: ${({ theme }) => theme.colors.gray};
    font-size: ${({ theme }) => theme.fontSizes.sm};
    
    span {
      display: flex;
      align-items: center;
      
      svg {
        margin-right: ${({ theme }) => theme.space[2]};
      }
    }
  }
  
  p {
    color: #666666;
    margin-bottom: ${({ theme }) => theme.space[4]};
    line-height: ${({ theme }) => theme.lineHeights.relaxed};
  }
  
  .job-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    .tags {
      display: flex;
      gap: ${({ theme }) => theme.space[2]};
    }
    
    .tag {
      background-color: ${({ theme }) => `rgba(138, 79, 255, 0.1)`};
      color: ${({ theme }) => theme.colors.primary};
      padding: ${({ theme }) => `${theme.space[1]} ${theme.space[3]}`};
      border-radius: ${({ theme }) => theme.radii.full};
      font-size: ${({ theme }) => theme.fontSizes.xs};
      font-weight: ${({ theme }) => theme.fontWeights.medium};
    }
  }
`;

const BenefitsSection = styled(Section)`
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.accent});
`;

const BenefitsGrid = styled.div`
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

const BenefitCard = styled(motion.div)`
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

const ProcessSection = styled.div`
  margin-bottom: ${({ theme }) => theme.space[16]};
`;

const ProcessSteps = styled.div`
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

const ProcessStep = styled(motion.div)`
  text-align: center;
  
  .step-number {
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
    margin: 0 auto ${({ theme }) => theme.space[4]};
  }
  
  h3 {
    color: ${({ theme }) => theme.colors.primary};
    margin-bottom: ${({ theme }) => theme.space[3]};
  }
  
  p {
    color: ${({ theme }) => theme.colors.text};
    line-height: ${({ theme }) => theme.lineHeights.relaxed};
  }
`;

const CTASection = styled(Section)`
  text-align: center;
`;

const jobListingVariants = {
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

const benefitCardVariants = {
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

const processStepVariants = {
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

const Careers: React.FC = () => {
  return (
    <>
      <Hero
        useVideo={false}
      />
      
      <Section>
        <CareersContainer>
          <SectionTitle
            title="Join Our Team"
            subtitle="Explore career opportunities at Wipster Technologies."
          />
          
          <CareersIntro>
            <p>
              At Wipster Technologies, we're always looking for talented individuals who share our passion for technology and innovation. Join our team and be part of a dynamic, collaborative environment where you can grow professionally while working on exciting projects that make a real impact.
            </p>
          </CareersIntro>
          
          <JobListingsSection>
            <JobCategoryTitle>Engineering & Development</JobCategoryTitle>
            
            <JobListing
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0}
              variants={jobListingVariants}
            >
              <h4>Senior Full Stack Developer</h4>
              <div className="job-meta">
                <span><FaBriefcase /> Full-time</span>
                <span><FaUsers /> Engineering</span>
                <span><FaLaptopCode /> Remote / Hybrid</span>
              </div>
              <p>
                We're looking for an experienced Full Stack Developer to join our engineering team. In this role, you'll work on challenging projects, collaborate with cross-functional teams, and contribute to the development of innovative solutions for our clients.
              </p>
              <div className="job-footer">
                <div className="tags">
                  <span className="tag">React</span>
                  <span className="tag">Node.js</span>
                  <span className="tag">TypeScript</span>
                  <span className="tag">AWS</span>
                </div>
                <Button
                  as={Link}
                  to="/careers/senior-full-stack-developer"
                  size="small"
                  icon={<FaArrowRight />}
                  iconPosition="right"
                >
                  View Details
                </Button>
              </div>
            </JobListing>
            
            <JobListing
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={1}
              variants={jobListingVariants}
            >
              <h4>DevOps Engineer</h4>
              <div className="job-meta">
                <span><FaBriefcase /> Full-time</span>
                <span><FaUsers /> Engineering</span>
                <span><FaLaptopCode /> Remote / Hybrid</span>
              </div>
              <p>
                We're seeking a skilled DevOps Engineer to help us build and maintain our infrastructure, automate deployment processes, and ensure the reliability and scalability of our systems.
              </p>
              <div className="job-footer">
                <div className="tags">
                  <span className="tag">Docker</span>
                  <span className="tag">Kubernetes</span>
                  <span className="tag">CI/CD</span>
                  <span className="tag">Cloud</span>
                </div>
                <Button
                  as={Link}
                  to="/careers/devops-engineer"
                  size="small"
                  icon={<FaArrowRight />}
                  iconPosition="right"
                >
                  View Details
                </Button>
              </div>
            </JobListing>
            
            <JobCategoryTitle>Design</JobCategoryTitle>
            
            <JobListing
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={2}
              variants={jobListingVariants}
            >
              <h4>UI/UX Designer</h4>
              <div className="job-meta">
                <span><FaBriefcase /> Full-time</span>
                <span><FaUsers /> Design</span>
                <span><FaLaptopCode /> Remote / Hybrid</span>
              </div>
              <p>
                We're looking for a creative UI/UX Designer to join our team. In this role, you'll create intuitive, user-centered designs for web and mobile applications, collaborate with developers and stakeholders, and contribute to our design system.
              </p>
              <div className="job-footer">
                <div className="tags">
                  <span className="tag">Figma</span>
                  <span className="tag">User Research</span>
                  <span className="tag">Prototyping</span>
                  <span className="tag">Design Systems</span>
                </div>
                <Button
                  as={Link}
                  to="/careers/ui-ux-designer"
                  size="small"
                  icon={<FaArrowRight />}
                  iconPosition="right"
                >
                  View Details
                </Button>
              </div>
            </JobListing>
            
            <JobCategoryTitle>Business & Operations</JobCategoryTitle>
            
            <JobListing
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={3}
              variants={jobListingVariants}
            >
              <h4>Project Manager</h4>
              <div className="job-meta">
                <span><FaBriefcase /> Full-time</span>
                <span><FaUsers /> Operations</span>
                <span><FaLaptopCode /> Remote / Hybrid</span>
              </div>
              <p>
                We're seeking an experienced Project Manager to oversee the planning, execution, and delivery of our client projects. In this role, you'll work closely with cross-functional teams to ensure projects are completed on time, within budget, and to the highest quality standards.
              </p>
              <div className="job-footer">
                <div className="tags">
                  <span className="tag">Agile</span>
                  <span className="tag">Scrum</span>
                  <span className="tag">Client Management</span>
                  <span className="tag">Leadership</span>
                </div>
                <Button
                  as={Link}
                  to="/careers/project-manager"
                  size="small"
                  icon={<FaArrowRight />}
                  iconPosition="right"
                >
                  View Details
                </Button>
              </div>
            </JobListing>
          </JobListingsSection>
          
          <ProcessSection>
            <SectionTitle
              title="Our Hiring Process"
              subtitle="What to expect when you apply for a position at Wipster Technologies."
              size="medium"
            />
            
            <ProcessSteps>
              <ProcessStep
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={0}
                variants={processStepVariants}
              >
                <div className="step-number">1</div>
                <h3>Application Review</h3>
                <p>Our team reviews your application and resume to assess your qualifications and experience.</p>
              </ProcessStep>
              
              <ProcessStep
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={1}
                variants={processStepVariants}
              >
                <div className="step-number">2</div>
                <h3>Initial Interview</h3>
                <p>A conversation with our HR team to discuss your background, skills, and career aspirations.</p>
              </ProcessStep>
              
              <ProcessStep
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={2}
                variants={processStepVariants}
              >
                <div className="step-number">3</div>
                <h3>Technical Assessment</h3>
                <p>Depending on the role, you may be asked to complete a technical challenge or skills assessment.</p>
              </ProcessStep>
              
              <ProcessStep
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={3}
                variants={processStepVariants}
              >
                <div className="step-number">4</div>
                <h3>Final Interview</h3>
                <p>Meet with the team you'll be working with to discuss the role in detail and ensure a good fit.</p>
              </ProcessStep>
            </ProcessSteps>
          </ProcessSection>
        </CareersContainer>
      </Section>
      
      <BenefitsSection>
        <SectionTitle
          title="Why Work With Us"
          subtitle="Benefits and perks of joining the Wipster Technologies team."
          light
        />
        
        <BenefitsGrid>
          <BenefitCard
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
            variants={benefitCardVariants}
          >
            <div className="icon">
              <FaLaptopCode />
            </div>
            <h3>Flexible Work Environment</h3>
            <p>Remote and hybrid work options with flexible hours to help you maintain a healthy work-life balance.</p>
          </BenefitCard>
          
          <BenefitCard
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
            variants={benefitCardVariants}
          >
            <div className="icon">
              <FaGraduationCap />
            </div>
            <h3>Professional Development</h3>
            <p>Continuous learning opportunities, including conferences, workshops, and education stipends.</p>
          </BenefitCard>
          
          <BenefitCard
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={2}
            variants={benefitCardVariants}
          >
            <div className="icon">
              <FaUsers />
            </div>
            <h3>Collaborative Culture</h3>
            <p>Work with a diverse team of talented professionals in a supportive and inclusive environment.</p>
          </BenefitCard>
          
          <BenefitCard
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={3}
            variants={benefitCardVariants}
          >
            <div className="icon">
              <FaChartLine />
            </div>
            <h3>Career Growth</h3>
            <p>Clear paths for advancement and opportunities to take on new challenges and responsibilities.</p>
          </BenefitCard>
          
          <BenefitCard
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={4}
            variants={benefitCardVariants}
          >
            <div className="icon">
              <FaHandshake />
            </div>
            <h3>Meaningful Work</h3>
            <p>Contribute to projects that make a real impact for clients across various industries.</p>
          </BenefitCard>
          
          <BenefitCard
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={5}
            variants={benefitCardVariants}
          >
            <div className="icon">
              <FaBriefcase />
            </div>
            <h3>Competitive Compensation</h3>
            <p>Attractive salary packages, health benefits, and performance-based bonuses.</p>
          </BenefitCard>
        </BenefitsGrid>
      </BenefitsSection>
      
      <CTASection>
        <SectionTitle
          title="Don't See a Suitable Position?"
          subtitle="We're always interested in connecting with talented individuals. Send us your resume and let's start a conversation."
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
            Contact Us
          </Button>
        </motion.div>
      </CTASection>
    </>
  );
};

export default Careers;
