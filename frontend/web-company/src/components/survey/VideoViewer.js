import React from 'react';
import styled from 'styled-components';
import ReactPlayer from 'react-player';
import palette from '../../lib/styles/palette';

const VideoViewerBlock = styled.div`
  h2 {
    font-size: 1.3125rem;
  }
  p {
    font-size: 1rem;
    color: ${palette.gray[8]};
  }
`;

const VideoViewer = ({ videoPath, error, loading }) => {
  if (error) {
    return <VideoViewerBlock>오류가 발생했습니다.</VideoViewerBlock>;
  }
  if (loading || !videoPath) {
    return null;
  }
  return (
    <ReactPlayer
      url={videoPath}
      playing="true"
      loop="true"
      width="480px"
      height="270px"
    />
  );
};

export default VideoViewer;
