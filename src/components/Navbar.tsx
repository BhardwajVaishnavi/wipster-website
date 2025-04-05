import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import Button from './Button';
import Dropdown from './Dropdown';
import MobileDropdown from './MobileDropdown';

// Define types for navigation links
interface NavLink {
  path: string;
  label: string;
  dropdown?: DropdownItem[];
}

interface DropdownItem {
  label: string;
  path: string;
  description?: string;
}

const NavContainer = styled(motion.header)<{ scrolled: boolean; transparent: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  transition: all 0.3s ease;
  padding: ${({ scrolled }) => (scrolled ? '8px' : '12px')} 0;
  height: ${({ scrolled }) => (scrolled ? '80px' : '90px')};
  background: ${({ scrolled, transparent }) =>
    scrolled
      ? '#1A1A2E'
      : transparent
      ? 'rgba(26, 26, 46, 0.95)'
      : '#1A1A2E'};
  box-shadow: ${({ scrolled }) =>
    scrolled ? '0 4px 20px rgba(0, 0, 0, 0.3)' : '0 2px 10px rgba(0, 0, 0, 0.2)'};
`;

const NavInner = styled.div`
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.space[4]};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr auto auto;
  }
`;

const SocialIconsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.space[3]};
  margin-top: 12px;
`;

const SocialIcon = styled.a`
  color: ${({ theme }) => theme.colors.light};
  font-size: 1.2rem;
  transition: ${({ theme }) => theme.transitions.default};
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    transform: translateY(-2px);
  }
`;

const Logo = styled(Link)`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  font-size: ${({ theme }) => theme.fontSizes['2xl']};
  color: ${({ theme }) => theme.colors.light};
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 12px;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const NavLinks = styled.nav`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.space[8]};
  justify-content: center;
  margin-top: 12px;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    display: none;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.space[3]};
  justify-content: flex-end;
  margin-top: 12px;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
`;

const NavLink = styled(Link)<{ active?: boolean }>`
  color: ${({ active, theme }) =>
    active ? theme.colors.primary : theme.colors.light};
  text-decoration: none;
  font-weight: ${({ active, theme }) =>
    active ? theme.fontWeights.semibold : theme.fontWeights.normal};
  transition: ${({ theme }) => theme.transitions.default};

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const MobileMenuButton = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.light};
  font-size: 1.5rem;
  cursor: pointer;
  display: none;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    display: block;
  }
`;

const MobileMenu = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: ${({ theme }) => theme.colors.background};
  z-index: 1001;
  display: flex;
  flex-direction: column;
  padding: ${({ theme }) => theme.space[6]};
`;

const MobileMenuHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.space[6]};
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.light};
  font-size: 1.5rem;
  cursor: pointer;
`;

const MobileNavLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space[4]};
  margin-bottom: ${({ theme }) => theme.space[6]};
`;

const MobileNavLink = styled(Link)<{ active?: boolean }>`
  color: ${({ active, theme }) =>
    active ? theme.colors.primary : theme.colors.light};
  text-decoration: none;
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: ${({ active, theme }) =>
    active ? theme.fontWeights.semibold : theme.fontWeights.normal};
  padding: ${({ theme }) => theme.space[3]} 0;
  transition: ${({ theme }) => theme.transitions.default};

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const MobileButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space[4]};
  margin-top: auto;
`;

