import React, { PropTypes } from 'react';
import { ColorHelpers } from './../../helpers';

function WizardItem(props) {
  const { children, completed, current, link, action } = props
  let className = 'qr-wizard-item';
  if(!!completed) className += ' completed';

  let style = {};
  if(!!current) {
    className += ' current';
    style = ColorHelpers.generateStyleForColor(['bg', 'border'], 'main');
  }

  return (
    <a href={link} onClick={action} className={className} style={style}>
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
