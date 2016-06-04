import React, { PropTypes } from 'react';

function PanelContent(props) {
  const { children, withLeftSpace } = props;
  let className = 'qr-panel-content';
  if(!!withLeftSpace) className += ' with-left-space';

  return (
    <div className={className}>
      {children}
    </div>
  );
}

PanelContent.propTypes = {
  withLeftSpace: PropTypes.bool
}

export default PanelContent;
