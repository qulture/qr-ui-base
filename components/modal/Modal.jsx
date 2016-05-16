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
    this.handleBodyClass(props);
  }

  handleBodyClass(newProps) {
    !!newProps.open ? $('body').addClass('no-scroll') : $('body').removeClass('no-scroll');
  }

  componentWillReceiveProps(newProps) {
    const { onOpen } = this.props
    this.handleBodyClass(newProps);
    // Call on open prop
    const isOpening = newProps.open !== this.props.open && newProps.open === OPEN;
    if(isOpening && onOpen) onOpen();
  }

  submitHandler(event) {
    if(!!event) event.preventDefault();
    const { onSubmit, onClose } = this.props;
    if(onSubmit) onSubmit();
    if(onClose) onClose();
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
    let { children, open, onClose, onSubmit, hideFooter } = this.props;
    if(!open) return <div className="closedModal"></div>;
    const footerDOMItem = this.renderFooter();
    const content = <div>{children}{footerDOMItem}</div>;
    const finalContentDOMItem = !!onSubmit ? <form onSubmit={this.submitHandler}>{content}</form> : content;

    return (
      <div className="qr-modal-wrapper" onClick={onClose}>
        <div className="qr-modal" onClick={this.stopParentClickPropagation}>
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
}

export default Modal;
