import React from 'react';
import styled from 'styled-components';
import Main from '../common/Main';
import palette from '../../lib/styles/palette';
import LineChart from '../../components/charts/LineChart';
import { withRouter } from 'react-router-dom';

const AnalysisViewerBlock = styled(Main)`
  top: 20rem;
  display: grid;
  grid-template-columns: repeat(2, 50%);
  grid-template-rows: 50px 400px 400px;
  grid-gap: 1rem;
  @media (max-width: 1024px) {
    top: 40rem;
  }
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
  .empty {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
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
  h3 {
    font-size: 1rem;
    margin-left: 1rem;
  }
`;

const AnalysisViewer = ({ history, surveyAnswer, error, loading }) => {
  if (error) {
    if (error.response.status === 401) {
      history.push('/login');
      return <AnalysisViewerBlock>에러가 발생했습니다</AnalysisViewerBlock>;
    } else {
      return <AnalysisViewerBlock>에러가 발생했습니다</AnalysisViewerBlock>;
    }
  }
  if (!surveyAnswer?.total) {
    return (
      <AnalysisViewerBlock>
        <AnalysisItem className="one empty">
          아직 데이터가 없습니다
        </AnalysisItem>
      </AnalysisViewerBlock>
    );
  }

  const totalData = {
    columns: surveyAnswer?.total,
    type: 'line',
  };
  const youngData = {
    columns: surveyAnswer?.young,
    type: 'line',
  };
  const oldData = {
    columns: surveyAnswer?.old,
    type: 'line',
  };
  const maleData = {
    columns: surveyAnswer?.male,
    type: 'line',
  };
  const femaleData = {
    columns: surveyAnswer?.female,
    type: 'line',
  };

  return (
    <AnalysisViewerBlock>
      <>
        <h2>설문응답 분석</h2>
        <AnalysisItem className="one">
          <h3>전체 설문응답</h3>
          {!loading && surveyAnswer?.total && <LineChart data={totalData} />}
        </AnalysisItem>
        <AnalysisItem className="two">
          <h3>20대이하 설문응답</h3>
          {!loading && surveyAnswer?.young && <LineChart data={youngData} />}
        </AnalysisItem>
        <AnalysisItem className="three">
          <h3>30대이상 설문응답</h3>
          {!loading && surveyAnswer?.old && <LineChart data={oldData} />}
        </AnalysisItem>
        <AnalysisItem className="four">
          <h3>남성 설문응답</h3>
          {!loading && surveyAnswer?.male && <LineChart data={maleData} />}
        </AnalysisItem>
        <AnalysisItem className="five">
          <h3>여성 설문응답</h3>
          {!loading && surveyAnswer?.female && <LineChart data={femaleData} />}
        </AnalysisItem>
      </>
    </AnalysisViewerBlock>
  );
};

export default withRouter(AnalysisViewer);
