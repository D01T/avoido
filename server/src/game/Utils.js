const crypto = require('crypto');

export default class Utils {
  static getHash(text) {
    return crypto.createHash('sha256').update(text).digest('base64').replace('=', '');
  }
}