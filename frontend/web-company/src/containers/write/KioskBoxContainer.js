import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import KioskBox from '../../components/write/KioskBox';
import { changeField } from '../../modules/write';

const KioskBoxContainer = () => {
  const kiosks = useSelector((state) => state.write.kiosks);

  return <KioskBox kiosks={kiosks} />;
};

export default KioskBoxContainer;
