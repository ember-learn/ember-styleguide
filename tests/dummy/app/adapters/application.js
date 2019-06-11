import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
  urlForFindAll(modelName) {
    const path = this.pathForType(modelName);
    return `/${path}/all.json`;
  },

  urlForFindRecord(id, modelName) {
    const path = this.pathForType(modelName);
    return `/${path}/${id}.json`;
  }
});
