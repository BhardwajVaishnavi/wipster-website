import React from 'react';
import styled from 'styled-components';

interface VideoBackgroundProps {
  src: string;
  overlayColor?: string;
  children?: React.ReactNode;
  className?: string;
}

const VideoContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const VideoElement = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
  transform: scale(1.05);
  filter: brightness(1.1) contrast(1.1);
  object-position: center 20%; /* Adjust vertical position of the video */
`;

const Overlay = styled.div<{ overlayColor: string }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to bottom,
    ${({ overlayColor }) => overlayColor},
    rgba(0, 0, 0, 0.8)
  );
  z-index: 1;
`;

const Content = styled.div`
  position: relative;
  z-index: 2;
  width: 100%;
  height: 100%;
`;

const VideoBackground: React.FC<VideoBackgroundProps> = ({
  src,
  overlayColor = 'rgba(0, 0, 0, 0.5)',
  children,
  className,
}) => {
  return (
    <VideoContainer className={className}>
      <VideoElement
        autoPlay
        loop
        muted
        playsInline
        src={src}
      />
      <Overlay overlayColor={overlayColor} />
      <Content>{children}</Content>
    </VideoContainer>
  );
};

export default VideoBackground;
