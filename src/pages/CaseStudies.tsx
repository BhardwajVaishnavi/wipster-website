import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaQuoteLeft } from 'react-icons/fa';
import Hero from '../components/Hero';
import Section from '../components/Section';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';
import { getUnsplashImage, unsplashImages } from '../utils/unsplashImages';

const CaseStudiesContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const FeaturedCaseStudy = styled.div`
  margin-bottom: ${({ theme }) => theme.space[16]};
  background-color: #0000002b;
  border-radius: ${({ theme }) => theme.radii.lg};
  box-shadow: ${({ theme }) => theme.shadows.lg};
  overflow: hidden;
`;

const FeaturedContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: 1fr;
  }
`;

const FeaturedImage = styled.div`
  height: 100%;
  min-height: 400px;
  padding: 40px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    min-height: 300px;
  }
`;

const FeaturedDetails = styled.div`
  padding: ${({ theme }) => theme.space[8]};
  display: flex;
  flex-direction: column;
  justify-content: center;

  .logo {
    width: 120px;
    height: auto;
    margin-bottom: ${({ theme }) => theme.space[4]};
  }

  h2 {
    font-size: ${({ theme }) => theme.fontSizes['2xl']};
    color: ${({ theme }) => theme.colors.text};
    margin-bottom: ${({ theme }) => theme.space[4]};
  }

  .category {
    display: inline-block;
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.light};
    padding: ${({ theme }) => theme.space[1]} ${({ theme }) => theme.space[3]};
    border-radius: ${({ theme }) => theme.radii.md};
    font-size: ${({ theme }) => theme.fontSizes.sm};
    margin-bottom: ${({ theme }) => theme.space[4]};
  }

  p {
    color: ${({ theme }) => theme.colors.textLight};
    margin-bottom: ${({ theme }) => theme.space[6]};
    line-height: ${({ theme }) => theme.lineHeights.relaxed};
  }

  .results {
    margin-bottom: ${({ theme }) => theme.space[6]};

    h3 {
      font-size: ${({ theme }) => theme.fontSizes.lg};
      color: ${({ theme }) => theme.colors.text};
      margin-bottom: ${({ theme }) => theme.space[2]};
    }

    ul {
      padding-left: ${({ theme }) => theme.space[5]};

      li {
        margin-bottom: ${({ theme }) => theme.space[2]};
        color: ${({ theme }) => theme.colors.textLight};
      }
    }
  }
`;

const CaseStudyGrid = styled.div`
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

const CaseStudyCard = styled(motion.div)`
  background-color: #0000002b;
  border-radius: ${({ theme }) => theme.radii.lg};
  box-shadow: ${({ theme }) => theme.shadows.md};
  overflow: hidden;
  height: 100%;
  display: flex;
  flex-direction: column;

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
    flex-grow: 1;
    display: flex;
    flex-direction: column;

    .category {
      display: inline-block;
      background-color: ${({ theme }) => theme.colors.primary};
      color: ${({ theme }) => theme.colors.light};
      padding: ${({ theme }) => theme.space[1]} ${({ theme }) => theme.space[3]};
      border-radius: ${({ theme }) => theme.radii.md};
      font-size: ${({ theme }) => theme.fontSizes.sm};
      margin-bottom: ${({ theme }) => theme.space[3]};
    }

    h3 {
      font-size: ${({ theme }) => theme.fontSizes.xl};
      color: ${({ theme }) => theme.colors.text};
      margin-bottom: ${({ theme }) => theme.space[3]};
    }

    p {
      color: ${({ theme }) => theme.colors.textLight};
      margin-bottom: ${({ theme }) => theme.space[4]};
      line-height: ${({ theme }) => theme.lineHeights.relaxed};
      flex-grow: 1;
    }

    .read-more {
      display: flex;
      align-items: center;
      color: ${({ theme }) => theme.colors.primary};
      font-weight: ${({ theme }) => theme.fontWeights.medium};

      svg {
        margin-left: ${({ theme }) => theme.space[2]};
        transition: transform 0.3s ease;
      }

      &:hover svg {
        transform: translateX(4px);
      }
    }
  }
`;

const TestimonialSection = styled(Section)`
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.accent});
  color: ${({ theme }) => theme.colors.light};
  text-align: center;
  padding: ${({ theme }) => theme.space[16]} 0;
`;

