/* eslint-disable ember/closure-actions*/
import Mixin from '@ember/object/mixin';

export default Mixin.create({
  click() {
    this.action(this);
    this['on-click'](this);
  },
  change() {
    this['on-change'](this);
  }
});
