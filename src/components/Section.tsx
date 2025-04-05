import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

interface SectionProps {
  children: React.ReactNode;
  id?: string;
  background?: 'light' | 'dark' | 'primary' | 'secondary' | 'accent' | 'gradient' | 'transparent';
  fullHeight?: boolean;
  padding?: 'small' | 'medium' | 'large' | 'none';
  className?: string;
}

const StyledSection = styled(motion.section)<SectionProps>`
  width: 100%;
  position: relative;
  overflow: hidden;

  min-height: ${({ fullHeight }) => (fullHeight ? '100vh' : 'auto')};

  padding: ${({ padding, theme }) => {
    switch (padding) {
      case 'small':
        return `${theme.space[8]} 0`;
      case 'large':
        return `${theme.space[24]} 0`;
      case 'none':
        return '0';
      default:
        return `${theme.space[16]} 0`;
    }
  }};

  background: ${({ background, theme }) => {
    switch (background) {
      case 'dark':
        return theme.colors.dark;
      case 'primary':
        return theme.colors.primary;
      case 'secondary':
        return theme.colors.secondary;
      case 'accent':
        return theme.colors.accent;
      case 'gradient':
        return `linear-gradient(135deg, ${theme.colors.primary}, ${theme.colors.accent})`;
      case 'transparent':
        return 'transparent';
      default:
        return theme.colors.background;
    }
  }};

  color: ${({ background, theme }) => {
    switch (background) {
      case 'dark':
      case 'primary':
      case 'secondary':
      case 'accent':
      case 'gradient':
        return theme.colors.light;
      case 'transparent':
        return 'inherit';
      default:
        return theme.colors.text;
    }
  }};
`;

const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.space[4]};
  position: relative;
  z-index: 1;
`;

const Section: React.FC<SectionProps> = ({
  children,
  id,
  background = 'light',
  fullHeight = false,
  padding = 'medium',
  className,
  ...props
}) => {
  return (
    <StyledSection
      id={id}
      background={background}
      fullHeight={fullHeight}
      padding={padding}
      className={className}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      {...props}
    >
      <Container>{children}</Container>
    </StyledSection>
  );
};

export default Section;
