'use strict'
const {boat} = require('../../model')
const {promisify}= require("util")
const read = promisify(boat.read)
module.exports = async function (fastify, opts) {
  fastify.get('/:id', async function (request, reply) {
      try{
      const id =request.params.id;
      const data= await read(id);
      return data;
    }catch(e){
        return fastify.httpErrors.notFound(e);
    }
  })
}
