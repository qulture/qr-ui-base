import React, { Component, PropTypes } from 'react';
import { Boxed } from './../boxed';
import { focusInputByRef } from 'meteor/react-form-helpers';
import InputLabel from './InputLabel';

class InputText extends Component {
  componentDidMount() { focusInputByRef(this); }

  render() {
    const { type, value, placeholder, label, onChange, color, rightContent, leftContent, focus, onlyInput } = this.props;
    const ref = !!focus ? 'focus' : '';
    const inputDOMItem = <input type={type} ref={ref} value={value} placeholder={placeholder} onChange={onChange} />;
    const boxedInputDOMItem = <Boxed color={color} rightContent={rightContent} leftContent={leftContent} noPadding>{inputDOMItem}</Boxed>;

    if(!!onlyInput) return inputDOMItem;

    if(!label) return boxedInputDOMItem;

    return (
      <div>
        <InputLabel>{label}</InputLabel>
        {boxedInputDOMItem}
      </div>
    );
  }
}

InputText.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.node,
  type: PropTypes.string,
  onChange: PropTypes.func,
  color: PropTypes.string,
  rightContent: PropTypes.node,
  leftContent: PropTypes.node,
  focus: PropTypes.bool,
  noBox: PropTypes.bool,
}

InputText.defaultProps = {
  type: 'text'
}

export default InputText;
