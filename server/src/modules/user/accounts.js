"use strict";
exports.__esModule = true;
var mongo_1 = require("@accounts/mongo");
var graphql_api_1 = require("@accounts/graphql-api");
var database_manager_1 = require("@accounts/database-manager");
var server_1 = require("@accounts/server");
var password_1 = require("@accounts/password");
var consts_1 = require("../common/consts");
exports.accountsPassword = new password_1.AccountsPassword({
  validateNewUser: function(user) {
    console.log("validateNewUser", user);
    return user;
  }
});
exports.setUpAccounts = function(connection) {
  var userStorage = new mongo_1["default"](connection);
  var accountsDb = new database_manager_1.DatabaseManager({
    sessionStorage: userStorage,
    userStorage: userStorage
  });
  var accountsServer = new server_1.AccountsServer(
    { db: accountsDb, tokenSecret: consts_1.ACCOUNTS_SECRET },
    {
      password: exports.accountsPassword
    }
  );
  var accountsGraphQL = graphql_api_1.AccountsModule.forRoot({
    accountsServer: accountsServer
  });
  return { accountsGraphQL: accountsGraphQL, accountsServer: accountsServer };
};
