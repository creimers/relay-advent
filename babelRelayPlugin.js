var babelRelayPlugin   = require('babel-relay-plugin');
var introspectionQuery = require('graphql/utilities').introspectionQuery;
var request            = require('sync-request');
import config from 'config'

var graphqlHubUrl = config.graphqlResource
var response = request('GET', graphqlHubUrl, {
  qs: {
    query: introspectionQuery
  }
});

var schema = JSON.parse(response.body.toString('utf-8'));

module.exports = babelRelayPlugin(schema.data, {
  abortOnError: true,
});
