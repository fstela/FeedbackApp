module.exports = {
    app: {
        port: 8080,
        allowCorsForUrl: "http://localhost:9000",
        enableCors: false
    },
    db: {
        HOST: "localhost",
        USER: "root",
        PASSWORD: "bubu",
        DB: "webtech",
        dialect: "mysql",
        pool: {
          max: 5,
          min: 0,
          acquire: 30000,
          idle: 10000,
        },
      },
      auth: {
          iss: "webtech",
          audience: "webtech.lan",
          secret: "webtechappsecrettoken",
          passwordSaltRounds: 10
      }
};
  