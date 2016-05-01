import React, { Component, PropTypes } from 'react';

class Toggle extends Component {
  constructor(props) {
    super(props);
    const { value } = props;
    this.state = { currentValue: value };
    this.onToggle = this.onToggle.bind(this);
  }

  onToggle() {
    const { valueLeft, valueRight } = this.props;
    const { currentValue } = this.state;
    let newValue;
    if(currentValue === valueRight) {
      newValue = valueLeft
    } else {
      newValue = valueRight
    }
    this.setState({ currentValue: newValue });
  }

  render() {
    const { name, labelLeft, labelRight, valueLeft, valueRight, value, onChange, activeLabelColor } = this.props;
    const { currentValue } = this.state;

    const checkedLeft = currentValue === valueLeft;
    const checkedRight = currentValue === valueRight;

    let toggleClassName = 'qr-toggle';
    if(checkedRight) toggleClassName += ' active';

    const activeLabelClasses = ` ${activeLabelColor}-color normal-weight`;
    const inactiveLabelClasses = ' light-detail-1-color normal-weight';

    let labelLeftClassName = 'qr-toggle-label-left';
    labelLeftClassName += checkedLeft ? activeLabelClasses : inactiveLabelClasses;

    let labelRightClassName = 'qr-toggle-label-right';
    labelRightClassName += checkedRight ? activeLabelClasses : inactiveLabelClasses;

    return (
      <div>
        <div className="hide">
          <input name={name} type="radio" value={valueLeft} onChange={onChange} checked={checkedLeft} />
          <input name={name} type="radio" value={valueRight} onChange={onChange} checked={checkedRight} />
        </div>
        <label className="qr-toggle-wrapper" onClick={this.onToggle}>
          <div className={labelLeftClassName}>{labelLeft}</div>
          <div className={toggleClassName}>
            <div className="qr-toggle-ball"></div>
          </div>
          <div className={labelRightClassName}>{labelRight}</div>
        </label>
      </div>
    );
  }
}

Toggle.propTypes = {
  name: PropTypes.string,
  labelLeft: PropTypes.string,
  valueLeft: PropTypes.any,
  labelRight: PropTypes.string,
  valueRight: PropTypes.any,
  value: PropTypes.any,
  onChange: PropTypes.func,
  activeLabelColor: PropTypes.string
};

Toggle.defaultProps = {
  valueLeft: false,
  valueRight: true,
  activeLabelColor: 'main',
  onChange: () => { console.log(1); }
};

export default Toggle;
