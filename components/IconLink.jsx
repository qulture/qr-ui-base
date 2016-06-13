import React, { Component, PropTypes } from 'react';
import { ColorHelpers } from './../helpers';
import Icon from './Icon';
import Text from './Text';

function IconLink(props) {
  const { children, type, size, fontSize, link, color, action } = props;
  const className = `qr-icon-link ${size} ${color}-color ${props.className}`;
  const style = ColorHelpers.generateStyleForColor('color', color);

  return (
    <a href={link} onClick={action} className={className} style={style}>
      <Icon type={type} size={size} color={color} />
      <Text color={color} size={fontSize}>{children}</Text>
    </a>
  );
}

IconLink.propTypes = {
  type: PropTypes.string.isRequired,
  size: PropTypes.string,
  fontSize: PropTypes.string,
  color: PropTypes.string,
  link: PropTypes.string,
  action: PropTypes.func,
  className: PropTypes.string,
};

IconLink.defaultProps = {
  size: 'medium',
  color: 'main',
};

export default IconLink;
