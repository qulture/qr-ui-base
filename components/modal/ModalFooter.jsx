import React, { Component, PropTypes } from 'react';

function ModalFooter(props) {
  const { children, action, link, isSubmit } = props;
  let contentDOMItem;
  if(!!action || !!link) {
    contentDOMItem = <a href={link} className="clicable" onClick={action}>{children}</a>;
  } else if(isSubmit) {
    contentDOMItem = <button type="submit" className="clicable">{children}</button>;
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
