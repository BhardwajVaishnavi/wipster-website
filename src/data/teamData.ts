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
