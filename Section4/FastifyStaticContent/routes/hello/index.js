const { default: fastify } = require("fastify");

module.exports = async (fastify, opts) => {
    fastify.get("/", async (req, res) => {
        return res.sendFile('hello.html');
    }) 
}
