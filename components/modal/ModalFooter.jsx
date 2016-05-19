import React, { Component, PropTypes } from 'react';
import Link from './../Link';

function ModalFooter(props) {
  const { children, action, link, isSubmit } = props;
  let contentDOMItem;
  if(!!action || !!link || !!isSubmit) {
    contentDOMItem = <Link link={link} action={action} isSubmit={isSubmit}>{children}</Link>;
  } else {
    contentDOMItem = {children};
  }

  return (
    <div className="qr-modal-footer">
      {contentDOMItem}
    </div>
  );
}

ModalFooter.propTypes = {
  action: PropTypes.func,
  link: PropTypes.string,
  isSubmit: PropTypes.bool
}

export default ModalFooter;
