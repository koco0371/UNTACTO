import React, { Component } from 'react';

// component and styles
import BillboardChart from 'react-billboardjs';
import 'react-billboardjs/lib/billboard.css';

const ExampleChart = ({ data }) => {
  return <BillboardChart data={data} />;
};

export default ExampleChart;
