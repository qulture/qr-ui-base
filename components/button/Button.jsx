import _ from 'lodash';
import React, { PropTypes } from 'react';
import { ColorHelpers } from './../../helpers';

function Button(props) {
  const { children, action, link, color, fixedWidth } = props;
  const fixedWidthClass = _.isBoolean(fixedWidth) && fixedWidth ? 'fixed-width' : `fixed-width-${fixedWidth}`;
  const className = `qr-button ${color}-border-color, ${color}-color ${fixedWidthClass}`;
  const style = ColorHelpers.generateStyleForColor(['border', 'color'], color);

  return (
    <a className={className} onClick={action} href={link} style={style}>
      {children}
    </a>
  );
}

Button.propTypes = {
  action: PropTypes.func,
  link: PropTypes.string,
  color: PropTypes.string,
  fixedWidth: PropTypes.any,
}

Button.defaultProps = {
  color: 'detail-4'
}

export default Button;
