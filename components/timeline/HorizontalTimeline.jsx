import React, { PropTypes } from 'react';

function HorizontalTimeline(props) {
  const { children } = props;

  return (
    <div className="qr-periods-bar">
      {children}
    </div>
  );
}

export default HorizontalTimeline;
