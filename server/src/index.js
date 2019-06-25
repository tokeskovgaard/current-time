"use strict";
var __assign =
  (this && this.__assign) ||
  function() {
    __assign =
      Object.assign ||
      function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
      };
    return __assign.apply(this, arguments);
  };
var __awaiter =
  (this && this.__awaiter) ||
  function(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function(resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : new P(function(resolve) {
              resolve(result.value);
            }).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
var __generator =
  (this && this.__generator) ||
  function(thisArg, body) {
    var _ = {
        label: 0,
        sent: function() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
      f,
      y,
      t,
      g;
    return (
      (g = { next: verb(0), throw: verb(1), return: verb(2) }),
      typeof Symbol === "function" &&
        (g[Symbol.iterator] = function() {
          return this;
        }),
      g
    );
    function verb(n) {
      return function(v) {
        return step([n, v]);
      };
    }
    function step(op) {
      if (f) throw new TypeError("Generator is already executing.");
      while (_)
        try {
          if (
            ((f = 1),
            y &&
              (t =
                op[0] & 2
                  ? y["return"]
                  : op[0]
                  ? y["throw"] || ((t = y["return"]) && t.call(y), 0)
                  : y.next) &&
              !(t = t.call(y, op[1])).done)
          )
            return t;
          if (((y = 0), t)) op = [op[0] & 2, t.value];
          switch (op[0]) {
            case 0:
            case 1:
              t = op;
              break;
            case 4:
              _.label++;
              return { value: op[1], done: false };
            case 5:
              _.label++;
              y = op[1];
              op = [0];
              continue;
            case 7:
              op = _.ops.pop();
              _.trys.pop();
              continue;
            default:
              if (
                !((t = _.trys), (t = t.length > 0 && t[t.length - 1])) &&
                (op[0] === 6 || op[0] === 2)
              ) {
                _ = 0;
                continue;
              }
              if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                _.label = op[1];
                break;
              }
              if (op[0] === 6 && _.label < t[1]) {
                _.label = t[1];
                t = op;
                break;
              }
              if (t && _.label < t[2]) {
                _.label = t[2];
                _.ops.push(op);
                break;
              }
              if (t[2]) _.ops.pop();
              _.trys.pop();
              continue;
          }
          op = body.call(thisArg, _);
        } catch (e) {
          op = [6, e];
          y = 0;
        } finally {
          f = t = 0;
        }
      if (op[0] & 5) throw op[1];
      return { value: op[0] ? op[1] : void 0, done: true };
    }
  };
var _this = this;
exports.__esModule = true;
require("reflect-metadata");
var mongoose = require("mongoose");
var apollo_server_express_1 = require("apollo-server-express");
var express = require("express");
var type_graphql_1 = require("type-graphql");
var graphql_toolkit_1 = require("graphql-toolkit");
var consts_1 = require("./modules/common/consts");
var UserResolver_1 = require("./modules/user/UserResolver");
var authChecker_1 = require("./modules/user/authChecker");
var accounts_1 = require("./modules/user/accounts");
var typegoose_1 = require("./middleware/typegoose");
(function() {
  return __awaiter(_this, void 0, void 0, function() {
    var mongooseConnection,
      _a,
      accountsGraphQL,
      accountsServer,
      typeGraphqlSchema,
      schema,
      server,
      app;
    return __generator(this, function(_b) {
      switch (_b.label) {
        case 0:
          return [
            4 /*yield*/,
            mongoose.connect(
              "mongodb+srv://" +
                (consts_1.MONGO_HOST || "localhost") +
                "/" +
                consts_1.DB_NAME,
              { useNewUrlParser: true }
            )
          ];
        case 1:
          mongooseConnection = _b.sent();
          (_a = accounts_1.setUpAccounts(mongooseConnection.connection)),
            (accountsGraphQL = _a.accountsGraphQL),
            (accountsServer = _a.accountsServer);
          return [
            4 /*yield*/,
            type_graphql_1.buildSchema({
              resolvers: [UserResolver_1["default"]],
              globalMiddlewares: [typegoose_1.TypegooseMiddleware],
              // scalarsMap: [{ type: ObjectId, scalar: ObjectIdScalar }],
              validate: false,
              emitSchemaFile: true,
              authChecker: authChecker_1.authChecker
            })
          ];
        case 2:
          typeGraphqlSchema = _b.sent();
          schema = apollo_server_express_1.makeExecutableSchema({
            typeDefs: graphql_toolkit_1.mergeTypeDefs([
              accountsGraphQL.typeDefs
            ]),
            resolvers: graphql_toolkit_1.mergeResolvers([
              accountsGraphQL.resolvers
            ]),
            schemaDirectives: __assign({}, accountsGraphQL.schemaDirectives)
          });
          server = new apollo_server_express_1.ApolloServer({
            schema: graphql_toolkit_1.mergeSchemas({
              schemas: [schema, typeGraphqlSchema]
            }),
            context: accountsGraphQL.context,
            formatError: function(error) {
              console.error(error);
              return error;
            },
            playground: true
          });
          app = express();
          app.use(express.static("../client/dist"));
          server.applyMiddleware({ app: app });
          return [4 /*yield*/, app.listen({ port: consts_1.PORT })];
        case 3:
          _b.sent();
          console.log(
            "\uD83D\uDE80 Server ready at localhost:" + consts_1.PORT
          );
          return [2 /*return*/];
      }
    });
  });
})();
