const fastify = require('fastify')({ logger: false });

fastify.get('/', async (request, reply) => {
    return { hello: 'Hello World' }
})

const start = async () => {
    try {
        await fastify.listen(8000)
    } catch (err) {
        process.exit(1)
    }
}
start()
