import React, { PropTypes, Component } from 'react';
import Link from './../Link';

function ListModalItem(props) {
  const { children, link, action, noPaddingTop, noPaddingBottom, lineColor } = props;
  let className = `qr-list-modal-item ${lineColor}-border-color`;
  if(!!noPaddingTop) className += ' no-padding-top';
  if(!!noPaddingBottom) className += ' no-padding-bottom';

  if(!!link || !!action) return <Link className={className} action={action} link={link}>{children}</Link>;
  return <div className={className}>{children}</div>;
};

ListModalItem.propTypes = {
  action: PropTypes.func,
  link: PropTypes.func,
  noPaddingTop: PropTypes.bool,
  noPaddingBottom: PropTypes.bool,
  lineColor: PropTypes.string
};

export default ListModalItem;
