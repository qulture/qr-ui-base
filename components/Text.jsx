import React, { PropTypes } from 'react';
import { ColorHelpers } from './../helpers';

function Text(props) {
  let { children, color, className, uppercase, size, weight, wrapper } = props;
  className += ` ${color}-color ${size}-font-size ${weight}-weight`;
  if(!!uppercase) className += ' uppercase';
  const style = ColorHelpers.generateStyleForColor('color', color);
  const commonProps = { className, style };

  if(wrapper === 'p') return <p {...commonProps}>{children}</p>;
  if(wrapper === 'div') return <div {...commonProps}>{children}</div>;
  return <span {...commonProps}>{children}</span>;
}

Text.propTypes = {
  color: PropTypes.string,
  className: PropTypes.string,
  uppercase: PropTypes.bool,
  size: PropTypes.string,
  wrapper: PropTypes.string,
  weight: PropTypes.string,
};

Text.defaultProps = {
  className: '',
  color: 'detail-1'
};

export default Text;
