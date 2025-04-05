import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'text';
  size?: 'small' | 'medium' | 'large';
  fullWidth?: boolean;
  onClick?: () => void;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  as?: any;
  to?: string;
  href?: string;
  target?: string;
  rel?: string;
}

const StyledButton = styled(motion.button)<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-family: ${({ theme }) => theme.fonts.body};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  border-radius: ${({ theme }) => theme.radii.md};
  transition: ${({ theme }) => theme.transitions.default};
  cursor: pointer;
  border: none;
  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'auto')};

  /* Size Variants */
  padding: ${({ size, theme }) => {
    switch (size) {
      case 'small':
        return `${theme.space[2]} ${theme.space[4]}`;
      case 'large':
        return `${theme.space[4]} ${theme.space[8]}`;
      default:
        return `${theme.space[3]} ${theme.space[6]}`;
    }
  }};

  font-size: ${({ size, theme }) => {
    switch (size) {
      case 'small':
        return theme.fontSizes.sm;
      case 'large':
        return theme.fontSizes.lg;
      default:
        return theme.fontSizes.md;
    }
  }};

  /* Style Variants */
  background-color: ${({ variant, theme }) => {
    switch (variant) {
      case 'secondary':
        return theme.colors.secondary;
      case 'outline':
      case 'text':
        return 'transparent';
      default:
        return theme.colors.primary;
    }
  }};

  color: ${({ variant, theme }) => {
    switch (variant) {
      case 'outline':
        return theme.colors.primary;
      case 'text':
        return theme.colors.primary;
      default:
        return theme.colors.light;
    }
  }};

  border: ${({ variant, theme }) => {
    switch (variant) {
      case 'outline':
        return `2px solid ${theme.colors.primary}`;
      default:
        return 'none';
    }
  }};

  &:hover {
    background-color: ${({ variant, theme }) => {
      switch (variant) {
        case 'secondary':
          return theme.colors.accent;
        case 'outline':
          return theme.colors.primary;
        case 'text':
          return 'rgba(37, 99, 235, 0.1)';
        default:
          return theme.colors.accent;
      }
    }};

    color: ${({ variant, theme }) => {
      switch (variant) {
        case 'outline':
          return theme.colors.light;
        default:
          return theme.colors.light;
      }
    }};
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'medium',
  fullWidth = false,
  onClick,
  disabled = false,
  type = 'button',
  icon,
  iconPosition = 'left',
  ...props
}) => {
  return (
    <StyledButton
      variant={variant}
      size={size}
      fullWidth={fullWidth}
      onClick={onClick}
      disabled={disabled}
      type={type}
      whileTap={{ scale: 0.98 }}
      whileHover={{ scale: 1.02 }}
      {...props}
    >
      {icon && iconPosition === 'left' && icon}
      {children}
      {icon && iconPosition === 'right' && icon}
    </StyledButton>
  );
};

export default Button;
