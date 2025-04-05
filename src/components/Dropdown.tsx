import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaChevronDown } from 'react-icons/fa';

interface DropdownProps {
  title: string;
  items: {
    label: string;
    path: string;
    description?: string;
  }[];
  isActive?: boolean;
}

const DropdownContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  height: 100%;
`;

const DropdownTrigger = styled.button<{ isActive: boolean }>`
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
  font-family: inherit;
  font-size: inherit;
  padding: 0;
  color: ${({ isActive, theme }) =>
    isActive ? theme.colors.primary : theme.colors.light};
  font-weight: ${({ isActive, theme }) =>
    isActive ? theme.fontWeights.semibold : theme.fontWeights.normal};

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }

  svg {
    font-size: 0.75rem;
    transition: transform 0.3s ease;
    transform: ${({ isActive }) => isActive ? 'rotate(180deg)' : 'rotate(0)'};
  }
`;

const DropdownMenu = styled(motion.div)`
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  min-width: 220px;
  background-color: #F8F9FA;
  border-radius: 8px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  padding: 12px;
  z-index: 100;
  margin-top: 10px;

  &::before {
    content: '';
    position: absolute;
    top: -6px;
    left: 50%;
    transform: translateX(-50%);
    width: 12px;
    height: 12px;
    background-color: #F8F9FA;
    border-radius: 2px;
    transform: translateX(-50%) rotate(45deg);
  }
`;

const DropdownItem = styled(Link)`
  display: block;
  padding: 10px 15px;
  color: #333333;
  text-decoration: none;
  border-radius: 6px;
  transition: all 0.2s ease;

  &:hover {
    background-color: ${({ theme }) => `rgba(78, 205, 196, 0.1)`};
    color: ${({ theme }) => theme.colors.primary};
    transform: translateX(5px);
  }
`;

const DropdownItemWithDescription = styled(DropdownItem)`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const ItemLabel = styled.span`
  font-weight: ${({ theme }) => theme.fontWeights.medium};
`;

const ItemDescription = styled.span`
  font-size: 0.75rem;
  color: #666666;
`;

const dropdownVariants = {
  hidden: {
    opacity: 0,
    y: -10,
    scale: 0.95,
    transition: {
      duration: 0.2
    }
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.3,
      ease: [0.23, 1, 0.32, 1]
    }
  }
};

const Dropdown: React.FC<DropdownProps> = ({ title, items, isActive = false }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <DropdownContainer ref={dropdownRef}>
      <DropdownTrigger
        onClick={handleToggle}
        isActive={isActive || isOpen}
      >
        {title}
        <FaChevronDown />
      </DropdownTrigger>

      <AnimatePresence>
        {isOpen && (
          <DropdownMenu
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={dropdownVariants}
          >
            {items.map((item, index) => (
              item.description ? (
                <DropdownItemWithDescription
                  key={index}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                >
                  <ItemLabel>{item.label}</ItemLabel>
                  <ItemDescription>{item.description}</ItemDescription>
                </DropdownItemWithDescription>
              ) : (
                <DropdownItem
                  key={index}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </DropdownItem>
              )
            ))}
          </DropdownMenu>
        )}
      </AnimatePresence>
    </DropdownContainer>
  );
};

export default Dropdown;
