import React, { PropTypes } from 'react';
import Link from './../Link';

function PanelFooterLink(props) {
  const { children, color, action, link, align } = props;
  const className = `qr-panel-footer-link text-${align}`;

  return (
    <Link className={className} action={action} link={link} color={color}>
      {children}
    </Link>
  );
}

PanelFooterLink.propTypes = {
  link: PropTypes.string,
  action: PropTypes.func,
  color: PropTypes.string,
  align: PropTypes.string,
};

PanelFooterLink.defaultProps = {
  color: 'main'
};

export default PanelFooterLink;
