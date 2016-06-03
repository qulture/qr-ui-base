import React, { Component, PropTypes } from 'react';
import { ColorHelpers } from './../helpers';

function Badge(props) {
  const { children, color, content, textColor, contentColor, size } = props;
  const wrapperClassName = `qr-badge ${textColor}-color`;
  const badgeClassName = `qr-badge-content ${color}-bg-color ${contentColor}-color ${size}`;
  const wrapperStyle = ColorHelpers.generateStyleForColor('color', textColor);
  const badgeStyle = _.merge(ColorHelpers.generateStyleForColor('bg', color), ColorHelpers.generateStyleForColor('color', contentColor));

  return (
    <div className={wrapperClassName} style={wrapperStyle}>
      {children}
      <div className={badgeClassName} style={badgeStyle}>{content}</div>
    </div>
  );
}

Badge.propTypes = {
  textColor: PropTypes.string,
  contentColor: PropTypes.string,
  content: PropTypes.node,
  color: PropTypes.string,
  size: PropTypes.string,
};

Badge.defaultProps = {
  color: 'main',
  contentColor: 'white'
};

export default Badge;
