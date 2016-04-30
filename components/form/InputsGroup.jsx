import React, { PropTypes } from 'react';
import { Boxed, BoxedGroup } from './../boxed';

function InputsGroup(props) {
  return (
    <BoxedGroup {...props}>
      {props.children}
    </BoxedGroup>
  );
}

export default InputsGroup;
