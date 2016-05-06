import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import Icon from './../Icon';

class DropdownMenu extends Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
    this.openDropdown = this.openDropdown.bind(this);
    this.closeDropdown = this.closeDropdown.bind(this);
    this.toggleDropdown = this.toggleDropdown.bind(this);
    this.handleOutsideClick = this.handleOutsideClick.bind(this);
  }

  componentDidMount() {
    window.addEventListener('mouseup', this.handleOutsideClick);
  }

  componentWillUnmount() {
    window.removeEventListener('mouseup', this.handleOutsideClick);
  }

  handleOutsideClick(event) {
    const { open } = this.state;

    const clickedElement = ReactDOM.findDOMNode(event.target);
    const isSelectingOption = _.includes(clickedElement.classList, 'qr-dropdown-option', 'qr-dropdown-option');

    if(!!open && !isSelectingOption) this.closeDropdown();
  }

  openDropdown() {
    this.setState({ open: true });
  }

  closeDropdown() {
    this.setState({ open: false });
  }

  toggleDropdown() {
    const { open } = this.state;
    open ? this.closeDropdown() : this.openDropdown();
  }

  renderDropdownOptions() {
    const { children, label, fromRight } = this.props;
    const optionsLabelDOMItem = !!label ? <div className="qr-dropdown-option main">{label}</div> : false;
    let className = 'qr-dropdown-options';
    if(!!fromRight) className += ' from-right';

    return (
      <div className={className}>
        {optionsLabelDOMItem}
        {children}
      </div>
    );
  }

  renderLink() {
    const { label, labelSize, color, icon } = this.props;
    const labelClassName = `qr-dropdown-label ${labelSize}-font-size ${color}-color`;
    const linkProps = {
      className: 'clicable',
      onClick: this.toggleDropdown,
      onBlur: this.closeDropdown
    };

    if(!!icon) return <a {...linkProps}>{icon}</a>;

    linkProps.className = `qr-dropdown-link clicable ${color}-color`;

    return (
      <a {...linkProps}>
        <span className={labelClassName}>{label}</span>
        <Icon type="caret-down" size="small" color={color} />
      </a>
    );
  }

  render() {
    const { label, labelSize, color, icon } = this.props;
    const { open } = this.state;
    const dropdownOptionsDOMItems = open ? this.renderDropdownOptions() : '';
    const linkDOMItem = this.renderLink();

    return(
      <div className="qr-dropdown">
        {linkDOMItem}
        {dropdownOptionsDOMItems}
      </div>
    );
  }
}

DropdownMenu.propTypes = {
  label: PropTypes.string,
  labelSize: PropTypes.string,
  color: PropTypes.string,
  icon: PropTypes.node,
  fromRight: PropTypes.bool
};

DropdownMenu.defaultProps = {
  color: 'detail-1'
}

export default DropdownMenu;
