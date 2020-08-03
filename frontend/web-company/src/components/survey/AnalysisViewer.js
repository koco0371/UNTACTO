import React from 'react';
import styled from 'styled-components';
import Main from '../common/Main';
import palette from '../../lib/styles/palette';
import LineChart from '../charts/LineChart';

const AnalysisViewerBlock = styled(Main)`
  display: grid;
  grid-template-columns: repeat(2, 50%);
  grid-template-rows: 50px 400px 400px;
  grid-gap: 1rem;
  h2 {
    grid-column: 1 / 3;
    grid-row: 1/ 2;
  }
  left: 0;
  margin-top: 300px;
  background: white;
  grid-template-rows: 50px 400px 400px 400px;

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
  .four {
    grid-column: 1 / 2;
    grid-row: 4 / 5;
  }
  .five {
    grid-column: 2 / 3;
    grid-row: 4 / 5;
  }
  @media (max-width: 1024px) {
    grid-template-rows: 50px 400px 400px 400px 400px 400px;
    padding-left: 2rem;
    padding-right: 2rem;
    .one {
      grid-column: 1 / 3;
      grid-row: 2/ 3;
    }
    .two {
      grid-column: 1 / 3;
      grid-row: 3 / 4;
    }
    .three {
      grid-column: 1 / 3;
      grid-row: 4 / 5;
    }
    .four {
      grid-column: 1 / 3;
      grid-row: 5/ 6;
    }
    .five {
      grid-column: 1 / 3;
      grid-row: 6 / 7;
    }
  }
`;

const AnalysisItem = styled.div`
  background: ${palette.indigo[1]};
`;

// 여기 밑에 one, two, three 적혀있는 안에다가 넣으면 됩니당
const AnalysisViewer = ({ surveyAnswer, error, loading }) => {
  return (
    <>
      <AnalysisViewerBlock>
        <h2>설문 분석</h2>
        <AnalysisItem className="one">
          <LineChart />
        </AnalysisItem>
        <AnalysisItem className="two">
          <LineChart />
        </AnalysisItem>
        <AnalysisItem className="three">
          <LineChart />
        </AnalysisItem>
        <AnalysisItem className="four">
          <LineChart />
        </AnalysisItem>
        <AnalysisItem className="five">
          <LineChart />
        </AnalysisItem>
      </AnalysisViewerBlock>
    </>
  );
};

export default AnalysisViewer;
