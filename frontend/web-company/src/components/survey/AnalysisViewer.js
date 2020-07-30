import React from 'react';
import styled from 'styled-components';
import Main from '../common/Main';
import palette from '../../lib/styles/palette';
import AreaRangeChart from '../charts/AreaRangeChart';
import DonutChart from '../charts/DonutChart';
import BarChart from '../charts/BarChart';

const AnalysisViewerBlock = styled(Main)`
  background: ${palette.indigo[0]};
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 50px 400px 400px;
  grid-gap: 1rem;
  .one {
    grid-column: 1 / 3;
    grid-row: 2/ 3;
  }
  .two {
    grid-column: 1 / 2;
    grid-row: 3 / 4;
  }
  .three {
    grid-column: 2 / 3;
    grid-row: 3 / 4;
  }
`;

const AnalysisItem = styled.div`
  background: ${palette.indigo[2]};
`;

// 여기 밑에 one, two, three 적혀있는 안에다가 넣으면 됩니당
const AnalysisViewer = () => {
  return (
    <>
      <AnalysisViewerBlock>
        <h2>CompanyName의 설문 종합</h2>
        <AnalysisItem className="one">
          <AreaRangeChart />
        </AnalysisItem>
        <AnalysisItem className="two">
          <DonutChart />
        </AnalysisItem>
        <AnalysisItem className="three">
          <BarChart />
        </AnalysisItem>
      </AnalysisViewerBlock>
    </>
  );
};

export default AnalysisViewer;
