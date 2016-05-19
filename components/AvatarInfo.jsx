import React, { Component, PropTypes } from 'react';
import { NameFormatter, ColorHelpers } from '../helpers';
import Badge from './Badge';

class AvatarInfo extends Component {
  constructor(props) {
    super(props);
    this.renderAvatarText = this.renderAvatarText.bind(this);
    this.renderAvatar = this.renderAvatar.bind(this);
  }

  renderAvatarText() {
    const { size, children, subtitle, color } = this.props;
    const avatarClassName = `qr-avatar-text ${size}`;
    const titleClassName = `default-font-size ${color}-color`;
    const subtitleClassName = size === 'small' ? 'xs-font-size' : 's-font-size';
    const titleStyle = ColorHelpers.generateStyleForColor('color', color);

    const avatarTextDOMItem = (
      <div className={avatarClassName}>
        <h4 className={titleClassName} style={titleStyle}>{children}</h4>
        <p className={subtitleClassName}>{subtitle}</p>
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

AvatarInfo.propTypes = {
  user: PropTypes.object,
  size: PropTypes.string,
  color: PropTypes.string,
  subtitle: PropTypes.string,
  badgeText: PropTypes.node
};

export default AvatarInfo;
