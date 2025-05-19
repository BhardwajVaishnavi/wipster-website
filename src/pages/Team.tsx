import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Section from '../components/Section';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';
import TeamMemberCard from '../components/TeamMemberCard';
import CoreTeamMemberCard from '../components/CoreTeamMemberCard';
import { teamData, coreTeamData } from '../data/teamData';
import { FaArrowRight, FaUsers, FaLightbulb, FaHandshake, FaRocket } from 'react-icons/fa';

const HeroSection = styled(Section)`
  min-height: 70vh;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, rgba(30, 41, 59, 0.9), rgba(30, 41, 59, 0.8)),
      url('/team-hero.jpg') no-repeat center center/cover;
    z-index: -1;
  }
`;

const HeroContent = styled.div`
  text-align: center;
  color: ${({ theme }) => theme.colors.light};
  max-width: 800px;
  margin: 0 auto;

  h1 {
    font-size: clamp(2.5rem, 5vw, 4rem);
    margin-bottom: ${({ theme }) => theme.space[6]};

    span {
      color: ${({ theme }) => theme.colors.primary};
    }
  }

  p {
    font-size: ${({ theme }) => theme.fontSizes.xl};
    margin-bottom: ${({ theme }) => theme.space[8]};
    color: rgba(255, 255, 255, 0.8);
  }
`;

const FoundersSection = styled(Section)`
  background-color: rgba(37, 99, 235, 0.05);
`;

const FoundersGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${({ theme }) => theme.space[8]};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;



const ValuesSection = styled(Section)`
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.accent});
  color: ${({ theme }) => theme.colors.light};
`;

const ValuesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: ${({ theme }) => theme.space[8]};

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`;

const ValueCard = styled(motion.div)`
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: ${({ theme }) => theme.radii.lg};
  padding: ${({ theme }) => theme.space[6]};
  text-align: center;
  backdrop-filter: blur(10px);

  .icon {
    font-size: 2.5rem;
    color: ${({ theme }) => theme.colors.light};
    margin-bottom: ${({ theme }) => theme.space[4]};
  }

  h3 {
    font-size: ${({ theme }) => theme.fontSizes.xl};
    margin-bottom: ${({ theme }) => theme.space[3]};
    color: ${({ theme }) => theme.colors.light};
  }

  p {
    color: rgba(255, 255, 255, 0.8);
    line-height: ${({ theme }) => theme.lineHeights.relaxed};
  }
`;

const CoreTeamSection = styled(Section)`
  background-color: ${({ theme }) => theme.colors.background};
  padding: ${({ theme }) => theme.space[12]} 0;
`;

const CoreTeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${({ theme }) => theme.space[10]};
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.space[4]};

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

const JoinTeamSection = styled(Section)`
  text-align: center;
  /* background: linear-gradient(135deg, #FF6FB5, #F7B733); */
`;

const JoinTeamContent = styled.div`
  max-width: 800px;
  margin: 0 auto;

  h2 {
    font-size: ${({ theme }) => theme.fontSizes['3xl']};
    margin-bottom: ${({ theme }) => theme.space[6]};
  }

  p {
    color: ${({ theme }) => theme.colors.gray};
    margin-bottom: ${({ theme }) => theme.space[8]};
    line-height: ${({ theme }) => theme.lineHeights.relaxed};
  }
`;

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

const Team: React.FC = () => {
  const founders = teamData;

  return (
    <>
      <HeroSection fullHeight padding="none">
        <HeroContent>
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Meet Our <span>Team</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Our talented team of professionals is the driving force behind our success. Get to know the people who make Wipster Technologies exceptional.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Button
              size="large"
              as={Link}
              to="/contact"
              icon={<FaArrowRight />}
              iconPosition="right"
            >
              Get in Touch
            </Button>
          </motion.div>
        </HeroContent>
      </HeroSection>

      {/* <FoundersSection id="founders">
        <SectionTitle
          title="Our Founders"
          subtitle="Meet the visionaries who established Wipster Technologies and continue to lead its growth and innovation."
        />

        <FoundersGrid>
          {founders.map((founder, index) => (
            <TeamMemberCard key={founder.id} member={founder} index={index} />
          ))}
        </FoundersGrid>
      </FoundersSection> */}



      <ValuesSection id="our-values">
        <SectionTitle
          title="Our Values"
          subtitle="The core principles that guide our work and define our culture."
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
              <FaUsers />
            </div>
            <h3>Collaboration</h3>
            <p>We believe in the power of teamwork and partnership to achieve exceptional results.</p>
          </ValueCard>

          <ValueCard
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={3}
            variants={valueCardVariants}
          >
            <div className="icon">
              <FaRocket />
            </div>
            <h3>Excellence</h3>
            <p>We strive for excellence in everything we do, delivering the highest quality solutions.</p>
          </ValueCard>
        </ValuesGrid>
      </ValuesSection>

      <CoreTeamSection id="core-team">
        <SectionTitle
          title="Meet Our Core Team"
          subtitle="The talented professionals who drive our success and deliver exceptional results for our clients."
        />

        <CoreTeamGrid>
          {coreTeamData.map((member, index) => (
            <CoreTeamMemberCard key={member.id} member={member} index={index} />
          ))}
        </CoreTeamGrid>
      </CoreTeamSection>

      <JoinTeamSection id="join-our-team">
        <JoinTeamContent>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Join Our Team
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            We're always looking for talented individuals who share our passion for technology and innovation. At Wipster Technologies, you'll have the opportunity to work on exciting projects, learn from industry experts, and grow your career in a supportive and collaborative environment.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <Button
              as={Link}
              to="/careers"
              icon={<FaArrowRight />}
              iconPosition="right"
            >
              View Open Positions
            </Button>
          </motion.div>
        </JoinTeamContent>
      </JoinTeamSection>
    </>
  );
};

export default Team;
