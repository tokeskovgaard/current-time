"use strict";
exports.__esModule = true;
var plaid = require("plaid");
var consts_1 = require("../common/consts");
exports.client = new plaid.Client(
  consts_1.PLAID_CLIENT_ID,
  consts_1.PLAID_SECRET,
  consts_1.PLAID_PUBLIC_KEY,
  plaid.environments[consts_1.PLAID_ENV],
  { version: "2019-05-29" }
);
