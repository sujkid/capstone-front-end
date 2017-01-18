// import DS from 'ember-data';
//
// export default DS.JSONAPIAdapter.extend({
// });

import ApplicationAdapter from 'lunchbox/application/adapter';

export default ApplicationAdapter.extend({
  createRecord(store, type, record) {
    let api = this.get('host');
    let serialized = this.serialize(record, { includeId: true });
    let menuId = serialized.menu_id;
    let url = `${api}/menus/${menuId}/orders`;
    let data = { order: serialized };

    return this.ajax(url, 'POST', {data});
  }
});
