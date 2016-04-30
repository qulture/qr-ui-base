import React, { Component, PropTypes } from 'react';
import Icon from './Icon';

function IconLink(props) {
  const { children, type, size, link, color, action } = props;
  const className = `qr-icon-link ${size} ${color}-color ${props.className}`;

  return (
    <a href={link} onClick={action} className={className}>
      <Icon type={type} size={size} color={color} />
      <span>{children}</span>
    </a>
  );
}

IconLink.propTypes = {
  type: PropTypes.string.isRequired,
  size: PropTypes.string,
  color: PropTypes.string,
  link: PropTypes.string,
  action: PropTypes.func,
  className: PropTypes.string,
};

IconLink.defaultProps = {
  size: 'medium',
  color: 'main'
};

export default IconLink;
