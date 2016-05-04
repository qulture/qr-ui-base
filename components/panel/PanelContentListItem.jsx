import React, { PropTypes } from 'react';

function PanelContentListItem(props) {
  const { children } = props;

  return (
    <li className="qr-panel-content-list-item">
      {children}
    </li>
  );
}

export default PanelContentListItem;
