/* eslint-disable ember/closure-actions*/
import Mixin from '@ember/object/mixin';

export default Mixin.create({
  click() {
    if(this.action) {
      this.action(this);
    }
    if(this['on-click']) {
      this['on-click'](this);
    }
  },
  change() {
    if(this['on-change']) {
      this['on-change'](this);
    }
  }
});
