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
    this.sendAction('changed', this.get('value'));
  })
});
