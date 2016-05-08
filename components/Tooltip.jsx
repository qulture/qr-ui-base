import React, { PropTypes, Component } from 'react';

class Tooltip extends Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
    this.onMouseEnter = this.onMouseEnter.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
  }

  onMouseEnter(event) {
    this.setState({ open: true });
  }

  onMouseLeave(event) {
    this.setState({ open: false });
  }

  render() {
    const { children, content } = this.props;
    const { open } = this.state;

    const contentDOMItem = open ? <div className="qr-tooltip-content">{content}</div> : false;

    return (
      <div className="qr-tooltip" onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave}>
        {contentDOMItem}
        {children}
      </div>
    );
  }
}

Tooltip.propTypes = {
  content: PropTypes.any
};

export default Tooltip;
