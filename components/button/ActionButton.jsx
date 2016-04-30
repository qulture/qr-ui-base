import React, { PropTypes } from 'react';
import Icon from './../Icon';

function ActionButton(props) {
  const { label, children, action } = props;
  const secondaryDOMItem = !!children ? <div className="qr-secondary-actions">{children}</div> : '';
  const type = !!action ? 'button' : 'submit';

  return (
    <div className="qr-action-button">
      <button type={type} onClick={action}>
        <span>
          {label}
        </span>
        <Icon type="angle-right" color="white" size="xx-large" />
      </button>
      {secondaryDOMItem}
    </div>
  );
}

ActionButton.propTypes = {
  label: PropTypes.string.isRequired,
  action: PropTypes.func
}

export default ActionButton;
