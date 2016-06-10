import React, { PropTypes, Component } from 'react';
import { ColorHelpers } from './../../helpers';
import IconLink from './../IconLink';
import { Grid } from './../grid';

class ListModal extends Component {
  constructor(props) {
    super(props);
    this.handleBodyClass = this.handleBodyClass.bind(this);
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

  stopParentClickPropagation(event) {
    event.stopPropagation();
  }

  render() {
    const { children, open, onClose, title } = this.props;
    const style = ColorHelpers.generateStyleForColor(['bg'], 'main');
    if(!open) return false;

    return (
      <div className="qr-modal-wrapper" onClick={onClose}>
        <div className="qr-list-modal" onClick={this.stopParentClickPropagation}>
          <Grid className="qr-list-modal-header" align="center" style={style}>
            <h3 className="no-margin">{title}</h3>
            <IconLink type="close" color="white" action={onClose} size="large" />
          </Grid>
          <div className="qr-list-modal-content">
            {children}
          </div>
        </div>
      </div>
    );
  }
};

ListModal.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func,
  onOpen: PropTypes.func,
  title: PropTypes.string
};

export default ListModal;
