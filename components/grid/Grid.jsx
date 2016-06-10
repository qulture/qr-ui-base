import React, { Component, PropTypes } from 'react';

function Grid(props) {
  let { className, style, direction, fullHeight, align, children, noWrap, justify, boxed, fixed } = props;

  className += ` qr-grid ${direction}-direction ${align}-align justify-${justify}`;
  if(!!fullHeight) className += ' full-height';
  if(!!noWrap) className += ' no-wrap';
  if(!!boxed) className += ' boxed';
  if(!!fixed) className += ' fixed';

  return (
    <div className={className} style={style}>
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
  fixed: PropTypes.bool,
  className: PropTypes.string,
  style: PropTypes.object
};

Grid.defaultProps = {
  className: ''
};


export default Grid
