import { TeamMember } from '../types';

export const teamData: TeamMember[] = [
  {
    id: 1,
    name: 'Pritish Dhal',
    role: 'Founder',
    image: '/team/Pritish.jpeg',
    bio: 'Pritish Dhal is the visionary founder of Wipster Technologies. His expertise in strategic planning and technology innovation has been instrumental in establishing Wipster as a leading IT service provider.',
    socialLinks: {
      linkedin: 'https://linkedin.com/in/pritish-dhal',
      twitter: 'https://twitter.com/pritishdhal',
      email: 'info@wipstertechnologies.com',
    },
    isFounder: true,
  },
  {
    id: 2,
    name: 'Vaishnavi Bhardwaj',
    role: 'Co-founder & CEO',
    image: '/team/Vaishnavi.jpeg',
    bio: 'Vaishnavi Bhardwaj co-founded Wipster Technologies and serves as the Chief Executive Officer. Her innovative approach to technology solutions has helped clients achieve remarkable digital transformations.',
    socialLinks: {
      linkedin: 'https://linkedin.com/in/vaishnavi-bhardwaj',
      twitter: 'https://twitter.com/vaishnavibhardwaj',
      email: 'info@wipstertechnologies.com',
    },
    isFounder: true,
  },
];

export const coreTeamData: TeamMember[] = [
  {
    id: 1,
    name: 'Sweta Moharana',
    role: 'Sales Head',
    image: '/images/team/Sweta Maharana.png',
    bio: 'Experienced executive with a proven track record of leading technology companies to success through strategic vision and operational excellence.',
    socialLinks: {
      linkedin: 'https://linkedin.com/in/sweta-moharana',
      email: 'sweta.moharana@wipstertechnologies.com',
    },
  },
  {
    id: 2,
    name: 'Pritam Pattanaik',
    role: 'Designer',
    image: '/images/team/pritam.png',
    bio: 'Technology leader with deep expertise in software architecture, cloud infrastructure, and emerging technologies driving innovation.',
    socialLinks: {
      linkedin: 'https://linkedin.com/in/davidsmith',
      email: 'david@wipstertechnologies.com',
    },
  },
  {
    id: 3,
    name: 'Samrita Swain',
    role: 'Web Developer',
    image: '/images/team/Samrita Swain.png',
    bio: 'Creative design professional specializing in user experience and brand identity with a passion for creating intuitive and visually stunning interfaces.',
    socialLinks: {
      linkedin: 'https://linkedin.com/in/samrita-swain',
      email: 'tom@wipstertechnologies.com',
    },
  },
];
