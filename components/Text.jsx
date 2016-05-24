import React, { PropTypes } from 'react';
import { ColorHelpers } from './../helpers';

function Text(props) {
  let { children, color, className, uppercase, size } = props;
  className += ` ${color}-color ${size}-font-size`;
  if(!!uppercase) className += ' uppercase';
  const style = ColorHelpers.generateStyleForColor('color', color);

  return <span className={className} style={style}>{children}</span>;
}

Text.propTypes = {
  color: PropTypes.string,
  className: PropTypes.string,
  uppercase: PropTypes.bool,
  size: PropTypes.string,
};

Text.defaultProps = {
  className: '',
  color: 'main'
};

export default Text;
