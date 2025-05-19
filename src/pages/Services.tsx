import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import Section from '../components/Section';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';
import ServiceCard from '../components/ServiceCard';
import FAQ from '../components/FAQ';
import Hero from '../components/Hero';
import { servicesData } from '../data/servicesData';
import { FaArrowRight, FaLaptopCode, FaMobileAlt, FaPaintBrush, FaUsers, FaChartLine, FaCloud, FaShoppingCart, FaMegaport } from 'react-icons/fa';

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${({ theme }) => theme.space[8]};

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

const ServiceDetailSection = styled(Section)`
  padding-top: 0;
`;

const ServiceTabs = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.space[2]};
  margin-bottom: ${({ theme }) => theme.space[8]};
  justify-content: center;
`;

const ServiceTab = styled.button<{ active: boolean }>`
  padding: ${({ theme }) => `${theme.space[3]} ${theme.space[5]}`};
  background-color: ${({ active, theme }) =>
    active ? theme.colors.primary : 'rgba(37, 99, 235, 0.1)'};
  color: ${({ active, theme }) =>
    active ? theme.colors.light : theme.colors.primary};
  border: none;
  border-radius: ${({ theme }) => theme.radii.full};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.default};

  &:hover {
    background-color: ${({ active, theme }) =>
      active ? theme.colors.primary : 'rgba(37, 99, 235, 0.2)'};
  }
`;

const ServiceDetail = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.space[12]};
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: 1fr;
  }
`;

const ServiceImage = styled.div`
  img {
    width: 100%;
    border-radius: ${({ theme }) => theme.radii.lg};
    box-shadow: ${({ theme }) => theme.shadows.lg};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    order: 1;
  }
`;

const ServiceInfo = styled.div`
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    order: 2;
  }

  h2 {
    font-size: ${({ theme }) => theme.fontSizes['3xl']};
    margin-bottom: ${({ theme }) => theme.space[6]};
    position: relative;

    &::after {
      content: '';
      position: absolute;
      bottom: -10px;
      left: 0;
      width: 80px;
      height: 4px;
      background: ${({ theme }) => theme.colors.primary};
      border-radius: ${({ theme }) => theme.radii.full};
    }
  }

  p {
    margin-bottom: ${({ theme }) => theme.space[6]};
    color: ${({ theme }) => theme.colors.gray};
    line-height: ${({ theme }) => theme.lineHeights.relaxed};
  }
`;

const FeaturesList = styled.ul`
  list-style: none;
  padding: 0;
  margin-bottom: ${({ theme }) => theme.space[8]};

  li {
    position: relative;
    padding-left: ${({ theme }) => theme.space[8]};
    margin-bottom: ${({ theme }) => theme.space[4]};

    &::before {
      content: '✓';
      position: absolute;
      left: 0;
      top: 0;
      width: 24px;
      height: 24px;
      background-color: rgba(37, 99, 235, 0.1);
      color: ${({ theme }) => theme.colors.primary};
      border-radius: ${({ theme }) => theme.radii.full};
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: ${({ theme }) => theme.fontSizes.sm};
    }
  }
`;

const ProcessSection = styled(Section)`
  background-color: rgba(37, 99, 235, 0.05);
`;

const ProcessSteps = styled.div`
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

const ProcessStep = styled(motion.div)`
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: ${({ theme }) => theme.radii.lg};
  box-shadow: ${({ theme }) => theme.shadows.md};
  padding: ${({ theme }) => theme.space[6]};
  text-align: center;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    right: -40px;
    width: 40px;
    height: 2px;
    background-color: ${({ theme }) => theme.colors.primary};

    @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
      display: none;
    }
  }

  &:last-child::after {
    display: none;
  }

  .step-number {
    width: 60px;
    height: 60px;
    border-radius: ${({ theme }) => theme.radii.full};
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.light};
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: ${({ theme }) => theme.fontSizes['2xl']};
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    margin: 0 auto ${({ theme }) => theme.space[4]};
  }

  h3 {
    font-size: ${({ theme }) => theme.fontSizes.xl};
    margin-bottom: ${({ theme }) => theme.space[3]};
  }

  p {
    color: ${({ theme }) => theme.colors.gray};
    font-size: ${({ theme }) => theme.fontSizes.md};
  }
