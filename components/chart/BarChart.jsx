import React, { PropTypes, Component } from 'react';
import ReactDOM from 'react-dom';

class BarChart extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { labels, series, height, onDraw } = this.props;
    const data = { series, labels };
    const options = { distributeSeries: true, height };
    const element = ReactDOM.findDOMNode(this);
    const chart = new Chartist.Bar(element, data, options);
    if(!!onDraw) chart.on('draw', onDraw);
  }

  render() {
    return (
      <div className='qr-bar-chart'></div>
    );
  }
}

BarChart.propTypes = {
  labels: PropTypes.array.isRequired,
  series: PropTypes.array.isRequired,
  onDraw: PropTypes.func,
  height: PropTypes.number,
};

export default BarChart;
