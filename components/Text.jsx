import React, { PropTypes } from 'react';
import { ColorHelpers } from './../helpers';

function Text(props) {
  let { children, color, className } = props;
  className += ` ${color}-color`;
  const style = ColorHelpers.generateStyleForColor('color', color);

  const commonProps = {
    className,
    style
  };

  return <span {...commonProps}>{children}</span>;
}

Text.propTypes = {
  color: PropTypes.string,
  className: PropTypes.string
};

Text.defaultProps = {
  className: '',
  color: 'main'
};

export default Text;
