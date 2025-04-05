import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaCheckCircle, FaQuoteLeft } from 'react-icons/fa';
import Section from '../components/Section';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';
import { projectsData } from '../data/projectsData';
import { Project } from '../types';
import { getUnsplashImage } from '../utils/unsplashImages';

const CaseStudyContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const BreadcrumbNav = styled.div`
  margin-bottom: ${({ theme }) => theme.space[6]};

  a {
    color: ${({ theme }) => theme.colors.textLight};
    transition: color 0.3s ease;

    &:hover {
      color: ${({ theme }) => theme.colors.primary};
    }
  }

  span {
    margin: 0 ${({ theme }) => theme.space[2]};
    color: ${({ theme }) => theme.colors.textLight};
  }
`;

const CaseStudyHeader = styled.div`
  margin-bottom: ${({ theme }) => theme.space[10]};
`;

const HeaderContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.space[8]};
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: 1fr;
  }
`;

const HeaderImage = styled.div`
  border-radius: ${({ theme }) => theme.radii.lg};
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadows.lg};

  img {
    width: 100%;
    height: auto;
    display: block;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    order: -1;
  }
`;

const HeaderInfo = styled.div`
  .category {
    display: inline-block;
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.light};
    padding: ${({ theme }) => theme.space[1]} ${({ theme }) => theme.space[3]};
    border-radius: ${({ theme }) => theme.radii.md};
    font-size: ${({ theme }) => theme.fontSizes.sm};
    margin-bottom: ${({ theme }) => theme.space[4]};
  }

  h1 {
    font-size: ${({ theme }) => theme.fontSizes['3xl']};
    color: ${({ theme }) => theme.colors.text};
    margin-bottom: ${({ theme }) => theme.space[4]};
  }

  .description {
    font-size: ${({ theme }) => theme.fontSizes.lg};
    color: ${({ theme }) => theme.colors.textLight};
    line-height: ${({ theme }) => theme.lineHeights.relaxed};
    margin-bottom: ${({ theme }) => theme.space[6]};
  }

  .technologies {
    display: flex;
    flex-wrap: wrap;
    gap: ${({ theme }) => theme.space[2]};
    margin-bottom: ${({ theme }) => theme.space[6]};

    span {
      background-color: ${({ theme }) => theme.colors.bgLight};
      color: ${({ theme }) => theme.colors.text};
      padding: ${({ theme }) => theme.space[1]} ${({ theme }) => theme.space[3]};
      border-radius: ${({ theme }) => theme.radii.md};
      font-size: ${({ theme }) => theme.fontSizes.sm};
    }
  }
`;

const CaseStudyContent = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: ${({ theme }) => theme.space[8]};
  margin-bottom: ${({ theme }) => theme.space[16]};

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: 1fr;
  }
`;

const MainContent = styled.div`
  h2 {
    font-size: ${({ theme }) => theme.fontSizes['2xl']};
    color: ${({ theme }) => theme.colors.text};
    margin-bottom: ${({ theme }) => theme.space[4]};
    margin-top: ${({ theme }) => theme.space[8]};

    &:first-child {
      margin-top: 0;
    }
  }

  p {
    color: ${({ theme }) => theme.colors.textLight};
    line-height: ${({ theme }) => theme.lineHeights.relaxed};
    margin-bottom: ${({ theme }) => theme.space[4]};
  }

  ul {
    margin-bottom: ${({ theme }) => theme.space[6]};
    padding-left: ${({ theme }) => theme.space[6]};

    li {
      color: ${({ theme }) => theme.colors.textLight};
      margin-bottom: ${({ theme }) => theme.space[2]};
      line-height: ${({ theme }) => theme.lineHeights.relaxed};
    }
  }

  .image-container {
    margin: ${({ theme }) => theme.space[8]} 0;
    border-radius: ${({ theme }) => theme.radii.lg};
    overflow: hidden;

    img {
      width: 100%;
      height: auto;
      display: block;
    }
  }
`;

const Sidebar = styled.div``;

