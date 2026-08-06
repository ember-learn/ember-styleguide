import Component from '@glimmer/component';

function luminance(hex) {
  const r = parseInt(hex.slice(1, 3), 16) / 255;
  const g = parseInt(hex.slice(3, 5), 16) / 255;
  const b = parseInt(hex.slice(5, 7), 16) / 255;
  const [rs, gs, bs] = [r, g, b].map((c) =>
    c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4)
  );
  return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
}

function contrastRatio(hex1, hex2) {
  const l1 = luminance(hex1);
  const l2 = luminance(hex2);
  const lighter = Math.max(l1, l2);
  const darker = Math.min(l1, l2);
  return (lighter + 0.05) / (darker + 0.05);
}

function hexToRgb(hex) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `${r}, ${g}, ${b}`;
}

function score(ratio, isLarge) {
  const aaThreshold = isLarge ? 3 : 4.5;
  const aaaThreshold = isLarge ? 4.5 : 7;
  if (ratio >= aaaThreshold) return 'AAA✓';
  if (ratio >= aaThreshold) return 'AA✓';
  return 'FAIL';
}

// Default dark text color used by ember-styleguide
// Match the actual ember-styleguide CSS: body color is --color-gray-700, .text-light is --color-gray-100
const DARK_TEXT = '#42474F';
const LIGHT_TEXT = '#F4F6F8';

const SIZES = [
  { cls: 'text-sm', large: false },
  { cls: 'text-base', large: false },
  { cls: 'text-md', large: false },
  { cls: 'text-lg', large: true },
  { cls: 'text-xl', large: true },
];

export default class ColorPallet extends Component {
  get rgb() {
    return hexToRgb(this.args.color);
  }

  get darkRow() {
    const bg = this.args.color;
    const ratio = contrastRatio(bg, DARK_TEXT);
    return SIZES.map((s) => ({
      cls: s.cls,
      score: score(ratio, s.large),
    }));
  }

  get lightRow() {
    const bg = this.args.color;
    const ratio = contrastRatio(bg, LIGHT_TEXT);
    return SIZES.map((s) => ({
      cls: s.cls,
      score: score(ratio, s.large),
    }));
  }

  <template>
    <div class="field-guide-color-pallet" ...attributes>
      <div class="color-pallet__example" style="background-color: {{@color}}">
        <div class="color-pallet__example-text-row">
          {{#each this.darkRow as |item|}}
            <div class="color-pallet__example-text-result">
              <span class="{{item.cls}} color-pallet__example-text">A</span>
              <span class="score">{{item.score}}</span>
            </div>
          {{/each}}
        </div>
        <div class="color-pallet__example-text-row">
          {{#each this.lightRow as |item|}}
            <div class="color-pallet__example-text-result text-light">
              <span class="{{item.cls}} color-pallet__example-text text-light">A</span>
              <span class="score">{{item.score}}</span>
            </div>
          {{/each}}
        </div>
      </div>
      <div class="color-pallet__details">
        <dl>
          <dt class="color-pallet__details-title">Name</dt>
          <dd>{{@name}}</dd>
        </dl>
        <dl>
          <dt class="color-pallet__details-title">Variable</dt>
          <dd>{{@variable}}</dd>
        </dl>
        {{#if @className}}
          <dl>
            <dt class="color-pallet__details-title">Class Name</dt>
            <dd>{{@className}}</dd>
          </dl>
        {{/if}}
        <dl>
          <dt class="color-pallet__details-title">RGB</dt>
          <dd>{{this.rgb}}</dd>
        </dl>
        <dl>
          <dt class="color-pallet__details-title">HEX</dt>
          <dd>{{@color}}</dd>
        </dl>
      </div>
    </div>
  </template>
}
