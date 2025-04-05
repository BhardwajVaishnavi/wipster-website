import { Project } from '../types';

export const projectsData: Project[] = [
  {
    id: 1,
    title: 'ERSS 112 Odisha Police',
    description: 'A comprehensive marketing campaign for the Emergency Response Support System (ERSS) 112 of Odisha Police, increasing public awareness and adoption of this critical emergency service across the state.',
    image: '/images/clients/Odisha_Police_Logo.webp',
    category: 'Marketing',
    technologies: ['Digital Marketing', 'Social Media', 'Public Awareness', 'Campaign Management'],
    featured: true,
  },
  {
    id: 2,
    title: 'HealthTrack Patient Management System',
    description: 'A comprehensive patient management system for healthcare providers, featuring appointment scheduling, electronic health records, and billing integration.',
    image: '/projects/healthcare-app.jpg', // Placeholder
    category: 'Healthcare',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'AWS'],
  },
  {
    id: 3,
    title: 'FinEdge Banking Platform',
    description: 'A secure and scalable digital banking platform with features like account management, transactions, bill payments, and financial insights.',
    image: '/projects/banking-app.jpg', // Placeholder
    category: 'Finance',
    technologies: ['Angular', 'Java Spring Boot', 'PostgreSQL', 'Docker', 'Kubernetes'],
    featured: true,
  },
  {
    id: 4,
    title: 'EduConnect Learning Management System',
    description: 'An interactive learning management system for educational institutions, featuring course management, student progress tracking, and virtual classrooms.',
    image: '/projects/education-app.jpg', // Placeholder
    category: 'Education',
    technologies: ['Vue.js', 'Python Django', 'MySQL', 'Redis', 'Azure'],
  },
  {
    id: 5,
    title: 'RetailPro Inventory Management',
    description: 'A comprehensive inventory management system for retail businesses, with features like stock tracking, order management, and sales analytics.',
    image: '/projects/retail-app.jpg', // Placeholder
    category: 'Retail',
    technologies: ['React', 'Node.js', 'GraphQL', 'MongoDB', 'AWS'],
  },
  {
    id: 6,
    title: 'TravelEase Booking Platform',
    description: 'A full-featured travel booking platform for hotels, flights, and experiences, with personalized recommendations and loyalty program integration.',
    image: '/projects/travel-app.jpg', // Placeholder
    category: 'Travel',
    technologies: ['React Native', 'Node.js', 'PostgreSQL', 'Redis', 'AWS'],
  },
  {
    id: 7,
    title: 'LogiTrack Fleet Management',
    description: 'A real-time fleet management system for logistics companies, featuring vehicle tracking, route optimization, and maintenance scheduling.',
    image: '/projects/logistics-app.jpg', // Placeholder
    category: 'Logistics',
    technologies: ['React', 'Python Flask', 'MongoDB', 'Docker', 'Google Cloud'],
  },
];
