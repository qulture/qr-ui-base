import _ from 'lodash';
import React, { Component, PropTypes } from 'react';
import { Grid, GridItem } from './../grid';;
import InputRadio from './InputRadio';

class InputGrading extends Component {
  renderOptions() {
    const self = this;
    const { name, value, amount, showNA, inverted, onChange } = this.props;

    let possibleGrades = _.range(1, amount + 1);
    if(!!inverted) _.reverse(possibleGrades);

    const optionsDOMItems = _.map(possibleGrades, function(grade) {
      const checked = value == grade;
      const label = String(grade);
      const key = `${name}-${grade}`;

      return (
        <GridItem key={key} l={17} m={50} s={100}>
          <InputRadio label={label} value={grade} name={name} checked={checked} onChange={onChange} />
        </GridItem>
      );
    })

    return optionsDOMItems;
  }

  renderNA() {
    const { name, value, onChange } = this.props;
    const naValue = -1;
    const checked = value == naValue;

    return(
      <GridItem l={1} m={50} s={100}>
        <InputRadio label="n/a" value={naValue} name={name} checked={checked} onChange={onChange}  />
      </GridItem>
    );
  }

  render() {
    const { amount, inverted, showNA } = this.props;
    const optionsDOMItems = this.renderOptions();
    const naDOMItem = this.renderNA();

    return (
      <Grid justify="start">
        {optionsDOMItems}
        {naDOMItem}
      </Grid>
    );
  }
}

InputGrading.propTypes = {
  name: PropTypes.string,
  value: PropTypes.number,
  onChange: PropTypes.func,
  amount: PropTypes.number,
  inverted: PropTypes.bool,
  showNA: PropTypes.bool,
};

InputGrading.defaultProps = {
  amount: 5
};

export default InputGrading;
