import React from 'react';
import styled from 'styled-components';

interface PlaceholderImageProps {
  width?: string;
  height?: string;
  text?: string;
  bgColor?: string;
  textColor?: string;
  className?: string;
}

const ImageContainer = styled.div<{
  width: string;
  height: string;
  bgColor: string;
  textColor: string;
}>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  background-color: ${({ bgColor }) => bgColor};
  color: ${({ textColor }) => textColor};
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.fontSizes.md};
  border-radius: ${({ theme }) => theme.radii.md};
  padding: ${({ theme }) => theme.space[4]};
  overflow: hidden;
`;

const PlaceholderImage: React.FC<PlaceholderImageProps> = ({
  width = '100%',
  height = '300px',
  text = 'Placeholder Image',
  bgColor = '#E2E8F0',
  textColor = '#4A5568',
  className,
}) => {
  return (
    <ImageContainer
      width={width}
      height={height}
      bgColor={bgColor}
      textColor={textColor}
      className={className}
    >
      {text}
    </ImageContainer>
  );
};

export default PlaceholderImage;
