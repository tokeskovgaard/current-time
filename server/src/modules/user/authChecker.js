"use strict";
exports.__esModule = true;
exports.authChecker = function(_a, roles) {
  var context = _a.context;
  var user = context.user;
  // if `@Authorized()`, check only is user exist
  if (roles.length === 0) return user !== undefined;
  // there are some roles defined now
  // and if no user, restrict access
  if (!user) return false;
  if (!user.roles) {
    console.error("user has no roles");
    return false;
  }
  if (
    user.roles.some(function(role) {
      return roles.includes(role);
    })
  ) {
    // grant access if the roles overlap
    return true;
  }
  // no roles matched, restrict access
  return false;
};
