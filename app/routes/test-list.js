import Ember from 'ember';

export default Ember.Route.extend({ 
        model(){
            return this.store.findAll('test');
        },
        // Creando un action desde el route
        actions: {
            nuevo(){
                let test = this.store.createRecord('test', {});
            }
        }
});
