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
    const { children, label } = this.props;

    return (
      <div className="qr-dropdown-options">
        <div className="qr-dropdown-option main">{label}</div>
        {children}
      </div>
    );
  }

  render() {
    const { label, labelSize, color } = this.props;
    const { open } = this.state;
    const linkClassName = `qr-dropdown-link clicable ${color}-color`;
    const labelClassName = `qr-dropdown-label ${labelSize}-font-size ${color}-color`;
    const dropdownOptions = open ? this.renderDropdownOptions() : '';

    return(
      <div className="qr-dropdown">
        <a className={linkClassName} onClick={this.toggleDropdown} onBlur={this.closeDropdown}>
          <span className={labelClassName}>{label}</span>
          <Icon type="caret-down" size="small" color={color} />
        </a>
        {dropdownOptions}
      </div>
    );
  }
}

DropdownMenu.propTypes = {
  label: PropTypes.string,
  labelSize: PropTypes.string,
  color: PropTypes.string
};

DropdownMenu.defaultProps = {
  color: 'detail-1'
}

export default DropdownMenu;
