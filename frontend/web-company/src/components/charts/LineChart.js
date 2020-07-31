// external dependencies
import React, { PureComponent } from 'react';
import BillboardChart from 'react-billboardjs';
import 'react-billboardjs/lib/billboard.css';

//0~1 사이의 범위
const LINE_CHART_DATA = {
  columns: [
    ['anger', 0.919, 0.8, 0.53, 0.2, 0.445, 0.22],
    ['contempt', 0.222, 0.555, 0.243, 0.111, 0.989, 0.5],
    ['disgust', 0.523, 0.234, 0.35, 0.256, 0.777, 0.137],
    ['fear', 0.259, 0.346, 0.547, 0.215, 0.474, 0.35],
    ['happiness', 0.02, 0.67, 0.37, 0.45, 0.873, 0.657],
    ['neutral', 0.685, 0.24, 0.345, 0.87, 0.234, 0.157],
    ['sadness', 0.43, 0.48, 0.457, 0.3, 0.75, 0.52],
    ['surprise', 0.45, 0.5, 0.324, 0.748, 0.49, 0.234],
  ],
  type: 'line',
};

const SUBCHART = {
  show: false,
};

class LineChart extends PureComponent {
  static displayName = 'LineChart';

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
                  ? ['data3', 130, 150, 200, 300, 200, 100]
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
        data={this.state.data}
        isPure
        ref={this.getRef}
        subchart={SUBCHART}
      />
    );
  }
}

export default LineChart;
