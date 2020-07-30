import React from 'react';
import styled from 'styled-components';
import Main from '../common/Main';
import palette from '../../lib/styles/palette';

const AnalysisViewerBlock = styled(Main)`
  padding-top: 4rem;
  background: ${palette.indigo[0]};
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 400px);
  grid-gap: 1rem;
  .one {
    grid-column: 1 / 3;
    grid-row: 1/ 2;
  }
  .two {
    grid-column: 1 / 2;
    grid-row: 2 / 3;
  }
  .three {
    grid-column: 2 / 3;
    grid-row: 2 / 3;
  }
`;

const AnalysisItem = styled.div`
  background: ${palette.indigo[2]};
`;

// 여기 밑에 one, two, three 적혀있는 안에다가 넣으면 됩니당
const AnalysisViewer = () => {
  return (
    <AnalysisViewerBlock>
      <AnalysisItem className="one">one</AnalysisItem>
      <AnalysisItem className="two">two</AnalysisItem>
      <AnalysisItem className="three">three</AnalysisItem>
    </AnalysisViewerBlock>
  );
};

export default AnalysisViewer;
