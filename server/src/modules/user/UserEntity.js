"use strict";
var __extends =
  (this && this.__extends) ||
  (function() {
    var extendStatics = function(d, b) {
      extendStatics =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function(d, b) {
            d.__proto__ = b;
          }) ||
        function(d, b) {
          for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        };
      return extendStatics(d, b);
    };
    return function(d, b) {
      extendStatics(d, b);
      function __() {
        this.constructor = d;
      }
      d.prototype =
        b === null
          ? Object.create(b)
          : ((__.prototype = b.prototype), new __());
    };
  })();
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
exports.__esModule = true;
var typegoose_1 = require("typegoose");
var type_graphql_1 = require("type-graphql");
var consts_1 = require("./consts");
var Profile = /** @class */ (function() {
  function Profile() {}
  __decorate(
    [typegoose_1.prop({ required: true }), type_graphql_1.Field()],
    Profile.prototype,
    "firstName"
  );
  __decorate(
    [typegoose_1.prop({ required: false }), type_graphql_1.Field()],
    Profile.prototype,
    "middleName"
  );
  __decorate(
    [typegoose_1.prop({ required: true }), type_graphql_1.Field()],
    Profile.prototype,
    "lastName"
  );
  Profile = __decorate([type_graphql_1.ObjectType()], Profile);
  return Profile;
})();
exports.Profile = Profile;
var Plaid = /** @class */ (function() {
  function Plaid() {}
  __decorate(
    [typegoose_1.prop({ required: true }), type_graphql_1.Field()],
    Plaid.prototype,
    "accessToken"
  );
  __decorate(
    [typegoose_1.prop({ required: true }), type_graphql_1.Field()],
    Plaid.prototype,
    "itemId"
  );
  Plaid = __decorate([type_graphql_1.ObjectType()], Plaid);
  return Plaid;
})();
exports.Plaid = Plaid;
var Property = /** @class */ (function() {
  function Property() {}
  __decorate(
    [typegoose_1.prop({ required: true }), type_graphql_1.Field()],
    Property.prototype,
    "address"
  );
  __decorate(
    [typegoose_1.prop({ required: true }), type_graphql_1.Field()],
    Property.prototype,
    "placeId"
  );
  __decorate(
    [typegoose_1.prop({ required: true }), type_graphql_1.Field()],
    Property.prototype,
    "rentAmount"
  );
  Property = __decorate([type_graphql_1.ObjectType()], Property);
  return Property;
})();
exports.Property = Property;
var User = /** @class */ (function(_super) {
  __extends(User, _super);
  function User() {
    return (_super !== null && _super.apply(this, arguments)) || this;
  }
  __decorate(
    [
      type_graphql_1.Field(function(type) {
        return type_graphql_1.ID;
      })
    ],
    User.prototype,
    "_id"
  );
  __decorate(
    [
      typegoose_1.prop(),
      type_graphql_1.Field(function(type) {
        return Profile;
      })
    ],
    User.prototype,
    "profile"
  );
  __decorate(
    [
      typegoose_1.prop(),
      type_graphql_1.Field(
        function(type) {
          return Plaid;
        },
        { nullable: true }
      )
    ],
    User.prototype,
    "plaid"
  );
  __decorate(
    [
      typegoose_1.prop(),
      type_graphql_1.Field(
        function(type) {
          return Property;
        },
        { nullable: true }
      )
    ],
    User.prototype,
    "properties"
  );
  __decorate(
    [
      typegoose_1.prop({ required: true, enum: consts_1.Role }),
      type_graphql_1.Field(function(type) {
        return consts_1.Role;
      })
    ],
    User.prototype,
    "roles"
  );
  __decorate(
    [typegoose_1.prop(), type_graphql_1.Field({ nullable: true })],
    User.prototype,
    "isOnboarded"
  );
  __decorate(
    [
      typegoose_1.prop(),
      type_graphql_1.Field(function() {
        return Date;
      })
    ],
    User.prototype,
    "createdAt"
  );
  __decorate(
    [
      typegoose_1.prop(),
      type_graphql_1.Field(function() {
        return Date;
      })
    ],
    User.prototype,
    "updatedAt"
  );
  User = __decorate([type_graphql_1.ObjectType()], User);
  return User;
})(typegoose_1.Typegoose);
exports.User = User;
exports["default"] = new User().getModelForClass(User, {
  schemaOptions: { timestamps: true }
});
