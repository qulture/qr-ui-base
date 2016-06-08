import React, { Component, PropTypes } from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import { Boxed } from './../boxed';
import { focusInputByRef } from 'meteor/cinn:react-form-helpers';
import InputLabel from './InputLabel';

class InputText extends Component {
  componentDidMount() { focusInputByRef(this); }

  render() {
    let { className, type, value, placeholder, label, onChange, color, rightContent, leftContent, focus, onlyInput, smallHeight } = this.props;
    const ref = !!focus ? 'focus' : '';
    if(!!smallHeight) className += ' small-height';
    const inputProps = { ref, value, placeholder, onChange, className };

    let inputDOMItem = <input type={type} {...inputProps} />;
    if(type === 'textarea') inputDOMItem = <TextareaAutosize minRows={5} {...inputProps} />;

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
  onlyInput: PropTypes.bool,
  smallHeight: PropTypes.bool,
  className: PropTypes.string,
}

InputText.defaultProps = {
  type: 'text'
}

export default InputText;
