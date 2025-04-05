import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  light?: boolean;
  size?: 'small' | 'medium' | 'large';
  className?: string;
}

const TitleContainer = styled(motion.div)<{ align?: string; light?: boolean; size?: string }>`
  margin-bottom: ${({ theme }) => theme.space[12]};
  text-align: ${({ align }) => align || 'center'};
  max-width: 800px;
  margin-left: ${({ align }) => (align === 'left' ? '0' : align === 'right' ? 'auto' : 'auto')};
  margin-right: ${({ align }) => (align === 'right' ? '0' : align === 'left' ? 'auto' : 'auto')};

  h2 {
    color: ${({ light, theme }) => (light ? theme.colors.light : theme.colors.text)};
    margin-bottom: ${({ theme }) => theme.space[3]};
    position: relative;
    display: inline-block;
    font-size: ${({ size, theme }) => {
      switch (size) {
        case 'small':
          return theme.fontSizes.xl;
        case 'medium':
          return theme.fontSizes['2xl'];
        case 'large':
        default:
          return theme.fontSizes['3xl'];
      }
    }};

    &::after {
      content: '';
      position: absolute;
      bottom: -10px;
      left: ${({ align }) => (align === 'center' ? '50%' : align === 'right' ? '100%' : '0')};
      transform: ${({ align }) => (align === 'center' ? 'translateX(-50%)' : align === 'right' ? 'translateX(-100%)' : 'none')};
      width: 80px;
      height: 4px;
      background: ${({ theme }) => theme.colors.primary};
      border-radius: ${({ theme }) => theme.radii.full};
    }
  }

  p {
    color: ${({ light, theme }) => (light ? 'rgba(255, 255, 255, 0.8)' : theme.colors.gray)};
    font-size: ${({ theme }) => theme.fontSizes.lg};
    margin-top: ${({ theme }) => theme.space[6]};
    max-width: 600px;
    margin-left: ${({ align }) => (align === 'left' ? '0' : align === 'right' ? 'auto' : 'auto')};
    margin-right: ${({ align }) => (align === 'right' ? '0' : align === 'left' ? 'auto' : 'auto')};
  }
`;

const titleAnimation = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

const subtitleAnimation = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: 0.2,
      ease: 'easeOut',
    },
  },
};

const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  subtitle,
  align = 'center',
  light = false,
  size = 'large',
  className,
}) => {
  return (
    <TitleContainer
      align={align}
      light={light}
      size={size}
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <motion.h2 variants={titleAnimation}>{title}</motion.h2>
      {subtitle && <motion.p variants={subtitleAnimation}>{subtitle}</motion.p>}
    </TitleContainer>
  );
};

export default SectionTitle;
