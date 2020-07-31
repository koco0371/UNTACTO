// external dependencies
import React, { Component } from 'react';
import BillboardChart from 'react-billboardjs';
import 'react-billboardjs/lib/billboard.css';

//0~1 사이의 범위
const LINE_CHART_DATA = {
  background: {
    color: '#ffffff',
  },
  x: 'x',
  columns: [
    [
      'x',
      '2013-01-01',
      '2013-01-02',
      '2013-01-03',
      '2013-01-04',
      '2013-01-05',
      '2013-01-06',
    ],
    ['total', 130, 240, 200, 500, 250, 350],
    ['survey1', 60, 120, 40, 50, 100, 120],
    ['survey2', 70, 120, 160, 450, 150, 230],
  ],
  types: {
    total: 'area',
    survey1: 'area',
    survey2: 'area',
  },
};

const SIZE = {
  height: 400,
};
const CHART_AXIS = {
  x: {
    type: 'timeseries',
    tick: {
      format: '%Y-%m-%d',
    },
  },
};

class AreaRangeChart extends Component {
  static displayName = 'areaRangeChart';

  state = {
    data: LINE_CHART_DATA,
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState(
        ({ data }) => {
          return {
            data: {
              ...data,
              columns: data.columns.map((values) => {
                return values[0] === 'data3'
                  ? ['survey-3', 150, 140, 110, 155, 130, 115]
                  : values;
              }),
            },
          };
        },
        //() => {
        //  setTimeout(() => {
        //    this.element.unloadData({
        //      ids: "data1",
        //    });
        //  }, 1000);
        //}
      );
    }, 1000);
  }

  element = null;

  getRef = (Instance) => {
    this.element = Instance;
  };

  render() {
    return (
      <BillboardChart
        axis={CHART_AXIS}
        size={SIZE}
        data={this.state.data}
        isPure
        ref={this.getRef}
      />
    );
  }
}

export default AreaRangeChart;
