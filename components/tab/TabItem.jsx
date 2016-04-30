import React, { PropTypes } from 'react';

function TabItem(props) {
  const { children, active, link } = props;
  let className = 'qr-tab-item';
  if(!!active) className += ' active';

  if(!!link) return <a className={className} href={link}>{children}</a>;
  return <div className={className}>{children}</div>;
}

TabItem.propTypes = {
  active: PropTypes.bool,
  link: PropTypes.string
}

export default TabItem;
