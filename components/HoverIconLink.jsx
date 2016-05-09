import React, { PropTypes, Component } from 'react';
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
    const { hovering } = this.state;
    const { children, link, action, icon, iconBeforeText } = this.props;
    const className = 'qr-hover-icon-link';

    if(!hovering) return <div className={className} onMouseEnter={this.onMouseEnter}>{children}</div>;

    const beferoDOMItem = !!iconBeforeText ? <Icon type={icon} /> : false;
    const afterDOMItem = !iconBeforeText ? <Icon type={icon} /> : false;

    return (
      <a className={className} href={link} onClick={action} onMouseLeave={this.onMouseLeave}>
        {beferoDOMItem}
        {children}
        {afterDOMItem}
      </a>
    );
  }
}

HoverIconLink.propTypes = {
  icon: PropTypes.string.isRequired,
  iconBeforeText: PropTypes.bool,
  link: PropTypes.string,
  action: PropTypes.func,

};

export default HoverIconLink;
