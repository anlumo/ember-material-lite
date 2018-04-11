import BaseComponent from './-base-toplevel-component';
import layout from '../templates/components/mdl-slider';
import { observer } from '@ember/object';

export default BaseComponent.extend({
  tagName: 'input',
  type: 'range',
  min: 0,
  max: 100,
  value: 0,
  attributeBindings: ['type', 'min', 'max', 'step'],
  primaryClassName: 'slider',
  layout,
  didInsertElement() {
    this._super(...arguments);
    let mdlslider = new window.MaterialSlider(this.get('element'));
    this.set('_mdlComponent', mdlslider);
  },

  updateValue: observer('_mdlComponent', 'value', function() {
    this.get('_mdlComponent').change(this.get('value'));
  }),
});
