import React, { PropTypes } from 'react';
import { ColorHelpers } from './../helpers';

function Link(props) {
  let { children, link, action, color, className } = props;
  className += ` ${color}-color`;
  const style = ColorHelpers.generateStyleForColor('color', color);

  return (
    <a href={link} onClick={action} className={className} style={style}>
      {children}
    </a>
  )
}

Link.propTypes = {
  color: PropTypes.string,
  link: PropTypes.string,
  action: PropTypes.func,
  className: PropTypes.string
};

Link.defaultProps = {
  className: '',
  color: 'main'
};

export default Link;
