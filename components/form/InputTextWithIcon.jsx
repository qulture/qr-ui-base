import React, { Component, PropTypes } from 'react';
import { focusInputByRef } from 'meteor/cinn:react-form-helpers';
import Icon from './../Icon';

class InputTextWithIcon extends Component {
  componentDidMount() { focusInputByRef(this); }

  render() {
    const { type, value, placeholder, onChange, icon, iconColor, focus, onKeyUp } = this.props;
    const ref = !!focus ? 'focus' : '';
    const inputProps = { type, ref, value, placeholder, onChange, onKeyUp };

    return (
      <label className="qr-input-with-icon">
        <Icon type={icon} color={iconColor} />
        <input {...inputProps} />
      </label>
    );
  }
}

InputTextWithIcon.propTypes = {
  placeholder: PropTypes.string,
  value: PropTypes.node,
  type: PropTypes.string,
  onChange: PropTypes.func,
  icon: PropTypes.string.isRequired,
  iconColor: PropTypes.string,
  focus: PropTypes.bool,
  onKeyUp: PropTypes.func,
}

InputTextWithIcon.defaultProps = {
  type: 'text',
  iconColor: 'detail-3'
}

export default InputTextWithIcon;
