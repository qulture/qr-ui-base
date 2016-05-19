import React, { PropTypes, Component } from 'react';
import { ColorHelpers } from './../helpers';
import Icon from './Icon';

class HoverIconLink extends Component {
  constructor(props) {
    super(props);
    this.state = { hovering: false };
    this.onMouseEnter = this.onMouseEnter.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
  }

  onMouseEnter(event) {
    this.setState({ hovering: true });
  }

  onMouseLeave(event) {
    this.setState({ hovering: false });
  }

  render() {
    const { children, link, action, icon, iconBeforeText, color } = this.props;
    const { hovering } = this.state;
    const className = 'qr-hover-icon-link';
    const style = ColorHelpers.generateStyleForColor('color', color);

    if(!hovering) return <div className={className} onMouseEnter={this.onMouseEnter}>{children}</div>;
    const iconDOMItem = <Icon color={color} type={icon} />;
    const beferoDOMItem = !!iconBeforeText ? iconDOMItem: false;
    const afterDOMItem = !iconBeforeText ? iconDOMItem : false;

    return (
      <a className={className} style={style} href={link} onClick={action} onMouseLeave={this.onMouseLeave}>
        {beferoDOMItem}
        {children}
        {afterDOMItem}
      </a>
    );
  }
}

HoverIconLink.propTypes = {
  icon: PropTypes.string.isRequired,
  color: PropTypes.string,
  iconBeforeText: PropTypes.bool,
  link: PropTypes.string,
  action: PropTypes.func,
};

HoverIconLink.defaultProps = {
  color: 'main'
}

export default HoverIconLink;