const TestimonialContent = styled.div`
  max-width: 800px;
  margin: 0 auto;

  .quote-icon {
    font-size: 3rem;
    color: rgba(255, 255, 255, 0.2);
    margin-bottom: ${({ theme }) => theme.space[6]};
  }

  .quote {
    font-size: ${({ theme }) => theme.fontSizes.xl};
    line-height: ${({ theme }) => theme.lineHeights.relaxed};
    margin-bottom: ${({ theme }) => theme.space[6]};
    font-style: italic;
  }

  .author {
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    margin-bottom: ${({ theme }) => theme.space[1]};
  }

  .position {
    opacity: 0.8;
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

const caseStudies = [
  {
    id: 1,
    title: 'Healthcare Management System',
    category: 'Web Development',
    image: unsplashImages.projects.healthcare,
    description: 'Developed a comprehensive healthcare management system for a leading hospital chain, improving patient care and operational efficiency.',
    results: [
      'Reduced patient wait times by 30%',
      'Improved staff productivity by 25%',
      'Enhanced data security and compliance'
    ]
  },
  {
    id: 2,
    title: 'E-commerce Platform Redesign',
    category: 'UI/UX Design',
    image: unsplashImages.projects.retail,
    description: 'Redesigned the user interface and experience for a major e-commerce platform, resulting in improved user engagement and increased sales.',
    results: [
      'Increased conversion rate by 40%',
      'Reduced cart abandonment by 25%',
      'Improved customer satisfaction scores'
    ]
  },
  {
    id: 3,
    title: 'Banking Mobile Application',
    category: 'Mobile Development',
    image: unsplashImages.projects.banking,
    description: 'Created a secure and user-friendly mobile banking application for a regional bank, enabling customers to manage their finances on the go.',
    results: [
      'Achieved 200,000+ downloads in first quarter',
      'Reduced branch visits by 35%',
      'Increased customer engagement by 50%'
    ]
  },
  {
    id: 4,
    title: 'Supply Chain Management System',
    category: 'Enterprise Solutions',
    image: unsplashImages.projects.logistics,
    description: 'Implemented a comprehensive supply chain management system for a manufacturing company, optimizing inventory and logistics operations.',
    results: [
      'Reduced inventory costs by 20%',
      'Improved delivery times by 30%',
      'Enhanced visibility across the supply chain'
    ]
  },
  {
    id: 5,
    title: 'Educational Learning Platform',
    category: 'Web Development',
    image: unsplashImages.projects.education,
    description: 'Developed an interactive online learning platform for a leading educational institution, enabling remote learning and student engagement.',
    results: [
      'Supported 50,000+ concurrent users',
      'Increased student engagement by 45%',
      'Reduced administrative workload by 30%'
    ]
  },
  {
    id: 6,
    title: 'Travel Booking System',
    category: 'Cloud Solutions',
    image: unsplashImages.projects.travel,
    description: 'Built a scalable cloud-based travel booking system for a tourism company, handling high volumes of transactions during peak seasons.',
    results: [
      'Handled 300% increase in peak traffic',
      'Reduced booking processing time by 60%',
      'Achieved 99.99% uptime'
    ]
  }
];

const CaseStudies: React.FC = () => {
  return (
    <>
      <Hero
        useVideo={false}
      />

      <Section>
        <CaseStudiesContainer>
          <SectionTitle
            title="Case Studies"
            subtitle="Explore how we've helped businesses solve complex challenges and achieve their goals."
          />

          <SectionTitle
            title="Featured Case Study"
            size="medium"
            align="left"
          />

          <FeaturedCaseStudy>
            <FeaturedContent>
              <FeaturedImage>
                <img src="/images/clients/Odisha_Police_Logo.webp" alt="ERSS 112 Odisha Police" />
              </FeaturedImage>
              <FeaturedDetails>
                <img src="/images/clients/Odisha_Police_Logo.webp" alt="Odisha Police Logo" className="logo" />
                <span className="category">Marketing</span>
                <h2>ERSS 112 Odisha Police</h2>
                <p>
                  We partnered with Odisha Police to develop and implement a comprehensive marketing strategy for their Emergency Response Support System (ERSS) 112. The project aimed to increase public awareness and adoption of this critical emergency service across the state of Odisha.
                </p>
                <div className="results">
                  <h3>Results:</h3>
                  <ul>
                    <li>Increased public awareness of ERSS 112 by 75% across urban and rural areas</li>
                    <li>Achieved 300,000+ app downloads within the first three months</li>
                    <li>Reduced average emergency response time by 40%</li>
                    <li>Implemented a multi-channel campaign spanning digital, print, and community outreach</li>
                  </ul>
                </div>
                <Button
                  as={Link}
                  to="/portfolio/case-studies/1"
                  variant="primary"
                  icon={<FaArrowRight />}
                  iconPosition="right"
                >
                  Read Full Case Study
                </Button>
              </FeaturedDetails>
            </FeaturedContent>
          </FeaturedCaseStudy>

          <SectionTitle
            title="More Success Stories"
            size="medium"
            align="left"
          />

          <CaseStudyGrid>
            {caseStudies.map((study, index) => (
              <CaseStudyCard
                key={study.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={index}
                variants={cardVariants}
              >
                <div className="card-image">
                  <img src={getUnsplashImage(study.image)} alt={study.title} />
                </div>
                <div className="card-content">
                  <span className="category">{study.category}</span>
                  <h3>{study.title}</h3>
                  <p>{study.description}</p>
                  
                </div>
              </CaseStudyCard>
            ))}
          </CaseStudyGrid>
        </CaseStudiesContainer>
      </Section>

      <TestimonialSection>
        <TestimonialContent>
          <FaQuoteLeft className="quote-icon" />
          <div className="quote">
            "Wipster Technologies transformed our business with their innovative solutions. Their team's expertise and dedication to our success made all the difference. We've seen remarkable improvements in efficiency and customer satisfaction since implementing their solutions."
          </div>
          <div className="author">Rajesh Kumar</div>
          <div className="position">CTO, Global Healthcare Systems</div>
        </TestimonialContent>
      </TestimonialSection>

      <CTASection>
        <SectionTitle
          title="Ready to Achieve Similar Results?"
          subtitle="Let's discuss how we can help your business overcome challenges and reach its goals."
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

export default CaseStudies;
