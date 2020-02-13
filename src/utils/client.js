const { ApolloClient } = require('apollo-client')
const { InMemoryCache } = require('apollo-cache-inmemory')
const { createHttpLink } = require('apollo-link-http')
const nodeFetch = require('node-fetch')
const { appUrl } = require('./config')

const Client = new ApolloClient({
  cache: new InMemoryCache(),
  link: createHttpLink({ uri: appUrl, fetch: nodeFetch })
})

module.exports = {
  ...Client
}
