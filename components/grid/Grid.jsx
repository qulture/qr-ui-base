import React, { Component, PropTypes } from 'react';

function Grid(props) {
  const { direction, fullHeight, align, children, noWrap, justify } = props;

  let className = `qr-grid ${direction}-direction ${align}-align justify-${justify}`;
  if(!!fullHeight) className += ' full-height';
  if(!!noWrap) className += ' no-wrap';
  if(!!noWrap) className += ' boxed';

  return (
    <div className={className}>
      {children}
    </div>
  );
}

Grid.propTypes = {
  direction: PropTypes.string,
  align: PropTypes.string,
  justify: PropTypes.string,
  fullHeight: PropTypes.bool,
  noWrap: PropTypes.bool,
  boxed: PropTypes.bool,
};

export default Grid
