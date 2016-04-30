import React, { Component, PropTypes } from 'react';

function GridItem(props) {
  const { l, xl, m, s, gutter, grow, children } = props;

  let className = 'qr-grid-item';
  if(!!l) className += ` l-${l}`;
  if(!!xl) className += ` xl-${xl}`;
  if(!!m) className += ` m-${m}`;
  if(!!s) className += ` s-${s}`;
  if(!!gutter) className += ` ${gutter}-gutter`;
  if(!!grow) className += ` fg-${grow}`;

  return (
    <div className={className}>
      {children}
    </div>
  );
}

GridItem.propTypes = {
  l: PropTypes.number,
  xl: PropTypes.number,
  m: PropTypes.number,
  s: PropTypes.number,
  grow: PropTypes.number,
  gutter: PropTypes.string,
};

export default GridItem;
