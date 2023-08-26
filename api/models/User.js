exports.modules = {
  schema: true,
  attributes: {
    username: {
      type: 'string',
      required: true
    },
    email: {
      type: 'email',
      required: true,
      unique: true
    },
    permission: {
      type: 'string',
      enum: ['common', 'admin'],
      defaultsTo: 'common'
    },
    color: {
      type: 'string',
      defaultsTo: '#E44F44'
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
