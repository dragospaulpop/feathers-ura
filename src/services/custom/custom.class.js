/* eslint-disable no-unused-vars */
exports.Custom = class Custom {
  constructor (options) {
    this.options = options || {};
    this.items = [];
  }

  async find (params) {
    return this.items;
  }

  async get (id, params) {
    console.log('getting id: ', id)
    const item = this.items.find(item => item.id === +id)
    console.log('found: ', item)
    return item;
  }

  async create (data, params) {
    if (Array.isArray(data)) {
      return this.items.push(...data)
    }

    return this.items.push(data);
  }

  async update (id, data, params) {
    const index = this.items.findIndex(item => item.id === id);
    this.items[index] = data;
    return this.items[index];
  }

  async patch (id, data, params) {
    const index = this.items.findIndex(item => item.id === id);
    this.items[index] = data;
    return this.items[index];
  }

  async remove (id, params) {
    const index = this.items.findIndex(item => item.id === id);
    this.items.splice(index, 1);
    return { id };
  }
};
