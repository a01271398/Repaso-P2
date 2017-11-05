import Ember from 'ember';

export default Ember.Component.extend({
    store: Ember.inject.service('store'),
    actions:{
        borrarPregunta(){
            this.get('preguntas').destroyRecord();
        }
    }

});
