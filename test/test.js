const { startServer, stopServer } = require('../src/server')
const { query, mutate } = require('../src/graphql/client')

const {
  INSERIR_FINALIZADORA,
  INSERIR_PRODUTO,
  INSERIR_CLIENTE,
  ABRIR_ATENDIMENTO,
  LANCAR_ITEM,
  LANCAR_PAGAMENTO,
  ALTERAR_STATUS,
  AUDITAR_EARQUIVAR,
  ATENDIMENTOS
} = require('../src/graphql/query')

let server
beforeAll(async () => {
  server = await startServer()
})

afterAll(async () => {
  if (server) {
    await stopServer(server)
  }
})

describe('Server', function () {
  describe('Atendimentos', function () {
    it('todos', async function () {
      const result = await query({
        query: ATENDIMENTOS
      })

      console.log(result)
    })
  })
})
