import React, { PropTypes } from 'react';

function DropdownItem(props) {
  const { children, link, action } = props;
  const className = 'qr-dropdown-option';

  if(!!link || !!action) return <a href={link} onClick={action} className={className}>{children}</a>;
  return <div className={className}>{children}</div>;
}

DropdownItem.propTypes = {
  link: PropTypes.string,
  action: PropTypes.func
};

export default DropdownItem;
