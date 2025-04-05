import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaLightbulb, FaHandshake, FaRocket, FaUsers } from 'react-icons/fa';
import Hero from '../components/Hero';
import Section from '../components/Section';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';
import { getUnsplashImage, unsplashImages } from '../utils/unsplashImages';

const StoryContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const StoryContent = styled.div`
  margin-bottom: ${({ theme }) => theme.space[12]};
`;

const StoryText = styled.div`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  line-height: ${({ theme }) => theme.lineHeights.relaxed};

  p {
    margin-bottom: ${({ theme }) => theme.space[6]};
  }

  h3 {
    font-size: ${({ theme }) => theme.fontSizes['2xl']};
    margin-top: ${({ theme }) => theme.space[10]};
    margin-bottom: ${({ theme }) => theme.space[4]};
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const Timeline = styled.div`
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.space[8]} 0;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    width: 4px;
    height: 100%;
    background: ${({ theme }) => theme.colors.primary};
    transform: translateX(-50%);

    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
      left: 30px;
    }
  }
`;

const TimelineItem = styled(motion.div)`
  display: flex;
  justify-content: flex-end;
  padding-right: 50%;
  position: relative;
  margin-bottom: ${({ theme }) => theme.space[16]};

  &:nth-child(even) {
    justify-content: flex-start;
    padding-right: 0;
    padding-left: 50%;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    justify-content: flex-start;
    padding-right: 0;
    padding-left: 80px;

    &:nth-child(even) {
      padding-left: 80px;
    }
  }

  &:last-child {
    margin-bottom: 0;
  }
`;

const TimelineContent = styled.div`
  background: #FFFFFF;
  border-radius: ${({ theme }) => theme.radii.lg};
  box-shadow: ${({ theme }) => theme.shadows.md};
  padding: ${({ theme }) => theme.space[6]};
  max-width: 500px;

  h3 {
    font-size: ${({ theme }) => theme.fontSizes.xl};
    margin-bottom: ${({ theme }) => theme.space[3]};
    color: ${({ theme }) => theme.colors.primary};
  }

  p {
    color: #333333;
    line-height: ${({ theme }) => theme.lineHeights.relaxed};
  }
`;

const TimelineDot = styled.div`
  position: absolute;
  top: 10px;
  left: 50%;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.primary};
  transform: translateX(-50%);

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    left: 30px;
  }
`;

const TimelineDate = styled.div`
  position: absolute;
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
  color: ${({ theme }) => theme.colors.primary};
  font-weight: ${({ theme }) => theme.fontWeights.bold};

  ${TimelineItem}:nth-child(even) & {
    right: 50%;
    left: auto;
    transform: translateX(50%);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    left: 30px;
    transform: translateX(-150%);

    ${TimelineItem}:nth-child(even) & {
      right: auto;
      left: 30px;
      transform: translateX(-150%);
    }
  }
`;

const ImageContainer = styled.div`
  margin: ${({ theme }) => theme.space[8]} 0;
  border-radius: ${({ theme }) => theme.radii.lg};
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadows.lg};

  img {
    width: 100%;
    height: auto;
    display: block;
  }
`;

const ValuesSection = styled(Section)`
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.accent});
`;

const ValuesGrid = styled.div`
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