const SidebarSection = styled.div`
  background-color: #FFFFFF;
  border-radius: ${({ theme }) => theme.radii.lg};
  box-shadow: ${({ theme }) => theme.shadows.md};
  padding: ${({ theme }) => theme.space[6]};
  margin-bottom: ${({ theme }) => theme.space[6]};

  h3 {
    font-size: ${({ theme }) => theme.fontSizes.lg};
    color: ${({ theme }) => theme.colors.text};
    margin-bottom: ${({ theme }) => theme.space[4]};
    position: relative;
    padding-bottom: ${({ theme }) => theme.space[2]};

    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 50px;
      height: 3px;
      background-color: ${({ theme }) => theme.colors.primary};
    }
  }
`;

const ResultsList = styled.div`
  .result-item {
    display: flex;
    align-items: flex-start;
    margin-bottom: ${({ theme }) => theme.space[4]};

    .icon {
      color: ${({ theme }) => theme.colors.primary};
      margin-right: ${({ theme }) => theme.space[3]};
      margin-top: ${({ theme }) => theme.space[1]};
    }

    p {
      color: ${({ theme }) => theme.colors.textLight};
      line-height: ${({ theme }) => theme.lineHeights.relaxed};
    }
  }
`;

const ClientInfo = styled.div`
  .logo {
    max-width: 150px;
    margin-bottom: ${({ theme }) => theme.space[4]};
  }

  p {
    color: ${({ theme }) => theme.colors.textLight};
    line-height: ${({ theme }) => theme.lineHeights.relaxed};
    margin-bottom: ${({ theme }) => theme.space[4]};
  }
`;

const TestimonialBox = styled.div`
  position: relative;
  padding: ${({ theme }) => theme.space[6]};
  background-color: ${({ theme }) => theme.colors.bgLight};
  border-radius: ${({ theme }) => theme.radii.md};
  margin-top: ${({ theme }) => theme.space[6]};

  .quote-icon {
    position: absolute;
    top: ${({ theme }) => theme.space[4]};
    left: ${({ theme }) => theme.space[4]};
    color: rgba(0, 0, 0, 0.1);
    font-size: 1.5rem;
  }

  p {
    font-style: italic;
    margin-bottom: ${({ theme }) => theme.space[4]};
  }

  .author {
    font-weight: ${({ theme }) => theme.fontWeights.bold};
  }
`;

const RelatedProjects = styled.div`
  margin-top: ${({ theme }) => theme.space[16]};
`;

