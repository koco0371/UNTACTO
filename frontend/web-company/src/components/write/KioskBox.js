import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import Main from '../common/Main';
import changeField from '../../modules/write';

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
  .selected-kiosk {
    margin-bottom: 0.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    border-radius: 15px;
    border: 1px solid ${palette.indigo[5]};
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

const KioskItem = ({ kiosk, onChangeKiosk }) => {
  const onClickKiosk = (e) => {
    onChangeKiosk({ key: 'selectedKiosk', value: e.target.value });
  };
  return <Kiosk onClick={onClickKiosk}>{kiosk.location}</Kiosk>;
};

const KioskList = ({ kiosks, onChangeField }) => {
  const onChangeKiosk = useCallback((payload) => onChangeField(payload));
  return (
    <KioskListBlock>
      {kiosks.map((kiosk) => (
        <KioskItem
          key={kiosk.kioskId}
          kiosk={kiosk}
          onChangeKiosk={onChangeKiosk}
        />
      ))}
    </KioskListBlock>
  );
};

const KioskBox = ({ kiosks }) => {
  // kiosks는 write 페이지 들어오면 api 당겨오기
  // kiosks와 selectedKiosk는 모두 redux로 관리
  const dispatch = useDispatch();
  const { selectedKiosk } = useSelector(({ write }) => ({
    selectedKiosk: write.selectedKiosk,
  }));
  const onChangeField = useCallback(
    (payload) => dispatch(changeField(payload)),
    [dispatch],
  );

  return (
    <KioskBoxBlock>
      {selectedKiosk ? <h4>선택한 KIOSK</h4> : <h4>KIOSK 를 선택해주세요</h4>}
      {selectedKiosk && (
        <div className="selected-kiosk">{selectedKiosk.location}</div>
      )}
      <KioskList kiosks={kiosks} onChangeField={onChangeField} />
    </KioskBoxBlock>
  );
};

export default KioskBox;
