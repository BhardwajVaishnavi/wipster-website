import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaChevronDown } from 'react-icons/fa';

interface MobileDropdownProps {
  title: string;
  items: {
    label: string;
    path: string;
    description?: string;
  }[];
  isActive?: boolean;
  onItemClick: () => void;
}

const DropdownContainer = styled.div`
  width: 100%;
  margin-bottom: 8px;
`;

const DropdownTrigger = styled.button<{ isOpen: boolean }>`
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 12px 0;
  font-family: inherit;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.light};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  text-align: left;
  transition: all 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }

  svg {
    font-size: 0.75rem;
    transition: transform 0.3s ease;
    transform: ${({ isOpen }) => isOpen ? 'rotate(180deg)' : 'rotate(0)'};
  }
`;

const DropdownMenu = styled(motion.div)`
  overflow: hidden;
  margin-top: 4px;
  margin-bottom: 8px;
`;

const DropdownItem = styled(Link)`
  display: block;
  padding: 8px 0 8px 16px;
  color: #FFFFFF;
  text-decoration: none;
  transition: all 0.2s ease;
  font-size: 0.95rem;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const DropdownItemWithDescription = styled(DropdownItem)`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

const ItemLabel = styled.span`
  font-weight: ${({ theme }) => theme.fontWeights.medium};
`;

const ItemDescription = styled.span`
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.8);
`;

const MobileDropdown: React.FC<MobileDropdownProps> = ({
  title,
  items,
  isActive = false,
  onItemClick
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = () => {
    setIsOpen(false);
    onItemClick();
  };

  return (
    <DropdownContainer>
      <DropdownTrigger
        onClick={handleToggle}
        isOpen={isOpen}
      >
        {title}
        <FaChevronDown />
      </DropdownTrigger>

      <AnimatePresence initial={false}>
        {isOpen && (
          <DropdownMenu
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: 'auto',
              opacity: 1,
              transition: {
                height: {
                  duration: 0.3,
                  ease: [0.04, 0.62, 0.23, 0.98]
                },
                opacity: { duration: 0.2 }
              }
            }}
            exit={{
              height: 0,
              opacity: 0,
              transition: {
                height: { duration: 0.3 },
                opacity: { duration: 0.2 }
              }
            }}
          >
            {items.map((item, index) => (
              item.description ? (
                <DropdownItemWithDescription
                  key={index}
                  to={item.path}
                  onClick={handleItemClick}
                >
                  <ItemLabel>{item.label}</ItemLabel>
                  <ItemDescription>{item.description}</ItemDescription>
                </DropdownItemWithDescription>
              ) : (
                <DropdownItem
                  key={index}
                  to={item.path}
                  onClick={handleItemClick}
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

export default MobileDropdown;
