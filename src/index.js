const fastify = require('fastify')({
    logger: true
})

// bring in routes
const routes  = require('./routes')

// db
const mongoose = require('mongoose')

// db connection
mongoose.connect('mongodb://localhost/lcofasti')
.then(() => console.log("MONGO is ready !!"))
.catch(err => console.log(err))


// routes
fastify.get('/', async(request, reply) => {
    return {visiter: "Bhavin Here with Fastify Book Api"}
})

routes.forEach((route, index) => {
    fastify.route(route)
})

// starting server
const start = async () => {
    try {
        await fastify.listen(3000)
        fastify.log.info(`Server is running at ${address}`)
    } catch (error) {
        
    }
}

start()