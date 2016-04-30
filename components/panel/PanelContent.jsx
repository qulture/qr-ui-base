import React, { PropTypes } from 'react';

function PanelContent(props) {
  const { children } = props;

  return (
    <div className="qr-panel-content">
      {children}
    </div>
  );
}

export default PanelContent;
