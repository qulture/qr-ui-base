import React, { PropTypes } from 'react';

function Separator(props) {
  const { size, withLine, lineWidth, lineStyle, lineColor } = props;

  const style = { borderWidth: lineWidth };
  const lineClassName = `qr-separator-line ${lineStyle}-border ${lineColor}-border-color`;
  const separatorDOMItem = (!!withLine || !!lineStyle || !!lineWidth || !!lineColor) ? <div className={lineClassName} style={style}></div> : false;

  const className = `qr-separator ${size}`;

  return (
    <div className={className}>
      {separatorDOMItem}
    </div>
  );
}

Separator.propTypes = {
  size: PropTypes.string,
  withLine: PropTypes.bool,
  lineWidth: PropTypes.number,
  lineStyle: PropTypes.string,
  lineColor: PropTypes.string,
};

export default Separator;
