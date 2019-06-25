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
var __decorate =
  (this && this.__decorate) ||
  function(decorators, target, key, desc) {
    var c = arguments.length,
      r =
        c < 3
          ? target
          : desc === null
          ? (desc = Object.getOwnPropertyDescriptor(target, key))
          : desc,
      d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if ((d = decorators[i]))
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
var __param =
  (this && this.__param) ||
  function(paramIndex, decorator) {
    return function(target, key) {
      decorator(target, key, paramIndex);
    };
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
exports.__esModule = true;
var type_graphql_1 = require("type-graphql");
var UserService_1 = require("./UserService");
var UserEntity_1 = require("./UserEntity");
require("./enums");
var accounts_1 = require("./accounts");
var consts_1 = require("./consts");
var plaid_1 = require("../payments/plaid");
var ProfileInput = /** @class */ (function() {
  function ProfileInput() {}
  __decorate(
    [
      type_graphql_1.Field(function(type) {
        return String;
      })
    ],
    ProfileInput.prototype,
    "firstName"
  );
  __decorate(
    [
      type_graphql_1.Field(function(type) {
        return String;
      })
    ],
    ProfileInput.prototype,
    "middleName"
  );
  __decorate(
    [
      type_graphql_1.Field(function(type) {
        return String;
      })
    ],
    ProfileInput.prototype,
    "lastName"
  );
  ProfileInput = __decorate([type_graphql_1.InputType()], ProfileInput);
  return ProfileInput;
})();
var CreateUserInput = /** @class */ (function() {
  function CreateUserInput() {}
  __decorate(
    [
      type_graphql_1.Field(function(type) {
        return String;
      })
    ],
    CreateUserInput.prototype,
    "email"
  );
  __decorate(
    [
      type_graphql_1.Field(function(type) {
        return String;
      })
    ],
    CreateUserInput.prototype,
    "password"
  );
  __decorate(
    [
      type_graphql_1.Field(function(type) {
        return ProfileInput;
      })
    ],
    CreateUserInput.prototype,
    "profile"
  );
  CreateUserInput = __decorate([type_graphql_1.InputType()], CreateUserInput);
  return CreateUserInput;
})();
var PropertyInput = /** @class */ (function() {
  function PropertyInput() {}
  __decorate(
    [
      type_graphql_1.Field(function(type) {
        return String;
      })
    ],
    PropertyInput.prototype,
    "address"
  );
  __decorate(
    [
      type_graphql_1.Field(function(type) {
        return String;
      })
    ],
    PropertyInput.prototype,
    "placeId"
  );
  __decorate(
    [
      type_graphql_1.Field(function(type) {
        return Number;
      })
    ],
    PropertyInput.prototype,
    "rentAmount"
  );
  PropertyInput = __decorate([type_graphql_1.InputType()], PropertyInput);
  return PropertyInput;
})();
exports.PropertyInput = PropertyInput;
var UserResolver = /** @class */ (function() {
  function UserResolver() {
    this.service = new UserService_1.UserService();
  }
  UserResolver.prototype.me = function(ctx) {
    return __awaiter(this, void 0, void 0, function() {
      return __generator(this, function(_a) {
        switch (_a.label) {
          case 0:
            if (!ctx.userId) return [3 /*break*/, 2];
            return [4 /*yield*/, this.service.findOneById(ctx.userId)];
          case 1:
            return [2 /*return*/, _a.sent()];
          case 2:
            return [2 /*return*/];
        }
      });
    });
  };
  // this overrides accounts js `createUser` function
  UserResolver.prototype.createUser = function(user) {
    return __awaiter(this, void 0, void 0, function() {
      var createdUserId;
      return __generator(this, function(_a) {
        switch (_a.label) {
          case 0:
            return [
              4 /*yield*/,
              accounts_1.accountsPassword.createUser(
                __assign({}, user, { roles: [consts_1.Role.User] })
              )
            ];
          case 1:
            createdUserId = _a.sent();
            return [2 /*return*/, createdUserId];
        }
      });
    });
  };
  UserResolver.prototype.onboardUser = function(publicToken, property, ctx) {
    return __awaiter(this, void 0, void 0, function() {
      var _this = this;
      return __generator(this, function(_a) {
        return [
          2 /*return*/,
          new Promise(function(resolve, reject) {
            plaid_1.client.exchangePublicToken(publicToken, function(
              err,
              response
            ) {
              return __awaiter(_this, void 0, void 0, function() {
                var user;
                return __generator(this, function(_a) {
                  switch (_a.label) {
                    case 0:
                      if (err != null) reject(err);
                      return [
                        4 /*yield*/,
                        this.service.findOneById(ctx.userId)
                      ];
                    case 1:
                      user = _a.sent();
                      user.plaid = {
                        accessToken: response.access_token,
                        itemId: response.item_id
                      };
                      user.properties = [property];
                      user.isOnboarded = true;
                      return [4 /*yield*/, user.save()];
                    case 2:
                      _a.sent();
                      resolve(true);
                      return [2 /*return*/];
                  }
                });
              });
            });
          })
        ];
      });
    });
  };
  UserResolver.prototype.setPlaidToken = function(publicToken, ctx) {
    return __awaiter(this, void 0, void 0, function() {
      var _this = this;
      return __generator(this, function(_a) {
        return [
          2 /*return*/,
          new Promise(function(resolve, reject) {
            plaid_1.client.exchangePublicToken(publicToken, function(
              err,
              response
            ) {
              return __awaiter(_this, void 0, void 0, function() {
                var user;
                return __generator(this, function(_a) {
                  switch (_a.label) {
                    case 0:
                      if (err != null) reject(err);
                      return [
                        4 /*yield*/,
                        this.service.findOneById(ctx.userId)
                      ];
                    case 1:
                      user = _a.sent();
                      user.plaid = {
                        accessToken: response.access_token,
                        itemId: response.item_id
                      };
                      return [4 /*yield*/, user.save()];
                    case 2:
                      _a.sent();
                      resolve(true);
                      return [2 /*return*/];
                  }
                });
              });
            });
          })
        ];
      });
    });
  };
  __decorate(
    [
      type_graphql_1.Query(function(returns) {
        return UserEntity_1.User;
      }),
      type_graphql_1.Authorized(),
      __param(0, type_graphql_1.Ctx())
    ],
    UserResolver.prototype,
    "me"
  );
  __decorate(
    [
      type_graphql_1.Mutation(function(returns) {
        return type_graphql_1.ID;
      }),
      __param(
        0,
        type_graphql_1.Arg("user", function(returns) {
          return CreateUserInput;
        })
      )
    ],
    UserResolver.prototype,
    "createUser"
  );
  __decorate(
    [
      type_graphql_1.Mutation(function(returns) {
        return Boolean;
      }),
      type_graphql_1.Authorized(),
      __param(0, type_graphql_1.Arg("publicToken")),
      __param(1, type_graphql_1.Arg("property")),
      __param(2, type_graphql_1.Ctx())
    ],
    UserResolver.prototype,
    "onboardUser"
  );
  __decorate(
    [
      type_graphql_1.Mutation(function(returns) {
        return Boolean;
      }),
      type_graphql_1.Authorized(),
      __param(0, type_graphql_1.Arg("publicToken")),
      __param(1, type_graphql_1.Ctx())
    ],
    UserResolver.prototype,
    "setPlaidToken"
  );
  UserResolver = __decorate(
    [type_graphql_1.Resolver(UserEntity_1.User)],
    UserResolver
  );
  return UserResolver;
})();
exports["default"] = UserResolver;
