import React, { PropTypes } from 'react';

function PanelFooterLink(props) {
  const { children, color, action, link, align } = props;
  const className = `qr-panel-footer-link ${color}-color text-${align}`;

  return (
    <a className={className} onClick={action} href={link}>
      {children}
    </a>
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
