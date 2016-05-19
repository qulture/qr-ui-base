import React, { Component, PropTypes } from 'react';
import { ColorHelpers } from './../helpers';

function Icon(props) {
  const { type, size, link, color, action } = props;
  let className = `icon-${type} ${size} ${color}-color ${props.className}`;
  if(!!link || !!action) className += ' clicable';
  const style = ColorHelpers.generateStyleForColor('color', color);

  const commonProps = { className, style };
  const iconComponent = !!link || !!action ? <a href={link} onClick={action} {...commonProps}></a> : <span {...commonProps}></span>;

  return iconComponent;
}

Icon.propTypes = {
  type: PropTypes.string.isRequired,
  size: PropTypes.string,
  color: PropTypes.string,
  link: PropTypes.string,
  className: PropTypes.string,
  action: PropTypes.func,
};

Icon.defaultProps = {
  size: 'medium',
  color: 'main',
  className: ''
};

export default Icon;
