import React from 'react';
import BillboardChart from 'react-billboardjs';
import 'react-billboardjs/lib/billboard.css';

const SIZE = {
  height: 350,
};
const CHART_AXIS = {
  x: {
    type: 'timeseries',
    tick: {
      format: '%Y-%m-%d',
    },
  },
};

const AreaRangeChart = ({ data }) => {
  return data && <BillboardChart data={data} size={SIZE} axis={CHART_AXIS} />;
};

export default AreaRangeChart;
