// external dependencies
import React, { PureComponent } from 'react';
import BillboardChart from 'react-billboardjs';
import 'react-billboardjs/lib/billboard.css';

const CHART_DATA = {
  json: {
    '~20': [],
    '20~29': [],
    '30~39': [],
    '40~49': [],
    '50~59': [],
    '60~': [],
  },
  type: 'pie',
};

const SIZE = {
  height: 400,
};

const STYLE = {
  display: 'inline-block',
};

class DonutChart extends PureComponent {
  static displayName = 'DonutChart';

  componentDidMount() {
    setTimeout(() => {
      this.element.loadData({
        json: {
          '~20': [2, 3, 1],
          '20~29': [1, 5, 5],
          '30~39': [3, 2, 6],
          '40~49': [5, 3, 6],
          '50~59': [3, 1, 2],
          '60~': [1, 2, 3],
        },
      });

      //setTimeout(() => {
      //  this.element.unloadData({
      //    ids: ['data1', 'data2'],
      //  });
      //}, 1000);
    }, 1000);
  }

  element = null;

  getRef = (Instance) => {
    this.element = Instance;
  };

  render() {
    return (
      <BillboardChart
        data={CHART_DATA}
        ref={this.getRef}
        size={SIZE}
        style={STYLE}
      />
    );
  }
}

export default DonutChart;
