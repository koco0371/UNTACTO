import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { readVideoPath, unloadVideoPath } from '../../modules/videoPath';
import VideoViewer from '../../components/survey/VideoViewer';
import { withRouter } from 'react-router-dom';

const VideoViewerContainer = ({ match }) => {
  const { surveyId } = match.params;
  const dispatch = useDispatch();
  const { videoPath, error, loading } = useSelector(
    ({ videoPath, loading }) => ({
      videoPath: videoPath.videoPath,
      error: videoPath.error,
      loading: loading['videoPath/READ_VIDEOPATH'],
    }),
  );
  useEffect(() => {
    dispatch(readVideoPath(surveyId));
    return () => {
      dispatch(unloadVideoPath());
    };
  }, [dispatch, surveyId]);
  return <VideoViewer videoPath={videoPath} loading={loading} error={error} />;
};

export default withRouter(VideoViewerContainer);
