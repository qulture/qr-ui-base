import React, { Component, PropTypes } from 'react';
import { NameFormatter, ColorHelpers } from './../helpers';
import Badge from './Badge';

class Avatar extends Component {
  constructor(props) {
    super(props);
    this.renderAvatarText = this.renderAvatarText.bind(this);
    this.renderAvatar = this.renderAvatar.bind(this);
  }

  renderAvatarText() {
    let { user, title, size, subtitle, hideName, color, badgeOnName } = this.props;
    if(!user || !!hideName) return '';
    title = title || NameFormatter.getFirstAndLastName(user.profile.name);
    const textWrapperClassName = `qr-avatar-text ${size}`;
    const titleClassName = `${color}-color`;
    const titleStyle = ColorHelpers.generateStyleForColor('color', color);

    let titleDOMItem = <h4 className={titleClassName} style={titleStyle}>{title}</h4>;
    if(!!badgeOnName) titleDOMItem = <Badge size="small" color={color}>{titleDOMItem}</Badge>;

    const avatarTextDOMItem = (
      <div className={textWrapperClassName}>
        {titleDOMItem}
        <p>{subtitle}</p>
      </div>
    );

    return avatarTextDOMItem;
  }

  renderAvatar() {
    const { user, size } = this.props;
    const initials = NameFormatter.getInitials(user.profile.name);
    const image = false;
    const avatarClassName = `qr-avatar ${size}`;
    const avatarImageOrInitialsDOMItem = !image ? <div className="qr-initials">{initials}</div> : <img src={image} />;
    const avatarWrapperDOMItem = <div className={avatarClassName}>{avatarImageOrInitialsDOMItem}</div>

    return avatarWrapperDOMItem;
  }

  render() {
    const { link, action } = this.props;
    const avatarTextDOMItem = this.renderAvatarText();
    const avatarDOMItem = this.renderAvatar();

    const avatarWrapperDOMItem = (
      <div className="qr-avatar-wrapper">
        {avatarDOMItem}
        {avatarTextDOMItem}
      </div>
    );

    return !!link || !!action ? <a className="clicable" href={link} onClick={action}>{avatarWrapperDOMItem}</a> : avatarWrapperDOMItem;
  }
}

Avatar.propTypes = {
  user: PropTypes.object,
  size: PropTypes.string,
  color: PropTypes.string,
  subtitle: PropTypes.string,
  hideName: PropTypes.bool,
  badgeOnName: PropTypes.any,
  link: PropTypes.string,
  action: PropTypes.func,
};

Avatar.defaultProps = {
  color: 'main'
};

export default Avatar;
