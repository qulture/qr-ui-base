import React, { Component, PropTypes } from 'react';
import { NameFormatter } from '../helpers';
import Badge from './Badge';

class Avatar extends Component {
  constructor(props) {
    super(props);
    this.renderAvatarText = this.renderAvatarText.bind(this);
    this.renderAvatar = this.renderAvatar.bind(this);
  }

  renderAvatarText() {
    const { user, size, subtitle, hideName, color } = this.props;
    if(!user || !!hideName) return '';
    const name = NameFormatter.getFirstAndLastName(user.profile.name);
    const textWrapperClassName = `qr-avatar-text ${size}`;
    const nameClassName = `${color}-color`;
    const sibtitleClassName = `${color}-color`;

    const avatarTextDOMItem = (
      <div className={textWrapperClassName}>
        <h4 className={nameClassName}>{name}</h4>
        <p className={sibtitleClassName}>{subtitle}</p>
      </div>
    );

    return avatarTextDOMItem;
  }

  renderAvatar() {
    const { user, size, badgeText } = this.props;
    const initials = NameFormatter.getInitials(user.profile.name);
    const image = false;
    const avatarClassName = `qr-avatar ${size}`;
    const avatarImageOrInitialsDOMItem = !image ? <div className="qr-initials">{initials}</div> : <img src={image} />;
    const avatarWrapperDOMItem = <div className={avatarClassName}>{avatarImageOrInitialsDOMItem}</div>

    if(!!badgeText) {
      return (
        <Badge text={badgeText}>
          {avatarWrapperDOMItem}
        </Badge>
      );
    }

    return avatarWrapperDOMItem;
  }

  render() {
    const avatarTextDOMItem = this.renderAvatarText();
    const avatarDOMItem = this.renderAvatar();

    return (
      <div className="qr-avatar-wrapper">
        {avatarDOMItem}
        {avatarTextDOMItem}
      </div>
    );
  }
}

Avatar.propTypes = {
  user: PropTypes.object,
  size: PropTypes.string,
  color: PropTypes.string,
  subtitle: PropTypes.string,
  hideName: PropTypes.bool,
  badgeText: PropTypes.node
};

export default Avatar;
