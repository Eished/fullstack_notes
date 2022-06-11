const path = require('path')

module.exports = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Eished Express API with Swagger',
      version: '0.1.0',
      description: 'This is a simple CRUD API application made with Express and documented with Swagger.',
      termsOfService: 'https://swagger.io/specification/#document-structure',
      license: {
        name: 'MIT',
        url: 'https://opensource.org/licenses/MIT',
      },
      contact: {
        name: 'API Support',
        url: 'https://iknow.fun',
        email: 'kished@outlook.com',
      },
    },
    servers: [
      {
        url: 'http://localhost:5000/',
        description: 'Development server',
      },
    ],
  },
  apis: [
    // path.join(__dirname, '/../src/routes/*.js'),
    path.join(__dirname, '/../src/api/*.yml'),
    path.join(__dirname, '/../src/api/*.yaml'),
  ],
}
