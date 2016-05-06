import _ from 'lodash';
import React, { Component, PropTypes } from 'react';
import Icon from './Icon';
import DropdownMenu from './dropdown/DropdownMenu';

class IconDropdown extends Component {
  render() {
    const { children, icon, size, color } = this.props;
    const iconDOMItem = <Icon type={icon} size={size} color={color} />;
    const dropdownProps = _.omit(this.props, 'icon', 'size', 'color');

    return (
      <DropdownMenu icon={iconDOMItem} {...dropdownProps}>
        {children}
      </DropdownMenu>
    );
  }
}

IconDropdown.propTypes = {
  icon: PropTypes.string.isRequired,
  size: PropTypes.string,
  color: PropTypes.string,
};

IconDropdown.defaultProps = {
  color: 'main'
};

export default IconDropdown;
