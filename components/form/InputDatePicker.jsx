import moment from 'moment';
import React, { PropTypes, Component } from 'react';
import Boxed from './../boxed/Boxed';
import DatePicker from './../DatePicker';
import InputLabel from './../form/InputLabel';

class InputDatePicker extends Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
    this.onOpenHandler = this.onOpenHandler.bind(this);
    this.onCloseHandler = this.onCloseHandler.bind(this);
  }

  onOpenHandler() { this.setState({ open: true }); }

  onCloseHandler(newDate) {
    const { onClose } = this.props;
    this.setState({ open: false });
    if(!!onClose) onClose(newDate);
  }

  render() {
    const { open } = this.state;
    const { value, placeholder, label, color, rightContent, leftContent } = this.props;

    const labelDOMItem = !!label ? <InputLabel>{label}</InputLabel> : false;
    const contentDOMItem = !!value ? moment(value).format('MMM, DD, YYYY') : placeholder;

    return (
      <div>
        {labelDOMItem}
        <a onClick={this.onOpenHandler} className="clicable">
          <Boxed color={color} rightContent={rightContent} leftContent={leftContent}>
            {contentDOMItem}
          </Boxed>
        </a>
        <DatePicker open={open} value={value} onClose={this.onCloseHandler} />
      </div>
    );
  }
}

InputDatePicker.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  onClose: PropTypes.func,
  color: PropTypes.string,
  value: PropTypes.object,
  rightContent: PropTypes.node,
  leftContent: PropTypes.node
};

export default InputDatePicker;
