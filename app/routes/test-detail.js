import Ember from 'ember';

export default Ember.Route.extend({
    model(params){
        let id = params.test_id;
        return this.store.find('test', id);
    }
});
