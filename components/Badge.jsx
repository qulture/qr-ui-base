import React, { Component, PropTypes } from 'react';

function Badge(props) {
  const { text, children } = props;

  return (
    <div className="qr-badge">
      {children}
      <div className="qr-badge-content">{text}</div>
    </div>
  );
}

Badge.propTypes = {
  text: PropTypes.node,
  color: PropTypes.string,
  image: PropTypes.string
};

export default Badge;
