import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaGithub, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import { contactData } from '../data/contactData';

interface FooterProps {
  className?: string;
}

const FooterContainer = styled.footer`
  background-color: ${({ theme }) => theme.colors.dark};
  color: ${({ theme }) => theme.colors.light};
  padding: ${({ theme }) => theme.space[16]} 0 ${({ theme }) => theme.space[8]};
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 5px;
    background: linear-gradient(to right, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.secondary});
  }
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.space[4]};
`;

const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: ${({ theme }) => theme.space[8]};
  margin-bottom: ${({ theme }) => theme.space[12]};

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

const FooterLogo = styled(Link)`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  font-size: ${({ theme }) => theme.fontSizes.xl};
  color: ${({ theme }) => theme.colors.light};
  text-decoration: none;
  margin-bottom: ${({ theme }) => theme.space[4]};
  display: block;
  line-height: 1.4;

  &:hover {
    background: linear-gradient(to right, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.secondary});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    color: transparent;
  }
`;

const FooterDescription = styled.p`
  color: ${({ theme }) => theme.colors.gray};
  margin-bottom: ${({ theme }) => theme.space[6]};
  line-height: ${({ theme }) => theme.lineHeights.relaxed};
`;

const FooterHeading = styled.h4`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: ${({ theme }) => theme.colors.light};
  margin-bottom: ${({ theme }) => theme.space[6]};
  position: relative;
  padding-bottom: ${({ theme }) => theme.space[3]};

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 50px;
    height: 2px;
    background-color: ${({ theme }) => theme.colors.primary};
  }
`;

const FooterLinks = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const FooterLink = styled.li`
  margin-bottom: ${({ theme }) => theme.space[3]};

  a {
    color: ${({ theme }) => theme.colors.gray};
    text-decoration: none;
    transition: ${({ theme }) => theme.transitions.default};
    display: inline-block;

    &:hover {
      color: ${({ theme }) => theme.colors.primary};
      transform: translateX(5px);
    }
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.space[3]};
  margin-top: ${({ theme }) => theme.space[4]};
`;

const SocialLink = styled(motion.a)`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.1);
  color: ${({ theme }) => theme.colors.light};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: ${({ theme }) => theme.transitions.default};

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    transform: translateY(-5px);
  }
`;

const ContactItem = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: ${({ theme }) => theme.space[4]};

  svg {
    margin-right: ${({ theme }) => theme.space[3]};
    color: ${({ theme }) => theme.colors.primary};
    margin-top: 4px;
  }

  p {
    color: ${({ theme }) => theme.colors.gray};
    line-height: ${({ theme }) => theme.lineHeights.relaxed};
  }
`;

const Divider = styled.hr`
  border: none;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  margin: ${({ theme }) => theme.space[8]} 0;
`;

const Copyright = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${({ theme }) => theme.colors.gray};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column;
    gap: ${({ theme }) => theme.space[4]};
    text-align: center;
  }
`;

const FooterNav = styled.nav`
  display: flex;
  gap: ${({ theme }) => theme.space[6]};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-wrap: wrap;
    justify-content: center;
    gap: ${({ theme }) => theme.space[4]};
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

const Footer: React.FC<FooterProps> = ({ className }) => {
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer className={className}>
      <FooterContent>
        <FooterGrid>
          <FooterColumn>
            <FooterLogo to="/">
              Wipster Technologies Private Limited
            </FooterLogo>
            <FooterDescription>
              We provide innovative IT solutions that drive business growth and digital transformation. Our expert team creates custom software that solves real-world challenges.
            </FooterDescription>
            <SocialLinks>
              <SocialLink
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaFacebook />
              </SocialLink>
              <SocialLink
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaTwitter />
              </SocialLink>
              <SocialLink
                href="https://www.instagram.com/wipstertechnology/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaInstagram />
              </SocialLink>
              <SocialLink
                href="https://www.linkedin.com/company/wipster-technologies"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaLinkedin />
              </SocialLink>
              <SocialLink
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaGithub />
              </SocialLink>
            </SocialLinks>
          </FooterColumn>

          <FooterColumn>
            <FooterHeading>Quick Links</FooterHeading>
            <FooterLinks>
              <FooterLink><Link to="/">Home</Link></FooterLink>
              <FooterLink><Link to="/about">About Us</Link></FooterLink>
              <FooterLink><Link to="/services">Services</Link></FooterLink>
              <FooterLink><Link to="/portfolio">Portfolio</Link></FooterLink>
              <FooterLink><Link to="/team">Our Team</Link></FooterLink>
              <FooterLink><Link to="/blog">Blog</Link></FooterLink>
              <FooterLink><Link to="/contact">Contact</Link></FooterLink>
            </FooterLinks>
          </FooterColumn>

          <FooterColumn>
            <FooterHeading>Our Services</FooterHeading>
            <FooterLinks>
              <FooterLink><Link to="/services/web-development">Web Development</Link></FooterLink>
              <FooterLink><Link to="/services/mobile-development">Mobile Development</Link></FooterLink>
              <FooterLink><Link to="/services/ui-ux-design">UI/UX Design</Link></FooterLink>
              <FooterLink><Link to="/services/cloud-solutions">Cloud Solutions</Link></FooterLink>
              <FooterLink><Link to="/services/devops">DevOps</Link></FooterLink>
              <FooterLink><Link to="/services/consulting">IT Consulting</Link></FooterLink>
              <FooterLink><Link to="/services/support">Support & Maintenance</Link></FooterLink>
            </FooterLinks>
          </FooterColumn>

          <FooterColumn>
            <FooterHeading>Contact Us</FooterHeading>
            <ContactItem>
              <FaMapMarkerAlt />
              <p>{contactData.address}</p>
            </ContactItem>
            <ContactItem>
              <FaPhone />
              <p>{contactData.phone}</p>
            </ContactItem>
            <ContactItem>
              <FaEnvelope />
              <p>{contactData.email}</p>
            </ContactItem>
          </FooterColumn>
        </FooterGrid>

        <Divider />

        <Copyright>
          <p>&copy; {currentYear} Wipster Technologies. All rights reserved.</p>
          <FooterNav>
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Service</Link>
            <Link to="/cookies">Cookie Policy</Link>
            <Link to="/sitemap">Sitemap</Link>
          </FooterNav>
        </Copyright>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
