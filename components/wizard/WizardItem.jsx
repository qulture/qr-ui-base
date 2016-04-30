import React, { PropTypes } from 'react';

function WizardItem(props) {
  const { children, completed, current, link, action } = props
  let className = 'qr-wizard-item';
  if(!!current) className += ' current';
  if(!!completed) className += ' completed';

  return (
    <a href={link} onClick={action} className={className}>
      {children}
    </a>
  );
}

WizardItem.propTypes = {
  completed: PropTypes.bool,
  current: PropTypes.bool,
  link: PropTypes.string,
  action: PropTypes.func
};

export default WizardItem;
