import React from 'react';
import styled from 'styled-components';
import Main from '../common/Main';
import palette from '../../lib/styles/palette';
import AreaRangeChart from '../charts/AreaRangeChart';
import DonutChart from '../charts/DonutChart';
import BarChart from '../charts/BarChart';

const DashboardViewerBlock = styled(Main)`
  display: grid;
  grid-template-columns: repeat(2, 50%);
  grid-template-rows: 50px 400px 400px;
  grid-gap: 1rem;
  h2 {
    grid-column: 1 / 3;
    grid-row: 1/ 2;
  }
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

  @media (max-width: 1024px) {
    grid-template-rows: 50px 400px 400px 400px;
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
  }
`;

const DashboardItem = styled.div`
  background: ${palette.indigo[1]};
`;

// 여기 밑에 one, two, three 적혀있는 안에다가 넣으면 됩니당
const DashboardViewer = ({ surveysAnswers, error, loading }) => {
  return (
    <>
      <DashboardViewerBlock>
        <h2>설문 현황</h2>
        <DashboardItem className="one">
          <AreaRangeChart />
        </DashboardItem>
        <DashboardItem className="two">
          <DonutChart />
        </DashboardItem>
        <DashboardItem className="three">
          <BarChart />
        </DashboardItem>
      </DashboardViewerBlock>
    </>
  );
};

export default DashboardViewer;
