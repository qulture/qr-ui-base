import React, { PropTypes, Component } from 'react';
import { Grid, GridItem } from './../grid';
import Avatar from './../Avatar';

class PanelHeader extends Component {
  renderContentWithAvatar() {
    const { children, avatar } = this.props;
    return (
      <Grid justify="start" align="center" noWrap>
        <Avatar user={avatar} hideName />
        <GridItem className="small-margin-left">{children}</GridItem>
      </Grid>
    )
  }

  render() {
    const { children, grid, avatar } = this.props;
    let className = 'qr-panel-header';
    if(!!grid) className += ' qr-grid';

    const contentDOMItem = !!avatar ? this.renderContentWithAvatar() : children;

    return (
      <div className={className}>
        {contentDOMItem}
      </div>
    );
  }
}

PanelHeader.propTypes = {
  grid: PropTypes.bool,
  avatar: PropTypes.object
}

export default PanelHeader;
