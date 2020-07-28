import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import Main from '../common/Main';

const KioskBoxBlock = styled(Main)`
  position: absolute;
  top: 700px;
  height: 200px;
  border-top: 1px solid ${palette.gray[2]};

  padding-top: 2rem;
  h4 {
    color: ${palette.gray[8]};
    margin-top: 0;
    margin-bottom: 0.5rem;
  }
`;

const Kiosk = styled.div`
  margin-right: 0.5rem;
  color: ${palette.gray[6]};
  cursor: pointer;
  &:hover {
    opacity: 0.5;
  }
`;

const KioskListBlock = styled.div`
  display: flex;
  margin-top: 0.5rem;
`;

const KioskItem = ({ kiosk }) => <Kiosk>{kiosk.location}</Kiosk>;

const KioskList = ({ kiosks }) => (
  <KioskListBlock>
    {kiosks.map((kiosk) => (
      <KioskItem key={kiosk.kioskId} kiosk={kiosk} />
    ))}
  </KioskListBlock>
);

const KioskBox = () => {
  const kiosks = [
    {
      kioskId: 1,
      location: '역삼',
    },
    {
      kioskId: 2,
      location: '강남',
    },
    {
      kioskId: 3,
      location: '홍대',
    },
    {
      kioskId: 4,
      location: '신촌',
    },
    {
      kioskId: 5,
      location: '종로',
    },
  ];

  return (
    <KioskBoxBlock>
      <h4>KIOSK</h4>
      <KioskList kiosks={kiosks} />
    </KioskBoxBlock>
  );
};

export default KioskBox;
