import React, { Component, PropTypes } from 'react';

function ModalContent(props) {
  const { children } = props;

  return (
    <div className="qr-modal-content">
      {children}
    </div>
  );
}

export default ModalContent;
