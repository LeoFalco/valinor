const { GraphQLServer } = require('graphql-yoga')
const { PrismaClient } = require('@prisma/client')
const { Query, Mutation } = require('./graphql/resolvers')
const { appUrl } = require('./config')
const prisma = new PrismaClient()

function createServer () {
  return new GraphQLServer({
    typeDefs: 'src/graphql/schema.graphql',
    resolvers: { Query, Mutation },
    context: { prisma }
  })
}

const server = createServer()

async function startServer () {
  return server.start(() => console.log('🚀 Server ready at: ' + appUrl))
}

async function stopServer (httpServer) {
  httpServer.close()
  console.log('server down: ' + appUrl)
}

module.exports = {
  startServer,
  stopServer
}
