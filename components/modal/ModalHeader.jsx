import React, { Component, PropTypes } from 'react';

function ModalHeader(props) {
  const { children, title } = props;
  const titleDOMItem = !!title ? <h2 className="closedModal">{title}</h2> : '';

  return (
    <div className="qr-modal-header">
      {titleDOMItem}
      {children}
    </div>
  );
}

ModalHeader.ModalHeader = {
  title: PropTypes.string
}

export default ModalHeader;
