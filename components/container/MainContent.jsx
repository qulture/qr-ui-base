import React, { PropTypes } from 'react';

function MainContent(props) {
  const { children, withPaddingLeft } = props;
  let className = 'qr-main-content';
  if(!!withPaddingLeft) className += ' with-padding-left';

  return (
    <div className={className}>
      {children}
    </div>
  );
}

export default MainContent;
