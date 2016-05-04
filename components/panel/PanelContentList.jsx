import React, { PropTypes } from 'react';

function PanelContentList(props) {
  const { children } = props;

  return (
    <ul className="qr-panel-content-list">
      {children}
    </ul>
  );
}

export default PanelContentList;
