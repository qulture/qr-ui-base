import React, { PropTypes } from 'react';
import { Avatar } from 'meteor/qulture:qr-ui-base/components';

function ArrowBetweenUsers(props) {
  const { leftUser, rightUser, label, sublabel } = props;

  return (
    <div className="qr-arrow-wrapper">
      <div className="qr-arrow-left-content">
        <Avatar user={leftUser} />
      </div>

      <div className="qr-arrow">
        <div className="qr-arrow-line-wrapper">
          <div className="qr-arrow-label">{label}</div>
          <div className="qr-arrow-line"></div>
          <div className="qr-arrow-sublabel">{sublabel}</div>
        </div>
        <div className="qr-arrow-triangle"></div>
      </div>

      <div className="qr-arrow-right-content">
        <Avatar user={rightUser} />
      </div>
    </div>
  );
}

ArrowBetweenUsers.propTypes = {
  leftUser: PropTypes.object,
  rightUser: PropTypes.object,
  label: PropTypes.string,
  sublabel: PropTypes.string,
};

export default ArrowBetweenUsers;
