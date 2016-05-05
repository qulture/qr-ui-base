import React, { PropTypes, Component } from 'react';
import Icon from './../Icon';

function SidebarListSectionItem(props) {
  const { children, sideContent, link, action, active } = props;
  let className = 'qr-sidebar-list-section-item';
  if(active) className += ' active';
  const sideContentDOMItem = !!active ? <Icon type="angle-right" size="x-large" color="detail-3" /> : sideContent;

  return (
    <a className={className} href={link} onClick={action}>
      <div className="qr-sidebar-list-section-item-content">
        {children}
      </div>
      <div className="qr-sidebar-list-section-item-side-content">
        {sideContentDOMItem}
      </div>
    </a>
  );
}

SidebarListSectionItem.propTypes = {
  link: PropTypes.string,
  action: PropTypes.func,
  active: PropTypes.bool,
  sideContent: PropTypes.node
};

export default SidebarListSectionItem;
