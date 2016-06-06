import React, { PropTypes } from 'react';

function ProgressBar(props) {
  const { min, max, value, sufix, prefix } = props;
  const lineSize = (value / (max - min)) * 100;
  const lineStyle = { width: `${lineSize}%` };

  return (
    <div className="qr-progress-bar-wrapper">
      <div className="qr-progress-bar-label detail-3-color">
        {prefix}
        {value}
        {sufix}
      </div>
      <div className="qr-progress-bar">
        <div className="qr-progress-bar-line detail-4-bg-color" style={lineStyle}></div>
      </div>
    </div>
  );
}

ProgressBar.propTypes = {
  min: PropTypes.number,
  max: PropTypes.number,
  value: PropTypes.number,
  sufix: PropTypes.string,
  prefix: PropTypes.string
};


ProgressBar.defaultProps = {
  min: 0,
  max: 100,
};

export default ProgressBar;
