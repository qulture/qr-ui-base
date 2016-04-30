import _ from 'lodash';
import React, { Component, PropTypes } from 'react';
import { Boxed } from './../boxed';

function InputCheckbox(props) {
  const { value, label, onChange, checked } = props;
  const uniqueId = _.uniqueId();
  const labelDOMItem = <label htmlFor={uniqueId}>{label}</label>;
  const inputDOMItem = <input type="checkbox" id={uniqueId} value={value} onChange={onChange} checked={checked} />;

  return (
    <div>
      {inputDOMItem}
      {labelDOMItem}
    </div>
  );
}

InputCheckbox.propTypes = {
  label: PropTypes.string,
  value: PropTypes.any,
  onChange: PropTypes.func,
  checked: PropTypes.bool
}

export default InputCheckbox;
