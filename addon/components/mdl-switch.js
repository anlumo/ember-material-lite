import BaseToggleComponent from './-base-toggle-component';
import layout from '../templates/components/mdl-switch';
import { observer } from '@ember/object';
import { schedule } from '@ember/runloop';

export default BaseToggleComponent.extend({
  primaryClassName: 'switch',
  layout,
  didInsertElement() {
    this._super(...arguments);
    let mdlswitch = new window.MaterialSwitch(this.get('element'));
    this.set('_mdlComponent', mdlswitch);
  },

  updateValue: observer('_mdlComponent', 'value', function() {
    schedule('afterRender', this, () => this.get('_mdlComponent').checkToggleState());
  }),
});
