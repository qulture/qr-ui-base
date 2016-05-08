import React, { PropTypes, Component } from 'react';
import { SemaphoreColors } from 'meteor/qulture:qr-ui-base/helpers';

class GradesBar extends Component {
  renderValues() {
    const { max, min, values, valueKey, labelKey } = this.props;

    const valuesDOMItems = _.map(values, function(item) {
      const name = item[labelKey];
      const value = item[valueKey];
      const itemWidth = value * 10;
      const style = { width: `${itemWidth}px` };
      const semaphoreColor = SemaphoreColors.getSemaphoreColor(value, { max, min });
      const className = `qr-grades-bar-item grading-${semaphoreColor}-bg-color`;
      return <div key={name} className={className} style={style}></div>
    });

    return valuesDOMItems;
  }

  render() {
    const valuesDOMItems = this.renderValues();

    return (
      <div className="qr-grades-bar">
        {valuesDOMItems}
      </div>
    );
  }
}

GradesBar.propTypes = {
  max: PropTypes.number,
  min: PropTypes.number,
  values: PropTypes.array,
  labelKey: PropTypes.string,
  valueKey: PropTypes.string
};

GradesBar.defaultProps = {
  max: 5,
  min: 1,
  labelKey: 'name',
  valueKey: 'value'
};

export default GradesBar;
