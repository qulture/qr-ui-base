import React, { Component, PropTypes } from 'react';

function Icon(props) {
  const { type, size, link, color } = props;
  const className = `icon-${type} ${size} ${color}-color ${props.className}`;
  let iconComponent = !!link ? <a href={link} className={className}></a> : <span className={className}></span>;

  return iconComponent;
}

Icon.propTypes = {
  type: PropTypes.string.isRequired,
  size: PropTypes.string,
  color: PropTypes.string,
  link: PropTypes.string,
  className: PropTypes.string
};

Icon.defaultProps = {
  size: 'medium',
  color: 'main',
  className: ''
};

export default Icon;
