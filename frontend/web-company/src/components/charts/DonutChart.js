import React from 'react';
import BillboardChart from 'react-billboardjs';
import 'react-billboardjs/lib/billboard.css';

const SIZE = {
  height: 350,
};
const STYLE = {
  display: 'inline-block',
};

const DonutChart = ({ data }) => {
  return data && <BillboardChart data={data} size={SIZE} style={STYLE} />;
};

export default DonutChart;
