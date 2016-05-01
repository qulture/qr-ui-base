import React, { PropTypes } from 'react';

function Boxed(props) {
  const { children, color, noPadding, rightContent, leftContent, dashed } = props;
  let className=`qr-boxed-wrapper ${color}`;
  if(!!noPadding) className += ' no-padding';
  if(!!dashed) className += ' dashed-border';
  const rightContentDOMItem = !!rightContent ? <div className="right-content">{rightContent}</div> : '';
  const leftContentDOMItem = !!leftContent ? <div className="left-content">{leftContent}</div> : '';

  return (
    <div className={className}>
      {leftContentDOMItem}
      {children}
      {rightContentDOMItem}
    </div>
  );
}

Boxed.propTypes = {
  color: PropTypes.string,
  noPadding: PropTypes.bool,
  rightContent: PropTypes.node,
  leftContent: PropTypes.node,
  dashed: PropTypes.bool
}

export default Boxed;
