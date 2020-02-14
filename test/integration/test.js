const { startServer, stopServer } = require('../../src/server')
const { query, mutate } = require('../../src/graphql/client')
const spawn = require('cross-spawn')

const {
  INSERIR_FINALIZADORA,
  INSERIR_PRODUTO,
  INSERIR_CLIENTE,
  ABRIR_ATENDIMENTO,
  LANCAR_ITEM,
  LANCAR_PAGAMENTO,
  ALTERAR_STATUS,
  AUDITAR_EARQUIVAR,
  ATENDIMENTOS,
  PRODUTOS
} = require('../../src/graphql/query')

let server
beforeAll(async () => {
  spawn.sync('npm', ['run', 'clean-data'], { stdio: 'inherit' }) // aplica migracao
  // server = await startServer()
})

afterAll(async () => {
  if (server) {
    await stopServer(server)
  }
})

describe('Atendimentos', function () {
  it('Query atendimentos shoud respond with data', async function () {
    const result = await query({
      query: ATENDIMENTOS
    })
    expect(result.data).toBeInstanceOf(Array)
  })
})

describe('Produtos', function () {
  it('Query produtos shoud respond with data', async function () {
    const result = await query({
      query: PRODUTOS
    })
    expect(result.data).toBeInstanceOf(Array)
  })
})
