'use strict'

const { bicycle } = require('../../model')
const {promisify} = require('util');
const read = promisify(bicycle.read);
module.exports = async (fastify, opts) => {
  fastify.get('/:id', async (request, reply) => {
    const { id } = request.params
    try{
    const data =  await  read(id);
    return data;
    }catch(e){
      return e;
    } 
  })
}