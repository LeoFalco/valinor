async function list (prisma) {
  return prisma.finalizadora.findMany()
}

async function save (prisma, finalizadoraInput) {
  return prisma.finalizadora.upsert({
    create: {
      ...finalizadoraInput
    },
    update: {
      ...finalizadoraInput
    },
    where: {
      id: finalizadoraInput.id || ''
    }
  })
}

module.exports = {
  list,
  save
}
