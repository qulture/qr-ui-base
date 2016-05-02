import React, { PropTypes, Component } from 'react';
import ReactDOM from 'react-dom';

class ProgressChart extends Component {
  constructor(props) {
    super(props);
    this.sizes = {
      default: '89px',
      large: '150px'
    }
  }

  getSize() {
    const { size } = this.props;
    return _.result(this.sizes, size, this.sizes.default);
  }

  componentDidMount() {
    const { value, max, onDraw } = this.props;
    const data = { series: [value, max - value] };
    const size = this.getSize();
    const options = { donut: true, showLabel: false, donutWidth: 1, width: size, height: size };
    const element = ReactDOM.findDOMNode(this);
    const chart = new Chartist.Pie(element, data, options);
    if(!!onDraw) chart.on('draw', onDraw);
  }

  render() {
    const { value, max, size, color, label, sufix, prefix } = this.props;
    const className = `qr-progress-chart ${color}-color ${size}`;
    const labelDOMItem = !!label ? <div className="qr-progress-chart-label">{label}</div> : false;

    return (
      <div className={className}>
        <div className="qr-progress-chart-info">
          <div className="qr-progress-chart-number">
            <div className="qr-progress-chart-label-prefix">{prefix}</div>
            {value}
            <div className="qr-progress-chart-label-sufix">{sufix}</div>
          </div>
          {labelDOMItem}
        </div>
      </div>
    );
  }
}

ProgressChart.propTypes = {
  value: PropTypes.number.isRequired,
  max: PropTypes.number,
  onDraw: PropTypes.func,
  color: PropTypes.string,
  size: PropTypes.string,
  label: PropTypes.string,
  sufix: PropTypes.string,
  prefix: PropTypes.string,
};

ProgressChart.defaultProps = {
  max: 100,
  color: 'main'
};

export default ProgressChart;
