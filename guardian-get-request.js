// Makes a get request to the passed Guardian API URL.  Returns a
// readable stream object.

var requestLib = require("request");
var appendQuery = require("append-query");
var credentials = require("./credentials");

module.exports = function guardianGetRequest(apiRequestUrl) {
  if (apiRequestUrl == null) {
    throw new Error("Need an API request URL");
  }

  if (!apiRequestUrl.match(/^http:\/\/content\.guardianapis\.com/)) {
    throw new Error("apiRequestUrl must start with http://content.guardianapis.com");
  }

  var authenticatedUrl = appendQuery(apiRequestUrl, { "api-key": credentials.guardian().key })
  return requestLib.get(authenticatedUrl);
};
