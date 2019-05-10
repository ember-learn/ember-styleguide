import Component from 'sparkles-component';

function convertHex(hex){
  hex = hex.replace('#','');
  let r = parseInt(hex.substring(0,2), 16);
  let g = parseInt(hex.substring(2,4), 16);
  let b = parseInt(hex.substring(4,6), 16);

  return [r, g, b];
}

var contrastRatio = function(x, y) {
	var l1 = relativeLuminance(x);
	var l2 = relativeLuminance(y);
	return (Math.max(l1, l2) + 0.05) / (Math.min(l1, l2) + 0.05);
};

var relativeLuminance = function(c) {
	var lum = [];
	for (var i = 0; i < 3; i++) {
		var v = c[i] / 255;
		lum.push(v < 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4));
	}
	return 0.2126 * lum[0] + 0.7152 * lum[1] + 0.0722 * lum[2];
};

export default class ColorPallet extends Component {
  textClasses = [
    'xsmall',
    'small',
    'medium',
    'large',
    'xlarge',
  ]

  constructor(attrs) {
    super(...arguments);

    this.rgb = convertHex(attrs.color);

    let [r, g, b] = this.rgb;
    this.rgbString = `${r}, ${g}, ${b}`
  }

  checkPassFail(element, [className, rgb]) {

    // debugger

    let textElement = element.parentElement.parentElement.querySelector(`.${className}`);

    let styles = window.getComputedStyle(textElement);

    let color = styles.getPropertyValue('color');
    let colorRgb = color.match(/rgb\((\d+), (\d+), (\d+)\)/).slice(1, 4).map(number => parseInt(number, 10));

    var ratio = Math.round(contrastRatio(colorRgb, rgb) * 100) / 100;

    let fontSize = parseInt(styles.getPropertyValue('font-size'), 10);
    let fontWeight = styles.getPropertyValue('font-weight');
    let ratingString;

    // Large text is defined as 14 point (typically 18.66px) and bold or larger, or 18 point (typically 24px) or larger.
    if (fontSize >= 24 || (fontSize >= 18.66 && fontWeight >= 700)) {
      if (ratio < 3) {
        ratingString = 'too low';
      } else if (ratio < 4.5) {
        ratingString = 'okay';
      } else {
        ratingString = 'excellent';
      }
    } else {
      if (ratio < 4.5) {
        ratingString = 'too low';
      } else if (ratio < 7) {
        ratingString = 'okay';
      } else {
        ratingString = 'excellent';
      }
    }

    if(ratingString === 'too low') {
      element.innerText = 'FAIL';
    } else if (ratingString === 'okay') {
      element.innerText = 'AA✓';
    } else if (ratingString === 'excellent') {
      element.innerText = 'AAA✓'
    }
  }
}
