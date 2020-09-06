import React from 'react';
import BillboardChart from 'react-billboardjs';
import 'react-billboardjs/lib/billboard.css';

const SIZE = {
  height: 350,
};
const CHART_AXIS = {
  x: {
    categories: ['A', 'B', 'C', 'D', 'F'],
    type: 'category',
  },
};
const DOM_PROPS = {
  'data-type': 'bar',
};

const BarChart = ({ data }) => {
  return (
    data && (
      <BillboardChart
        data={data}
        size={SIZE}
        axis={CHART_AXIS}
        domProps={DOM_PROPS}
      />
    )
  );
};

export default BarChart;