const ValueCard = styled(motion.div)`
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

const timelineItemVariants = {
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

const valueCardVariants = {
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

const OurStory: React.FC = () => {
  return (
    <>
      <Hero
        useVideo={false}
      />

      <Section>
        <StoryContainer>
          <SectionTitle
            title="Our Journey"
            subtitle="The story of how Wipster Technologies came to be and our mission to transform businesses through technology."
          />

          <StoryContent>
            <ImageContainer>
              <img src={getUnsplashImage(unsplashImages.about.teamImage)} alt="Wipster Team" />
            </ImageContainer>

            <StoryText>
              <p>
                Wipster Technologies was founded in 2018 by Pritish Dhal and Vaishnavi Bhardwaj, two technology enthusiasts with a shared vision of creating a company that would bridge the gap between cutting-edge technology and practical business solutions.
              </p>

              <p>
                What began as a small consulting firm has grown into a full-service IT solutions provider with a team of dedicated professionals serving clients across various industries. Our journey has been marked by continuous learning, innovation, and a commitment to excellence.
              </p>

              <h3>Our Mission</h3>
              <p>
                At Wipster Technologies, our mission is to empower businesses through innovative technology solutions that drive growth, efficiency, and competitive advantage. We believe that technology should be an enabler, not a barrier, and we work tirelessly to make complex technologies accessible and beneficial for our clients.
              </p>

              <h3>Our Vision</h3>
              <p>
                We envision a future where businesses of all sizes can harness the power of technology to achieve their full potential. Our goal is to be the trusted technology partner that helps organizations navigate the digital landscape and emerge stronger, more agile, and better equipped for the challenges of tomorrow.
              </p>
            </StoryText>
          </StoryContent>
        </StoryContainer>
      </Section>

      <Section background="light">
        <SectionTitle
          title="Our Timeline"
          subtitle="Key milestones in our journey from a startup to a leading IT solutions provider."
        />

        <Timeline>
          <TimelineItem
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
            variants={timelineItemVariants}
          >
            <TimelineContent>
              <h3>The Beginning</h3>
              <p>Pritish Dhal and Vaishnavi Bhardwaj founded Wipster Technologies with a vision to create innovative IT solutions for businesses.</p>
            </TimelineContent>
            <TimelineDot />
            <TimelineDate>2018</TimelineDate>
          </TimelineItem>

          <TimelineItem
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
            variants={timelineItemVariants}
          >
            <TimelineContent>
              <h3>First Major Client</h3>
              <p>Secured our first enterprise client and successfully delivered a complex digital transformation project that set the standard for our future work.</p>
            </TimelineContent>
            <TimelineDot />
            <TimelineDate>2019</TimelineDate>
          </TimelineItem>

          <TimelineItem
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={2}
            variants={timelineItemVariants}
          >
            <TimelineContent>
              <h3>Team Expansion</h3>
              <p>Expanded our team to include specialists in cloud computing, AI, and mobile development, broadening our service offerings.</p>
            </TimelineContent>
            <TimelineDot />
            <TimelineDate>2020</TimelineDate>
          </TimelineItem>

          <TimelineItem
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={3}
            variants={timelineItemVariants}
          >
            <TimelineContent>
              <h3>New Office</h3>
              <p>Moved to a larger office space to accommodate our growing team and established dedicated innovation labs for research and development.</p>
            </TimelineContent>
            <TimelineDot />
            <TimelineDate>2021</TimelineDate>
          </TimelineItem>

          <TimelineItem
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={4}
            variants={timelineItemVariants}
          >
            <TimelineContent>
              <h3>International Expansion</h3>
              <p>Began serving international clients and established partnerships with global technology providers to enhance our service capabilities.</p>
            </TimelineContent>
            <TimelineDot />
            <TimelineDate>2022</TimelineDate>
          </TimelineItem>

          <TimelineItem
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={5}
            variants={timelineItemVariants}
          >
            <TimelineContent>
              <h3>Today</h3>
              <p>Continuing to grow and innovate, with a focus on emerging technologies and sustainable digital solutions for businesses worldwide.</p>
            </TimelineContent>
            <TimelineDot />
            <TimelineDate>2023</TimelineDate>
          </TimelineItem>
        </Timeline>
      </Section>

      <ValuesSection>
        <SectionTitle
          title="Our Core Values"
          subtitle="The principles that guide our work and define our culture."
          light
        />

        <ValuesGrid>
          <ValueCard
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
            variants={valueCardVariants}
          >
            <div className="icon">
              <FaLightbulb />
            </div>
            <h3>Innovation</h3>
            <p>We constantly seek new and better ways to solve problems and create value for our clients.</p>
          </ValueCard>

          <ValueCard
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
            variants={valueCardVariants}
          >
            <div className="icon">
              <FaHandshake />
            </div>
            <h3>Integrity</h3>
            <p>We conduct our business with honesty, transparency, and the highest ethical standards.</p>
          </ValueCard>

          <ValueCard
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={2}
            variants={valueCardVariants}
          >
            <div className="icon">
              <FaRocket />
            </div>
            <h3>Excellence</h3>
            <p>We strive for excellence in everything we do, from code quality to client communication.</p>
          </ValueCard>

          <ValueCard
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={3}
            variants={valueCardVariants}
          >
            <div className="icon">
              <FaUsers />
            </div>
            <h3>Collaboration</h3>
            <p>We believe in the power of teamwork and partnership, both internally and with our clients.</p>
          </ValueCard>
        </ValuesGrid>
      </ValuesSection>

      <CTASection>
        <SectionTitle
          title="Join Our Journey"
          subtitle="Be a part of our story as we continue to grow and innovate."
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
            to="/careers"
            size="large"
            icon={<FaArrowRight />}
            iconPosition="right"
          >
            Explore Careers
          </Button>
        </motion.div>
      </CTASection>
    </>
  );
};

export default OurStory;
