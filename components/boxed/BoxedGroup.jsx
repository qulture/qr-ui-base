import React, { PropTypes } from 'react';

function BoxedGroup(props) {
  const { children, borderLeft, rightContent, leftContent } = props;
  let className = 'qr-boxed-group';
  if(!!borderLeft) className += ' border-left';
  const rightContentDOMItem = !!rightContent ? <div className="right-content">{rightContent}</div> : '';
  const leftContentDOMItem = !!leftContent ? <div className="left-content">{leftContent}</div> : '';

  return (
    <div className={className}>
      {leftContentDOMItem}
      {rightContentDOMItem}
      {children}
    </div>
  );
}

BoxedGroup.propTypes = {
  borderLeft: PropTypes.bool,
  rightContent: PropTypes.node,
  leftContent: PropTypes.node,
};

export default BoxedGroup;