`;

const CTASection = styled(Section)`
  text-align: center;
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.accent});
  color: ${({ theme }) => theme.colors.light};

  h2 {
    margin-bottom: ${({ theme }) => theme.space[6]};
    font-size: ${({ theme }) => theme.fontSizes['4xl']};
  }

  p {
    max-width: 700px;
    margin: 0 auto ${({ theme }) => theme.space[8]};
    font-size: ${({ theme }) => theme.fontSizes.lg};
    opacity: 0.9;
  }
`;

const FAQSection = styled(Section)`
  background-color: ${({ theme }) => theme.colors.background};
`;

const getServiceIcon = (iconName: string) => {
  switch (iconName) {
    case 'FaLaptopCode':
      return <FaLaptopCode size={60} />;
    case 'FaMobileAlt':
      return <FaMobileAlt size={60} />;
    case 'FaPaintBrush':
      return <FaPaintBrush size={60} />;
    case 'FaUsers':
      return <FaUsers size={60} />;
    case 'FaChartLine':
      return <FaChartLine size={60} />;
    case 'FaCloud':
      return <FaCloud size={60} />;
    case 'FaShoppingCart':
      return <FaShoppingCart size={60} />;
    case 'FaMegaport':
      return <FaMegaport size={60} />;
    default:
      return <FaLaptopCode size={60} />;
  }
};

const Services: React.FC = () => {
  const [activeService, setActiveService] = useState(servicesData[0]);

  return (
    <>
      <Hero
        useVideo={false}
      />

      <Section id="all-services">
        <SectionTitle
          title="Our Services"
          subtitle="We provide end-to-end IT solutions tailored to your business needs."
        />

        <ServicesGrid>
          {servicesData.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </ServicesGrid>
      </Section>

      <ServiceDetailSection id="service-details">
        <ServiceTabs>
          {servicesData.map((service) => (
            <ServiceTab
              key={service.id}
              active={activeService.id === service.id}
              onClick={() => setActiveService(service)}
            >
              {service.title}
            </ServiceTab>
          ))}
        </ServiceTabs>

        <AnimatePresence mode="wait">
          <ServiceDetail
            key={activeService.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <ServiceInfo>
              <h2>{activeService.title}</h2>
              <p>{activeService.description}</p>
              <p>
                Our team of experienced professionals uses the latest technologies and best practices to deliver high-quality solutions that meet your specific requirements and exceed your expectations.
              </p>
              <h3>Key Features</h3>
              <FeaturesList>
                {activeService.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </FeaturesList>
              <Button
                as={Link}
                to="/contact"
                icon={<FaArrowRight />}
                iconPosition="right"
              >
                Request a Quote
              </Button>
            </ServiceInfo>

            <ServiceImage>
              <div style={{ color: '#2563EB', textAlign: 'center', marginBottom: '20px' }}>
                {getServiceIcon(activeService.icon)}
              </div>
              <img src={`/services/${activeService.title.toLowerCase().replace(/\s+/g, '-')}.jpg`} alt={activeService.title} />
            </ServiceImage>
          </ServiceDetail>
        </AnimatePresence>
      </ServiceDetailSection>

      <ProcessSection id="our-process">
        <SectionTitle
          title="Our Development Process"
          subtitle="We follow a structured approach to ensure the successful delivery of your project."
        />

        <ProcessSteps>
          <ProcessStep
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="step-number">1</div>
            <h3>Discovery</h3>
            <p>We start by understanding your business goals, requirements, and challenges to define the project scope.</p>
          </ProcessStep>

          <ProcessStep
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="step-number">2</div>
            <h3>Planning</h3>
            <p>We create a detailed project plan, including timelines, milestones, and resource allocation.</p>
          </ProcessStep>

          <ProcessStep
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="step-number">3</div>
            <h3>Development</h3>
            <p>Our team develops the solution using agile methodologies, with regular updates and feedback sessions.</p>
          </ProcessStep>

          <ProcessStep
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <div className="step-number">4</div>
            <h3>Delivery</h3>
            <p>We deploy the solution, provide training, and offer ongoing support to ensure your success.</p>
          </ProcessStep>
        </ProcessSteps>
      </ProcessSection>

      <FAQSection id="faqs">
        <SectionTitle
          title="Frequently Asked Questions"
          subtitle="Find answers to common questions about our services and processes."
        />

        <FAQ />
      </FAQSection>

      <CTASection>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Ready to Transform Your Business?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Let's discuss how our services can help you achieve your business goals and stay ahead of the competition.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <Button
            variant="outline"
            size="large"
            as={Link}
            to="/contact"
          >
            Contact Us Today
          </Button>
        </motion.div>
      </CTASection>
    </>
  );
};

export default Services;
