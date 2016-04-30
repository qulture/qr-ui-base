import _ from 'lodash';
import React, { Component, PropTypes } from 'react';
import { Boxed } from './../boxed';

function InputRadio(props) {
  const { value, label, onChange, checked, name } = props;
  const uniqueId = _.uniqueId();
  const labelDOMItem = <label htmlFor={uniqueId}>{label}</label>;
  const inputDOMItem = <input type="radio" id={uniqueId} value={value} name={name} onChange={onChange} checked={checked} />;

  return (
    <div>
      {inputDOMItem}
      {labelDOMItem}
    </div>
  );
}

InputRadio.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.any,
  onChange: PropTypes.func,
  checked: PropTypes.bool
}

export default InputRadio;
