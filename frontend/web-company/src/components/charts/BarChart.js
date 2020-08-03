// external dependencies
import React, { PureComponent } from 'react';
//import PropTypes from "prop-types";
import BillboardChart from 'react-billboardjs';
import 'react-billboardjs/lib/billboard.css';

const CHART_DATA = {
  columns: [
    //["total", 230, 200, 100, 400, 150],
    ['man', 130, 90, 40, 200, 100],
    ['woman', 100, 110, 60, 200, 50],
  ],
  data: { groups: [['man', 'waman']] },
  type: 'bar',
  labels: {
    colors: 'white',
    centered: true,
  },
};

const SIZE = {
  height: 400,
};

const CHART_AXIS = {
  //rotated: true,
  x: {
    categories: ['A광고', 'B광고', 'C광고', 'D광고', 'F광고'],
    type: 'category',
  },
};

const DOM_PROPS = {
  'data-type': 'bar',
};

class BarChart extends PureComponent {
  static displayName = 'BarChart';

  state = {
    data: null,
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState(
        () => ({
          data: CHART_DATA,
        }),
        //() => {
        //  setTimeout(() => {
        //    this.element.loadData({
        //      columns: [["data3", 130, 150, 200, 300, 200, 100]],
        //    });

        //    console.log(BillboardChart.getInstances());
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
    const { data } = this.state;

    if (!data) {
      return <p>Loading...</p>;
    }

    return (
      <BillboardChart
        axis={CHART_AXIS}
        size={SIZE}
        className="bar"
        data={data}
        domProps={DOM_PROPS}
        ref={this.getRef}
      />
    );
  }
}

export default BarChart;
