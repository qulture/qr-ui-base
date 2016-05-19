import React, { PropTypes } from 'react';
import { ColorHelpers } from './../../helpers';

function Boxed(props) {
  const { children, color, noPadding, rightContent, leftContent, dashed } = props;
  let className=`qr-boxed-wrapper ${color}-border-color`;
  if(!!noPadding) className += ' no-padding';
  if(!!dashed) className += ' dashed-border';
  if(!!rightContent) className += ' larger-padding-right';
  const rightContentDOMItem = !!rightContent ? <div className="right-content">{rightContent}</div> : '';
  const leftContentDOMItem = !!leftContent ? <div className="left-content">{leftContent}</div> : '';
  const style = ColorHelpers.generateStyleForColor('border', color);

  return (
    <div className={className} style={style}>
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
};

Boxed.defaultProps = {
  color: 'light-detail-1'
};

export default Boxed;
