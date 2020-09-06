import React from 'react';
import styled from 'styled-components';
import Main from '../common/Main';
import palette from '../../lib/styles/palette';
import { withStyles } from '@material-ui/core/styles';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';

const HelpViewerBlock = styled(Main)`
  margin: 0 auto;
  padding: 4rem;
  width: calc(100%-8rem);

  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-gap: 1rem;

  h2 {
    font-size: 1.75rem;
    color: #373d51;
    padding: 1.3rem;
    margin: 0;
  }

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    padding-left: 2rem;
    padding-right: 2rem;
  }
`;

const Accordion = withStyles({
  root: {
    border: '1px solid rgba(0, 0, 0, .125)',
    boxShadow: 'none',
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
    '&$expanded': {
      margin: 'auto',
    },
  },
  expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles({
  root: {
    color: 'white',
    backgroundColor: `${palette.indigo[5]}`,
    borderBottom: '1px solid rgba(0, 0, 0, .125)',
    marginBottom: -1,
    minHeight: 56,
    '&$expanded': {
      minHeight: 56,
    },
  },
  content: {
    '&$expanded': {
      margin: '12px 0',
    },
  },
  expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiAccordionDetails);

const HelpPageViewer = () => {
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <>
      <HelpViewerBlock>
        <h2>ABOUT UNTACTO</h2>
        <div>
          <Accordion
            square
            expanded={expanded === 'panel1'}
            onChange={handleChange('panel1')}
          >
            <AccordionSummary
              aria-controls="panel1d-content"
              id="panel1d-header"
            >
              <Typography>UNTACTO 란?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                광고와 비대면 설문을 동시에 진행할 수 있는 통합 플랫폼
                서비스입니다.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion
            square
            expanded={expanded === 'panel2'}
            onChange={handleChange('panel2')}
          >
            <AccordionSummary
              aria-controls="panel2d-content"
              id="panel2d-header"
            >
              <Typography>설문은 어떻게 이루어지나요?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                광고와 설문은 키오스크를 통해 이루어집니다. 키오스크는 등록된
                광고영상들을 재생하는 광고판으로 역할을 하다가, 설문 참여자가
                터치하면 설문 조사를 진행합니다. 설문 참여자가 설문 대상이 되는
                광고 영상을 보는 동안, 키오스크는 탑재된 카메라와 표정인식 API를
                통해, 사용자의 실시간 감정 변화를 기록합니다. 광고가 끝난 후
                기록된 데이터는 설문에 대한 응답으로 저장됩니다.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion
            square
            expanded={expanded === 'panel3'}
            onChange={handleChange('panel3')}
          >
            <AccordionSummary
              aria-controls="panel3d-content"
              id="panel3d-header"
            >
              <Typography>어떻게 광고와 설문을 등록할 수 있나요?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                광고와 설문은 동일한 영상을 대상으로 이루어집니다. 먼저 회사
                이메일과 회사명을 포함해 계정을 만든 후, 왼쪽 사이드바의 "Create
                Survey" 메뉴를 클릭해 설문 생성 화면으로 이동할 수 있습니다.
                해당 화면에서 설문 제목과 간단한 설명, 영상, 설문 시작일과 진행
                기간, 키오스크를 입력한 후 등록하여 설문 생성을 진행할 수
                있습니다.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion
            square
            expanded={expanded === 'panel4'}
            onChange={handleChange('panel4')}
          >
            <AccordionSummary
              aria-controls="panel4d-content"
              id="panel4d-header"
            >
              <Typography>
                대시보드와 개별 설문 화면의 그래프는 무엇인가요?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                UNTACTO는 설문 응답들을 그래프로 시각화하여 제공하고 있습니다.
                대시보드에서는 일별 응답현황, 성별 응답비율, 나이별 응답비율 등
                계정별로 진행 중인 설문들에 대한 개괄적인 정보를 보여줍니다.
                개별 설문 화면 아래의 그래프는 해당 설문에 대한 자세한 정보를
                보여주는데, 전체 그룹과 성별, 나이로 구분한 그룹들에 대한
                평균적인 감정 분석 결과를 담고 있습니다.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion
            square
            expanded={expanded === 'panel5'}
            onChange={handleChange('panel5')}
          >
            <AccordionSummary
              aria-controls="panel5d-content"
              id="panel5d-header"
            >
              <Typography>
                응답 결과 데이터를 활용할 수 있는 방법은 무엇인가요?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                기본적으로 UNTACTO에서 제공하는 분석 데이터는 나이, 성별을
                기준으로 구분되어 있기 떄문에, 귀사의 영상 혹은 광고 상품에 대한
                Targeting을 설정하는 데에 크게 도움이 될 수 있습니다. 또한 현재
                구현 예정에 있는 UNTACTO Premium에서는 분석 데이터를 바탕으로
                장소, 시간, 키오스크 등 광고 커스터마이징 서비스를 제공할
                예정입니다.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </HelpViewerBlock>
    </>
  );
};

export default HelpPageViewer;
