const crypto = require('crypto');

class Utils {
  static getHash(text) {
    return crypto.createHash('sha256').update(text).digest('base64').replace('=', '');
  }

  static toCamelCase(text) {
    return this.toPascalCase(text).replace(/^[A-Z]/, $ => $.toLowerCase());
  }

  static toPascalCase(text) {
    return text.replace(/[\s_-]?([A-z0-9$])([A-z0-9$]*)/g, ($, $1, $2) => `${$1.toUpperCase()}${$2}`);
  }

  static toSnakeCase(text) {
    return this.toCamelCase(text).replace(/[A-Z]/g, $ => `_${$.toLowerCase()}`);
  }
}

module.exports = Utils;
