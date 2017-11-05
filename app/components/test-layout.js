import Ember from 'ember';

export default Ember.Component.extend({
    store: Ember.inject.service('store'),
    actions:{
        deleteTest(){
            this.get('test').destroyRecord();
        }
}
});
