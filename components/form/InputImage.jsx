import React, { PropTypes, Component } from 'react';
import Boxed from './../boxed/Boxed';
import InputLabel from './InputLabel';
import { Grid, GridItem } from './../grid';
import IconLink from './../IconLink';

class InputImage extends Component {
  constructor(props) {
    super(props);
    const { value } = this.props;
    this.onUpload = this.onUpload.bind(this);
    this.saveImage = this.saveImage.bind(this);
    this.removeImage = this.removeImage.bind(this);
  }

  onUpload(event) {
    const files = event.target.files;
    Cloudinary.upload(files, {}, this.saveImage);
  }

  saveImage(error, response) {
    const { onChange } = this.props;
    console.log(error, response);
    if(!!onChange) onChange(_.result(response, 'public_id'));
  }

  removeImage() {
    const { value, onRemoveImage } = this.props;
    Cloudinary.delete(value, function(error, res) {
      if(!!onRemoveImage) onRemoveImage();
    });
  }

  render() {
    const { value, placeholder, label, onChange, color, rightContent } = this.props;
    const inputProps = {
      type: 'file',
      onChange: this.onUpload,
      value
    };

    let inputDOMItem = <input {...inputProps} />;

    if(!!value) {
      const imagePath = $.cloudinary.url(value, { height: 60, crop: "scale", secure: true });
      inputDOMItem = (
        <Grid align="center" justify="start">
          <GridItem>
            <img src={imagePath} />
          </GridItem>
          <GridItem>
            <IconLink type="close" action={this.removeImage}>Remove Image</IconLink>
          </GridItem>
        </Grid>
      )
    }

    const boxedInputDOMItem = (
      <Boxed color={color} rightContent={rightContent}>{inputDOMItem}</Boxed>
    );

    if(!label) return boxedInputDOMItem;

    return (
      <div>
        <InputLabel>{label}</InputLabel>
        {boxedInputDOMItem}
      </div>
    );
  }
}

InputImage.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  onRemoveImage: PropTypes.func,
  color: PropTypes.string,
  rightContent: PropTypes.node,
}

export default InputImage;
