import React, { PropTypes } from 'react';
import { ColorHelpers } from './../helpers';

function Link(props) {
  let { children, link, action, color, className, isSubmit } = props;
  className += ` clicable ${color}-color`;
  const style = ColorHelpers.generateStyleForColor('color', color);

  const commonProps = {
    href: link,
    onClick: action,
    className,
    style
  };

  if(isSubmit) return <button type="submit" {...commonProps}>{children}</button>;
  return <a {...commonProps}>{children}</a>;
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
