'use strict';

module.exports = {
  nosqlInjection: require('./nosqlInjection'),
  sqlInjection: require('./sqlInjection'),
  cmdInjection: require('./cmdInjection'),
  pathTraversal: require('./pathTraversal'),
  ssjs: require('./ssjs'),
  ssrf: require('./ssrf'),
  unsafeFileUpload: require('./unsafeFileUpload'),
  unvalidatedRedirect: require('./unvalidatedRedirect'),
  xss: require('./xss'),
  xxe: require('./xxe'),
  untrustedDeserialization: require('./untrustedDeserialization'),
  xpathInjection: require('./xpathInjection')
};