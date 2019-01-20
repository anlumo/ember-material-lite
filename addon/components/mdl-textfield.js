import BaseComponent from './-base-input-component';
import layout from '../templates/components/mdl-textfield';
import { observer } from '@ember/object';

export default BaseComponent.extend({
  pattern: null,
  isExpandable: false,
  expandableIcon: null,
  layout,
  classNameBindings: [
    'isExpandable:mdl-textfield--expandable'
  ],
  beforeMdlInit() {
    this.$('label.mdl-button').attr('for', this.get('_inputId'));
  },
  valueChanged: observer('value', function() {
    let changed = this.changed;
    if(changed) {
      changed(this.value);
    }
  }),
  actions: {
    newline() {
      let action = this.get('insert-newline');
      if(action) {
        return action(...arguments);
      }
    },
    focusOut() {
      let action = this.get('focus-out');
      if(action) {
        return action(...arguments);
      }
    },
    focusIn() {
      let action = this.get('focus-in');
      if(action) {
        return action(...arguments);
      }
    },
  },
});