const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1000;
`;

// Dropdown menu items
const servicesDropdown: DropdownItem[] = [
  {
    label: 'Web Development',
    path: '/services/web-development',
    description: 'Custom websites and web applications'
  },
  {
    label: 'Mobile Development',
    path: '/services/mobile-development',
    description: 'iOS and Android app development'
  },
  {
    label: 'Game Development',
    path: '/services/game-development',
    description: 'Engaging games for multiple platforms'
  },
  {
    label: 'Blockchain Development',
    path: '/services/blockchain-development',
    description: 'Smart contracts and decentralized applications'
  },
  {
    label: 'UI/UX Design',
    path: '/services/ui-ux-design',
    description: 'User-centered design solutions'
  },
  {
    label: 'Cloud Solutions',
    path: '/services/cloud-solutions',
    description: 'AWS, Azure, and Google Cloud services'
  },
  {
    label: 'DevOps',
    path: '/services/devops',
    description: 'CI/CD pipelines and infrastructure automation'
  },
  {
    label: 'IT Consulting',
    path: '/services/consulting',
    description: 'Strategic technology consulting'
  },
];

const aboutDropdown: DropdownItem[] = [
  { label: 'Our Story', path: '/about/story' },
  { label: 'Our Team', path: '/team' },
  { label: 'Our Process', path: '/about/process' },
  { label: 'Careers', path: '/careers' },
];

const portfolioDropdown: DropdownItem[] = [
  { label: 'Case Studies', path: '/portfolio/case-studies' },
  { label: 'Client Projects', path: '/portfolio' },
  { label: 'Testimonials', path: '/testimonials' },
];

const navLinks: NavLink[] = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About', dropdown: aboutDropdown },
  { path: '/services', label: 'Services', dropdown: servicesDropdown },
  { path: '/portfolio', label: 'Portfolio', dropdown: portfolioDropdown },
  { path: '/blog', label: 'Blog' },
  { path: '/contact', label: 'Contact' },
];

interface NavbarProps {
  transparent?: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ transparent = false }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <NavContainer
      scrolled={scrolled}
      transparent={transparent}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <NavInner>
        <SocialIconsContainer>
          <SocialIcon href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook />
          </SocialIcon>
          <SocialIcon href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </SocialIcon>
          <SocialIcon href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </SocialIcon>
          <SocialIcon href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </SocialIcon>
        </SocialIconsContainer>
        <NavLinks>
          {navLinks.map((link) => (
            link.dropdown ? (
              <Dropdown
                key={link.path}
                title={link.label}
                items={link.dropdown}
                isActive={location.pathname.startsWith(link.path)}
              />
            ) : (
              <NavLink
                key={link.path}
                to={link.path}
                active={location.pathname === link.path}
              >
                {link.label}
              </NavLink>
            )
          ))}
        </NavLinks>

        <ButtonGroup>
          <Button variant="outline" size="small">
            Get a Quote
          </Button>
          <Button size="small" as={Link} to="/contact">Contact Us</Button>
        </ButtonGroup>

        <MobileMenuButton onClick={toggleMobileMenu}>
          <FaBars />
        </MobileMenuButton>
      </NavInner>

      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <Overlay
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMobileMenu}
            />
            <MobileMenu
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
            >
              <MobileMenuHeader>
                <Logo to="/" onClick={closeMobileMenu}>
                  Wipster
                </Logo>
                <CloseButton onClick={closeMobileMenu}>
                  <FaTimes />
                </CloseButton>
              </MobileMenuHeader>

              <MobileNavLinks>
                {navLinks.map((link) => (
                  link.dropdown ? (
                    <MobileDropdown
                      key={link.path}
                      title={link.label}
                      items={link.dropdown}
                      isActive={location.pathname.startsWith(link.path)}
                      onItemClick={closeMobileMenu}
                    />
                  ) : (
                    <MobileNavLink
                      key={link.path}
                      to={link.path}
                      active={location.pathname === link.path}
                      onClick={closeMobileMenu}
                    >
                      {link.label}
                    </MobileNavLink>
                  )
                ))}
              </MobileNavLinks>

              <MobileButtonGroup>
                <Button variant="outline" size="medium" fullWidth>
                  Get a Quote
                </Button>
                <Button
                  size="medium"
                  as={Link}
                  to="/contact"
                  onClick={closeMobileMenu}
                  fullWidth
                >
                  Contact Us
                </Button>
              </MobileButtonGroup>
            </MobileMenu>
          </>
        )}
      </AnimatePresence>
    </NavContainer>
  );
};

export default Navbar;
