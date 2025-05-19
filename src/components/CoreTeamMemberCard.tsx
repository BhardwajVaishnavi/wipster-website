import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaLinkedin, FaTwitter, FaGithub, FaEnvelope } from 'react-icons/fa';
import { TeamMember } from '../types';

interface CoreTeamMemberCardProps {
  member: TeamMember;
  index: number;
}

const Card = styled(motion.div)`
  background-color: transparent; /* Transparent background */
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
  height: 360px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #000000; /* Black background */
`;

const StyledImage = styled.img`
  width: 80%;
  height: 100%;
  object-fit: cover;
  object-position: center top;
  transition: transform 0.5s ease;
  border-radius: 5px;
`;

const Content = styled.div`
  padding: 0;
  padding-top: 10px !important; /* Force padding-top with !important */
  padding-bottom: 20px;
  padding-left: 20px;
  padding-right: 20px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  background-color: transparent; /* Transparent background */
`;

const Name = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  margin-top: 0;
  margin-bottom: ${({ theme }) => theme.space[2]};
  color: ${({ theme }) => theme.colors.text};
  text-align: center;
`;

const Role = styled.p`
  color: ${({ theme }) => theme.colors.primary};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  margin-bottom: ${({ theme }) => theme.space[4]};
  text-align: center;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.space[4]};
  margin-top: auto;
  justify-content: center;
`;

const SocialLink = styled(motion.a)`
  width: 36px;
  height: 36px;
  border-radius: ${({ theme }) => theme.radii.full};
  background-color: rgba(37, 99, 235, 0.1);
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

const CoreTeamMemberCard: React.FC<CoreTeamMemberCardProps> = ({ member, index }) => {
  return (
    <Card
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      custom={index}
    >
      <ImageContainer>
        <StyledImage
          src={member.image}
          alt={member.name}
          className="member-image"
        />
      </ImageContainer>
      <Content>
        <Name>{member.name}</Name>
        <Role>{member.role}</Role>
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

export default CoreTeamMemberCard;
