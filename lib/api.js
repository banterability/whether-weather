const request = require('request');

module.exports = class DarkSky {
  constructor(options = {}) {
    this.baseUrl = 'https://api.darksky.net';

    if (options.apiKey) {
      this.apiKey = options.apiKey;
    } else {
      throw new Error('apiKey required');
    }
  }

  forecast({lat, lng}, cb) {
    request({
      url: `${this.baseUrl}/forecast/${this.apiKey}/${lat},${lng}`,
      json: true,
      qs: {
        exclude: ['minutely', 'hourly', 'alerts', 'flags'].join(',')
      }
    }, (err, res, body) => {
      cb(err, body);
    });
  }
}
