import React, { PropTypes } from 'react';

function HorizontalTimeline(props) {
  const { children } = props;

  return (
    <div className="qr-horizontal-timeline">
      {children}
    </div>
  );
}

export default HorizontalTimeline;
