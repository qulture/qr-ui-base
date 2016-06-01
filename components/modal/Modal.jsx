import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import IconLink from './../IconLink';
import ModalFooter from './ModalFooter';

class Modal extends Component {
  constructor(props) {
    super(props);
    this.submitHandler = this.submitHandler.bind(this);
    this.renderFooter = this.renderFooter.bind(this);
    this.handleBodyClass = this.handleBodyClass.bind(this);
    // Init
    this.handleBodyClass(props, true);
  }

  componentWillReceiveProps(newProps) {
    const { onOpen } = this.props
    this.handleBodyClass(newProps);
    // Call on open prop
    const isOpening = newProps.open !== this.props.open && newProps.open === OPEN;
    if(isOpening && onOpen) onOpen();
  }

  componentWillUnmount() {
    this.handleBodyClass({});
  }

  handleBodyClass(newProps, fromConstructor) {
    if(!!newProps.open) {
      $('body').addClass('no-scroll')
    } else {
      if(!fromConstructor) $('body').removeClass('no-scroll');
    }
  }

  submitHandler(event) {
    if(!!event) event.preventDefault();
    const { onSubmit, onClose } = this.props;
    let shouldClose = true;
    if(!!onSubmit) {
      const result = onSubmit();
      if(!_.isUndefined(result)) shouldClose = result;
    }
    if(!!onClose && shouldClose) onClose();
  }

  stopParentClickPropagation(event) {
    event.stopPropagation();
  }

  renderFooter() {
    const { hideFooter, onSubmit, onClose } = this.props;
    if(!!hideFooter) return '';
    if(!!onSubmit) return <ModalFooter isSubmit>Send</ModalFooter>;
    return <ModalFooter action={onClose}>Close</ModalFooter>;
  }

  render() {
    const { children, open, onClose, onSubmit, hideFooter, large } = this.props;
    if(!open) return false;
    const footerDOMItem = this.renderFooter();
    const content = <div>{children}{footerDOMItem}</div>;
    const finalContentDOMItem = !!onSubmit ? <form onSubmit={this.submitHandler}>{content}</form> : content;
    let className = 'qr-modal';
    if(!!large) className += ' large';

    return (
      <div className="qr-modal-wrapper" onClick={onClose}>
        <div className={className} onClick={this.stopParentClickPropagation}>
          <IconLink className="qr-close-modal-link" type="close" action={onClose} size="large" />
          {finalContentDOMItem}
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  open: PropTypes.bool,
  onOpen: PropTypes.func,
  onClose: PropTypes.func,
  onSubmit: PropTypes.func,
  hideFooter: PropTypes.bool,
  large: PropTypes.bool
}

export default Modal;
