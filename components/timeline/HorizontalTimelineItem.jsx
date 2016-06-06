import React, { PropTypes } from 'react';

function HorizontalTimelineItem(props) {
  const { children, active, link, action, inactive } = props;
  let className = 'qr-horizontal-timeline-item';
  if(active) className += ' active';
  if(inactive) className += ' inactive';

  return (
    <a onClick={action} link={link} className={className}>
      {children}
    </a>
  );
}

HorizontalTimelineItem.propTypes = {
  active: PropTypes.bool,
  inactive: PropTypes.bool,
  link: PropTypes.string,
  action: PropTypes.func,
};

export default HorizontalTimelineItem;
