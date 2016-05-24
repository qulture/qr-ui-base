import React, { PropTypes } from 'react';
import { ColorHelpers } from './../helpers';
import Text from './Text';

function Link(props) {
  let { children, link, action, color, className, isSubmit, size, uppercase } = props;
  className += ` clicable`;

  const commonProps = {
    href: link,
    onClick: action,
    className
  };

  const childrenDOMItem = <Text {...props}>{children}</Text>;

  if(isSubmit) return <button type="submit" {...commonProps}>{childrenDOMItem}</button>;
  return <a {...commonProps}>{childrenDOMItem}</a>;
}

Link.propTypes = {
  color: PropTypes.string,
  link: PropTypes.string,
  action: PropTypes.func,
  className: PropTypes.string,
  uppercase: PropTypes.bool,
  size: PropTypes.string,
};

Link.defaultProps = {
  className: '',
  color: 'main'
};

export default Link;