const ProjectsGrid = styled.div`
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

const ProjectCard = styled(motion.div)`
  background-color: #FFFFFF;
  border-radius: ${({ theme }) => theme.radii.lg};
  box-shadow: ${({ theme }) => theme.shadows.md};
  overflow: hidden;

  .image {
    height: 200px;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.5s ease;
    }
  }

  &:hover .image img {
    transform: scale(1.05);
  }

  .content {
    padding: ${({ theme }) => theme.space[5]};

    h3 {
      font-size: ${({ theme }) => theme.fontSizes.lg};
      color: ${({ theme }) => theme.colors.text};
      margin-bottom: ${({ theme }) => theme.space[2]};
    }

    p {
      color: ${({ theme }) => theme.colors.textLight};
      font-size: ${({ theme }) => theme.fontSizes.sm};
      margin-bottom: ${({ theme }) => theme.space[4]};
    }

    .read-more {
      color: ${({ theme }) => theme.colors.primary};
      font-weight: ${({ theme }) => theme.fontWeights.medium};
      display: flex;
      align-items: center;

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

// ERSS 112 Odisha Police case study content
const erssContent = {
  challenge: `
    The Emergency Response Support System (ERSS) 112 is a critical service launched by the Odisha Police to provide immediate assistance to citizens in emergency situations. Despite its importance, public awareness and adoption of the service were low, particularly in rural and remote areas of the state.

    Wipster Technologies was tasked with developing and implementing a comprehensive marketing strategy to increase awareness, understanding, and usage of the ERSS 112 service across diverse demographics throughout Odisha.
  `,
  approach: `
    Our approach to promoting ERSS 112 was multi-faceted, focusing on both digital and traditional channels to reach the widest possible audience:

    1. **Research and Strategy Development**: We conducted extensive research to understand the target audience, their communication preferences, and barriers to adoption. This informed our comprehensive marketing strategy.

    2. **Multi-Channel Campaign**: We developed a campaign that utilized digital media (social platforms, online ads), traditional media (TV, radio, print), and community outreach programs to ensure maximum reach.

    3. **Localized Content**: We created content in Odia and other local languages, with messaging tailored to different regions and demographics within the state.

    4. **Mobile App Promotion**: We focused on promoting the ERSS 112 mobile app, highlighting its features, ease of use, and benefits for emergency situations.

    5. **Community Engagement**: We organized awareness workshops in schools, colleges, community centers, and rural areas to demonstrate the service and address questions.

    6. **Partnerships**: We collaborated with local influencers, community leaders, and other government departments to amplify our message.
  `,
  solution: `
    Our solution included several key components:

    **Digital Campaign**:
    - Created engaging social media content across platforms including Facebook, Twitter, Instagram, and YouTube
    - Developed informative videos demonstrating how to use the ERSS 112 service in different emergency scenarios
    - Implemented targeted digital advertising to reach specific demographics
    - Optimized the ERSS 112 app store presence to improve discoverability and downloads

    **Traditional Media**:
    - Produced television and radio advertisements in multiple languages
    - Designed print materials including posters, billboards, and newspaper advertisements
    - Created informational brochures and pamphlets for distribution in public spaces

    **Community Outreach**:
    - Conducted awareness programs in over 200 educational institutions
    - Organized demonstrations in rural communities with limited digital access
    - Trained local volunteers to serve as ERSS 112 ambassadors in their communities

    **Monitoring and Optimization**:
    - Implemented analytics tracking to measure campaign performance
    - Conducted regular surveys to gauge awareness levels and gather feedback
    - Continuously optimized messaging and channel strategy based on performance data
  `,
  results: [
    "Increased public awareness of ERSS 112 by 75% across urban and rural areas within six months",
    "Achieved over 300,000 app downloads within the first three months of the campaign",
    "Reduced average emergency response time by 40% due to increased proper usage of the service",
    "Expanded reach to all 30 districts of Odisha, including remote and tribal areas",
    "Generated over 5 million impressions across digital platforms",
    "Received recognition from the Ministry of Home Affairs for the effective public awareness campaign"
  ],
  testimonial: {
    quote: "Wipster Technologies' marketing campaign for ERSS 112 has been instrumental in increasing public awareness and adoption of this critical emergency service. Their strategic approach, creative execution, and commitment to reaching all segments of our population have resulted in a significant increase in service usage and, most importantly, helped save lives.",
    author: "Senior Police Official, Odisha Police"
  }
};

const CaseStudyDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [project, setProject] = useState<Project | null>(null);
  const [relatedProjects, setRelatedProjects] = useState<Project[]>([]);

  useEffect(() => {
    // Find the current project
    const currentProject = projectsData.find(p => p.id.toString() === id);
    setProject(currentProject || null);

    // Find related projects (same category or featured)
    if (currentProject) {
      const related = projectsData
        .filter(p => p.id !== currentProject.id)
        .filter(p => p.category === currentProject.category || p.featured)
        .slice(0, 3);
      setRelatedProjects(related);
    }
  }, [id]);

  if (!project) {
    return (
      <Section>
        <CaseStudyContainer>
          <h2>Project not found</h2>
          <p>The case study you're looking for doesn't exist.</p>
          <Button as={Link} to="/portfolio/case-studies">Back to Case Studies</Button>
        </CaseStudyContainer>
      </Section>
    );
  }

  // Special content for ERSS 112 project
  const isERSS = project.id === 1;

  return (
    <Section>
      <CaseStudyContainer>
        <BreadcrumbNav>
          <Link to="/">Home</Link>
          <span>/</span>
          <Link to="/portfolio/case-studies">Case Studies</Link>
          <span>/</span>
          <span>{project.title}</span>
        </BreadcrumbNav>

        <CaseStudyHeader>
          <HeaderContent>
            <HeaderInfo>
              <span className="category">{project.category}</span>
              <h1>{project.title}</h1>
              <p className="description">{project.description}</p>
              <div className="technologies">
                {project.technologies.map((tech, index) => (
                  <span key={index}>{tech}</span>
                ))}
              </div>
              <Button
                as={Link}
                to="/contact"
                variant="primary"
              >
                Discuss a Similar Project
              </Button>
            </HeaderInfo>
            <HeaderImage>
              <img src={project.image.startsWith('/images') ? project.image : getUnsplashImage(project.image)} alt={project.title} />
            </HeaderImage>
          </HeaderContent>
        </CaseStudyHeader>

        <CaseStudyContent>
          <MainContent>
            {isERSS ? (
              <>
                <h2>The Challenge</h2>
                <p>{erssContent.challenge}</p>

                <h2>Our Approach</h2>
                <p>{erssContent.approach}</p>

                <div className="image-container">
                  <img src="/images/clients/Odisha_Police_Logo.webp" alt="ERSS 112 Campaign" />
                </div>

                <h2>The Solution</h2>
                <p>{erssContent.solution}</p>
              </>
            ) : (
              <>
                <h2>The Challenge</h2>
                <p>
                  We worked closely with the client to understand their specific challenges and business requirements. Our team conducted thorough research and analysis to identify the key areas for improvement and develop a tailored solution.
                </p>

                <h2>Our Approach</h2>
                <p>
                  Our approach focused on creating a comprehensive solution that addressed all the client's needs while ensuring scalability, security, and user-friendliness. We employed industry best practices and cutting-edge technologies to deliver optimal results.
                </p>

                <div className="image-container">
                  <img src={project.image.startsWith('/images') ? project.image : getUnsplashImage(project.image)} alt={project.title} />
                </div>

                <h2>The Solution</h2>
                <p>
                  We delivered a robust, scalable solution that met all the client's requirements and exceeded their expectations. The implementation was smooth and efficient, with comprehensive training and documentation provided to ensure the client could maximize the value of their new system.
                </p>
              </>
            )}
          </MainContent>

          <Sidebar>
            <SidebarSection>
              <h3>Results</h3>
              <ResultsList>
                {isERSS ? (
                  erssContent.results.map((result, index) => (
                    <div key={index} className="result-item">
                      <div className="icon">
                        <FaCheckCircle />
                      </div>
                      <p>{result}</p>
                    </div>
                  ))
                ) : (
                  <>
                    <div className="result-item">
                      <div className="icon">
                        <FaCheckCircle />
                      </div>
                      <p>Increased efficiency by 40%</p>
                    </div>
                    <div className="result-item">
                      <div className="icon">
                        <FaCheckCircle />
                      </div>
                      <p>Reduced operational costs by 25%</p>
                    </div>
                    <div className="result-item">
                      <div className="icon">
                        <FaCheckCircle />
                      </div>
                      <p>Improved user satisfaction by 60%</p>
                    </div>
                  </>
                )}
              </ResultsList>
            </SidebarSection>

            <SidebarSection>
              <h3>Client</h3>
              <ClientInfo>
                {isERSS && (
                  <img src="/images/clients/Odisha_Police_Logo.webp" alt="Odisha Police Logo" className="logo" />
                )}
                <p>
                  {isERSS ?
                    "Odisha Police is the law enforcement agency for the state of Odisha in India. The ERSS 112 is their emergency response service that provides immediate assistance to citizens in distress." :
                    "This client is a leading organization in their industry, known for their commitment to innovation and excellence. We were proud to partner with them on this transformative project."}
                </p>

                <TestimonialBox>
                  <FaQuoteLeft className="quote-icon" />
                  <p>
                    {isERSS ?
                      erssContent.testimonial.quote :
                      "Working with Wipster Technologies was a game-changer for our organization. Their team's expertise, professionalism, and dedication to our success made all the difference. The solution they delivered has significantly improved our operations and helped us achieve our business goals."}
                  </p>
                  <div className="author">
                    {isERSS ?
                      erssContent.testimonial.author :
                      "Client Representative, Senior Management"}
                  </div>
                </TestimonialBox>
              </ClientInfo>
            </SidebarSection>
          </Sidebar>
        </CaseStudyContent>

        <RelatedProjects>
          <SectionTitle
            title="Related Projects"
            subtitle="Explore more of our work in similar areas"
            size="medium"
          />

          <ProjectsGrid>
            {relatedProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={index}
                variants={cardVariants}
              >
                <div className="image">
                  <img src={project.image.startsWith('/images') ? project.image : getUnsplashImage(project.image)} alt={project.title} />
                </div>
                <div className="content">
                  <h3>{project.title}</h3>
                  <p>{project.description.substring(0, 100)}...</p>
                  <Link to={`/portfolio/case-studies/${project.id}`} className="read-more">
                    View Case Study
                  </Link>
                </div>
              </ProjectCard>
            ))}
          </ProjectsGrid>
        </RelatedProjects>
      </CaseStudyContainer>
    </Section>
  );
};

export default CaseStudyDetail;
