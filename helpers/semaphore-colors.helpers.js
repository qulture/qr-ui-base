import _ from 'lodash';

function getSemaphoreColor(value, options) {
  const { max, min } = _.defaults(options, { max: 5, min: 1 });
  value = Number(value);
  const firstBreakPoint = (max - min) / 3;
  const secondBreakPoint = 2 * firstBreakPoint;

  if(value < min || value > max) return 'out';
  if(value - min <= firstBreakPoint) return 'bad';
  if(value - min > secondBreakPoint) return 'good';
  return 'normal';
};

export default {
  getSemaphoreColor
};
