import React, { Component, PropTypes } from 'react';
import { focusInputByRef } from 'meteor/cinn:react-form-helpers';
import TextareaAutosize from 'react-textarea-autosize';
import { Boxed } from './../boxed';
import Icon from './../Icon';
import Markdown from './../Markdown';
import InputLabel from './InputLabel';


class InputMarkdown extends Component {
  constructor(props) {
    super(props);
    this.state = { previewing: false };
    this.toggleView = this.toggleView.bind(this);
  }

  componentDidMount() { focusInputByRef(this); }

  toggleView() {
    const { previewing } = this.state;
    this.setState({ previewing: !previewing });
  }

  render() {
    const { value, placeholder, label, onChange, color, rightContent, leftContent, focus } = this.props;
    const { previewing } = this.state;
    const ref = !!focus ? 'focus' : '';
    const inputProps = { ref, value, placeholder, onChange };
    const toggleViewIcon = previewing ? 'square-pencil' : 'eye';
    const contentDOMItem = previewing ? <Markdown value={value} /> : <TextareaAutosize minRows={5} {...inputProps} />;
    const labelDOMItem = !!label ? <InputLabel>{label}</InputLabel> : false;

    return (
      <div className="qr-input-markdown">
        {labelDOMItem}
        <Boxed color={color} rightContent={rightContent} leftContent={leftContent} noPadding dashed={previewing}>
          <div className="qr-input-markdown-options">
            <Icon type={toggleViewIcon} action={this.toggleView} color="detail-4" />
          </div>
          {contentDOMItem}
          <p className="qr-input-markdown-message">This input allow markdown. <a href>Click here</a> to see how to use it.</p>
        </Boxed>
      </div>
    );
  }
}

InputMarkdown.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.node,
  onChange: PropTypes.func,
  color: PropTypes.string,
  rightContent: PropTypes.node,
  leftContent: PropTypes.node,
  focus: PropTypes.bool,
}

InputMarkdown.defaultProps = {
  type: 'text'
}

export default InputMarkdown;
