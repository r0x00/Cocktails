module.exports = {
  schema: true,
  attributes: {
    name: {
      type: 'string',
      required: true,
    },
    description: {
      type: 'string'
    },
    // baseSpirit: {
    //   type: 'json'
    // },
    // ingredients: {
    //   type: 'json'
    // },
    // preparation: {
    //   type: 'json'
    // },
    // served: {
    //   type: 'json'
    // },
    // drinkware: {
    //   type: 'json'
    // },
    data: {
      type: 'json'
    },
    enabled: {
      type:'boolean',
      defaultsTo: false
    },
    erased: {
      type: 'boolean',
      defaultsTo: false
    },
    createdAt: {
      type: 'number',
      autoCreatedAt: true
    },
    updatedAt: {
      type: 'number',
      autoUpdatedAt: true
    },
  }
};
