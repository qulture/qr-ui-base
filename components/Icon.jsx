import React, { Component, PropTypes } from 'react';

function Icon(props) {
  const { type, size, link, color, action } = props;
  const className = `icon-${type} ${size} ${color}-color ${props.className}`;
  let iconComponent = !!link || !!action ? <a href={link} onClick={action} className={className}></a> : <span className={className}></span>;

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
