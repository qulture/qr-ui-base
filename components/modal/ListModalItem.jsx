import React, { PropTypes, Component } from 'react';
import Link from './../Link';

function ListModalItem(props) {
  const { children, link, action } = props;
  const className = 'qr-list-modal-item';

  if(!!link || !!action) return <Link className={className} action={action} link={link}>{children}</Link>;
  return <div className={className}>{children}</div>;
};

ListModalItem.propTypes = {
  action: PropTypes.func,
  link: PropTypes.func
};

export default ListModalItem;
