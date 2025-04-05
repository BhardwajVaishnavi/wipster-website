import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Section from '../components/Section';
import SectionTitle from '../components/SectionTitle';
import ContactForm from '../components/ContactForm';
import { contactData } from '../data/contactData';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

const HeroSection = styled(Section)`
  min-height: 60vh;
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
      url('/contact-hero.jpg') no-repeat center center/cover;
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

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.space[12]};

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.space[8]};
  }
`;

const ContactInfo = styled(motion.div)`
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    order: 2;
  }
`;

const ContactFormContainer = styled(motion.div)`
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    order: 1;
  }
`;

const InfoCard = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: ${({ theme }) => theme.radii.lg};
  box-shadow: ${({ theme }) => theme.shadows.md};
  padding: ${({ theme }) => theme.space[8]};
  margin-bottom: ${({ theme }) => theme.space[6]};

  h3 {
    font-size: ${({ theme }) => theme.fontSizes.xl};
    margin-bottom: ${({ theme }) => theme.space[6]};
    position: relative;
    padding-bottom: ${({ theme }) => theme.space[3]};

    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 60px;
      height: 3px;
      background: ${({ theme }) => theme.colors.primary};
      border-radius: ${({ theme }) => theme.radii.full};
    }
  }
`;

const ContactItem = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: ${({ theme }) => theme.space[4]};

  &:last-child {
    margin-bottom: 0;
  }

  svg {
    color: ${({ theme }) => theme.colors.primary};
    font-size: ${({ theme }) => theme.fontSizes.xl};
    margin-right: ${({ theme }) => theme.space[4]};
    margin-top: ${({ theme }) => theme.space[1]};
  }
`;

const ContactText = styled.div`
  h4 {
    font-size: ${({ theme }) => theme.fontSizes.md};
    margin-bottom: ${({ theme }) => theme.space[1]};
  }

  p {
    color: ${({ theme }) => theme.colors.gray};
    line-height: ${({ theme }) => theme.lineHeights.relaxed};
  }

  a {
    color: ${({ theme }) => theme.colors.gray};
    text-decoration: none;
    transition: ${({ theme }) => theme.transitions.default};

    &:hover {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.space[4]};
  margin-top: ${({ theme }) => theme.space[6]};
`;

const SocialLink = styled(motion.a)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: ${({ theme }) => theme.radii.full};
  background-color: rgba(37, 99, 235, 0.1);
  color: ${({ theme }) => theme.colors.primary};
  transition: ${({ theme }) => theme.transitions.default};

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.light};
    transform: translateY(-3px);
  }
`;

const MapSection = styled(Section)`
  padding-top: 0;
`;

const MapContainer = styled.div`
  height: 500px;
  border-radius: ${({ theme }) => theme.radii.lg};
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadows.lg};

  iframe {
    width: 100%;
    height: 100%;
    border: none;
  }
`;

const Contact: React.FC = () => {
  return (
    <>
      <HeroSection fullHeight padding="none">
        <HeroContent>
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Get in <span>Touch</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Have a question or want to discuss a project? We'd love to hear from you. Reach out to us using the contact information below or fill out the form, and we'll get back to you as soon as possible.
          </motion.p>
        </HeroContent>
      </HeroSection>

      <Section id="contact-us">
        <SectionTitle
          title="Contact Us"
          subtitle="We're here to answer any questions you may have about our services."
        />

        <ContactGrid>
          <ContactInfo
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <InfoCard>
              <h3>Contact Information</h3>

              <ContactItem>
                <FaMapMarkerAlt />
                <ContactText>
                  <h4>Address</h4>
                  <p>{contactData.address}</p>
                </ContactText>
              </ContactItem>

              <ContactItem>
                <FaPhone />
                <ContactText>
                  <h4>Phone</h4>
                  <p><a href={`tel:${contactData.phone}`}>{contactData.phone}</a></p>
                </ContactText>
              </ContactItem>

              <ContactItem>
                <FaEnvelope />
                <ContactText>
                  <h4>Email</h4>
                  <p><a href={`mailto:${contactData.email}`}>{contactData.email}</a></p>
                </ContactText>
              </ContactItem>
            </InfoCard>

            <InfoCard>
              <h3>Business Hours</h3>
              <ContactText>
                <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p>Saturday: 10:00 AM - 2:00 PM</p>
                <p>Sunday: Closed</p>
              </ContactText>

              <h3 style={{ marginTop: '2rem' }}>Connect With Us</h3>
              <SocialLinks>
                {contactData.socialLinks.facebook && (
                  <SocialLink
                    href={contactData.socialLinks.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaFacebook />
                  </SocialLink>
                )}

                {contactData.socialLinks.twitter && (
                  <SocialLink
                    href={contactData.socialLinks.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaTwitter />
                  </SocialLink>
                )}

                {contactData.socialLinks.linkedin && (
                  <SocialLink
                    href={contactData.socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaLinkedin />
                  </SocialLink>
                )}

                {contactData.socialLinks.instagram && (
                  <SocialLink
                    href={contactData.socialLinks.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaInstagram />
                  </SocialLink>
                )}
              </SocialLinks>
            </InfoCard>
          </ContactInfo>

          <ContactFormContainer
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <ContactForm />
          </ContactFormContainer>
        </ContactGrid>
      </Section>

      <MapSection>
        <SectionTitle
          title="Our Location"
          subtitle="Visit us at SRB Towers, Bhubaneswar, Odisha."
        />

        <MapContainer>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3742.2875365321633!2d85.81897867497655!3d20.296720980668566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1909d2d5170aa5%3A0xfc580e2b68b33fa8!2sSRB%20Towers%2C%20Bhubaneswar%2C%20Odisha%20751024!5e0!3m2!1sen!2sin!4v1649930221157!5m2!1sen!2sin"
            title="Wipster Technologies Office Location - SRB Towers"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </MapContainer>
      </MapSection>
    </>
  );
};

export default Contact;
