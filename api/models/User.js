module.exports = {
  schema: true,
  attributes: {
    username: {
      type: 'string',
      required: true
    },
    email: {
      type: 'string',
      isEmail: true,
      required: true,
      unique: true
    },
    passports: {
      collection: 'Passport',
      via: 'user'
    },
    permission: {
      type: 'string',
      isIn: ['common', 'admin'],
      defaultsTo: 'common'
    },
    color: {
      type: 'string',
      defaultsTo: '#E44F44'
    },
    enabled: {
      type:'boolean',
      defaultsTo: true
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
}
