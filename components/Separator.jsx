import React, { PropTypes } from 'react';
import { ColorHelpers } from './../helpers';

function Separator(props) {
  const { size, noPaddingBottom, noPaddingTop, withLine, lineSize, lineStyle, lineColor } = props;

  const style = ColorHelpers.generateStyleForColor('border', lineColor);
  style.borderWidth = lineSize;
  const lineClassName = `qr-separator-line ${lineStyle}-border ${lineColor}-border-color`;
  const separatorDOMItem = (!!withLine || !!lineStyle || !!lineSize || !!lineColor) ? <div className={lineClassName} style={style}></div> : false;

  let className = `qr-separator ${size}`;
  if(!!noPaddingTop) className += ' no-padding-top';
  if(!!noPaddingBottom) className += ' no-padding-bottom';

  return (
    <div className={className}>
      {separatorDOMItem}
    </div>
  );
}

Separator.propTypes = {
  size: PropTypes.string,
  noPaddingTop: PropTypes.bool,
  noPaddingBottom: PropTypes.bool,
  withLine: PropTypes.bool,
  lineSize: PropTypes.number,
  lineStyle: PropTypes.string,
  lineColor: PropTypes.string,
};

export default Separator;
