import DS from 'ember-data';

export default DS.Model.extend({
    respuesta: DS.attr('string'),
    correcta: DS.attr('boolean'),
    pregunta: DS.belongsTo('question')
});
