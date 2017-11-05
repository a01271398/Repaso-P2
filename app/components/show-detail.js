import Ember from 'ember';

export default Ember.Component.extend({
    store: Ember.inject.service('store'),
    actions: {
            save(){
                let test = this.get('test');

                if(Ember.isBlank(this.get('test.nombre'))){
                    alert('No puede estar vacío');
                    // this.get('test').deleteRecord();
                    return;
                }
            test.save().then(()=>{
                Ember.RSVP.all(test.get('preguntas').invoke('save')).then(()=>{
                    alert('Ya se guardó');
                    this.sendAction('didSave');
                })
            });
        },
        createQuestion(){
            let question = this.get('store').createRecord('question', {
                examen: this.get('test')
            });
            let option1 = question.store.createRecord('option', {
                pregunta: this.get('question')
            });
            let option2 = question.store.createRecord('option', {
                pregunta: this.get('question')
            });
            let option3 = question.store.createRecord('option', {
                pregunta: this.get('question')
            });
            let option4 = question.store.createRecord('option', {
                pregunta: this.get('question')
            });
            console.log(question);
        }
    }
});
