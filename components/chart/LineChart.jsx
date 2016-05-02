import React, { PropTypes, Component } from 'react';
import ReactDOM from 'react-dom';

class LineChart extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { labels, series, height, onDraw } = this.props;
    const data = { series, labels };
    const options = { fullWidth: true, height };
    const element = ReactDOM.findDOMNode(this);
    const chart = new Chartist.Line(element, data, options);
    if(!!onDraw) chart.on('draw', onDraw);
  }

  render() {
    return (
      <div className='qr-line-chart'></div>
    );
  }
}

LineChart.propTypes = {
  labels: PropTypes.array.isRequired,
  series: PropTypes.array.isRequired,
  onDraw: PropTypes.func,
  height: PropTypes.number,
};

export default LineChart;
