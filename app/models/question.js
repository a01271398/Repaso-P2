import DS from 'ember-data';

export default DS.Model.extend({
    pregunta: DS.attr('string'),
    examen: DS.belongsTo('test'),
    respuestas: DS.hasMany('option')
});
