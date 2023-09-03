module.exports.routesrestful = {
  // Auth
  'post /api/auth/login/rest': {
    controller: 'AuthController',
    action: 'restLogin'
  },
  // End Auth
  // Drinks
  'get /api/drinks/': {
    controller: 'DrinksController',
    action: 'load'
  },
  'get /api/drinks/:id': {
    controller: 'DrinksController',
    action: 'show'
  },
  'post /api/drinks': {
    controller: 'DrinksController',
    action: 'create'
  },
  'post /api/drinks/:id': {
    controller: 'DrinksController',
    action: 'update'
  },
  'post /api/drinks/:id/trash': {
    controller: 'DrinksController',
    action: 'trash'
  },
  'delete /api/drinks/:id': {
    controller: 'DrinksController',
    action: 'delete'
  },
  // Drinks END

  // User
  'get /api/user/': {
    controller: 'UserController',
    action: 'load'
  },
  'get /api/user/:id': {
    controller: 'UserController',
    action: 'show'
  },
  'post /api/user': {
    controller: 'UserController',
    action: 'create'
  },
  'post /api/user/:id': {
    controller: 'UserController',
    action: 'update'
  },
  'post /api/user/:id/trash': {
    controller: 'UserController',
    action: 'trash'
  },
  'delete /api/user/:id': {
    controller: 'UserController',
    action: 'delete'
  }
  // User END


};
