import _ from 'lodash';
import QRUIBaseSettings from './../qr-ui-base.js';

function getMainColor() {
  return QRUIBaseSettings.getCustomMainColor();
}

function generateStyleForColor(locales, color) {
  if(color !== 'main') return {};
  if(_.isString(locales)) return getStyleColorByLocal(locales);
  return _.merge(..._.map(locales, getStyleColorByLocal));
}

function getStyleColorByLocal(local) {
  switch (local) {
    case 'bg': return generateBackgroundColorStyle();
    case 'background': return generateBackgroundColorStyle();
    case 'border': return generateBorderColorStyle();
    case 'color': return generateColorStyle();
  }
}

function generateBackgroundColorStyle() {
  return { backgroundColor: getMainColor() };
}

function generateBorderColorStyle() {
  return { borderColor: getMainColor() };
}

function generateColorStyle() {
  return { color: getMainColor() };
}

export default {
  getMainColor,
  generateStyleForColor,
  generateBackgroundColorStyle,
  generateBorderColorStyle,
  generateColorStyle
};
