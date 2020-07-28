import React from "react";
import PropTypes from "prop-types";
import BillboardChart from "react-billboardjs";
import "react-billboardjs/lib/billboard.css";

class AsyncDataBaseChart extends React.PureComponent {
  static propTypes = {
    data: PropTypes.object.isRequired,
  };

  getRef = (ChartInstance) => {
    this.bb = ChartInstance;
  };

  handleChangle() {
    this.bb.loadData({
      columns: [["German", 30, 500, 50, 200, 60, 50]],
      //unload:['German']
    });
  }

  render() {
    return (
      <div>
        <button onClick={() => this.handleChangle()}>change data</button>
        <BillboardChart {...this.props} ref={this.getRef} />
      </div>
    );
  }
}

export default AsyncDataBaseChart;
