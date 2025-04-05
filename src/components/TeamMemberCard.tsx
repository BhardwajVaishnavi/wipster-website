import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaLinkedin, FaTwitter, FaGithub, FaEnvelope } from 'react-icons/fa';
import { TeamMember } from '../types';
import { getUnsplashImage, unsplashImages } from '../utils/unsplashImages';

interface TeamMemberCardProps {
  member: TeamMember;
  index: number;
}

const Card = styled(motion.div)`
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: ${({ theme }) => theme.radii.lg};
  box-shadow: ${({ theme }) => theme.shadows.md};
  overflow: hidden;
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
  transition: ${({ theme }) => theme.transitions.default};

  &:hover {
    box-shadow: ${({ theme }) => theme.shadows.xl};
    transform: translateY(-5px);

    .member-image {
      transform: scale(1.05);
    }
  }
`;

const ImageContainer = styled.div`
  position: relative;
  height: 300px;
  overflow: hidden;
`;

const Image = styled.div<{ image: string }>`
  width: 100%;
  height: 100%;
  background-image: url(${({ image }) => image});
  background-size: cover;
  background-position: center;
  transition: transform 0.5s ease;
`;

const FounderBadge = styled.div`
  position: absolute;
  top: ${({ theme }) => theme.space[4]};
  right: ${({ theme }) => theme.space[4]};
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.light};
  padding: ${({ theme }) => `${theme.space[1]} ${theme.space[3]}`};
  border-radius: ${({ theme }) => theme.radii.full};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  z-index: 1;
`;

const Content = styled.div`
  padding: ${({ theme }) => theme.space[6]};
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const Name = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  margin-bottom: ${({ theme }) => theme.space[2]};
  color: ${({ theme }) => theme.colors.text};
`;

const Role = styled.p`
  color: ${({ theme }) => theme.colors.primary};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  margin-bottom: ${({ theme }) => theme.space[4]};
`;

const Bio = styled.p`
  color: ${({ theme }) => theme.colors.gray};
  margin-bottom: ${({ theme }) => theme.space[6]};
  line-height: ${({ theme }) => theme.lineHeights.relaxed};
  flex-grow: 1;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.space[4]};
  margin-top: auto;
`;

const SocialLink = styled(motion.a)`
  width: 36px;
  height: 36px;
  border-radius: ${({ theme }) => theme.radii.full};
  background-color: ${({ theme }) => `rgba(37, 99, 235, 0.1)`};
  color: ${({ theme }) => theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: ${({ theme }) => theme.transitions.default};

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.light};
  }
`;

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
    },
  }),
};

// Function to get the appropriate Unsplash image for a team member
const getTeamMemberImage = (memberName: string) => {
  const name = memberName.toLowerCase();

  if (name.includes('pritish')) {
    return getUnsplashImage(unsplashImages.teamMembers.ceo);
  } else if (name.includes('vaishnavi')) {
    return getUnsplashImage(unsplashImages.teamMembers.cto);
  } else if (name.includes('sweta')) {
    return getUnsplashImage(unsplashImages.teamMembers.sales);
  } else if (name.includes('samrita')) {
    return getUnsplashImage(unsplashImages.teamMembers.technical);
  } else if (name.includes('pritam')) {
    return getUnsplashImage(unsplashImages.teamMembers.cdo);
  } else {
    // Default image if no match
    return getUnsplashImage(unsplashImages.teamMembers.ceo);
  }
};

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ member, index }) => {
  return (
    <Card
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      custom={index}
    >
      <ImageContainer>
        <Image
          image={getTeamMemberImage(member.name)}
          className="member-image"
        />
        {member.isFounder && <FounderBadge>Founder</FounderBadge>}
      </ImageContainer>
      <Content>
        <Name>{member.name}</Name>
        <Role>{member.role}</Role>
        <Bio>{member.bio}</Bio>
        <SocialLinks>
          {member.socialLinks?.linkedin && (
            <SocialLink
              href={member.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaLinkedin />
            </SocialLink>
          )}
          {member.socialLinks?.twitter && (
            <SocialLink
              href={member.socialLinks.twitter}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaTwitter />
            </SocialLink>
          )}
          {member.socialLinks?.github && (
            <SocialLink
              href={member.socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaGithub />
            </SocialLink>
          )}
          {member.socialLinks?.email && (
            <SocialLink
              href={`mailto:${member.socialLinks.email}`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaEnvelope />
            </SocialLink>
          )}
        </SocialLinks>
      </Content>
    </Card>
  );
};

export default TeamMemberCard;
