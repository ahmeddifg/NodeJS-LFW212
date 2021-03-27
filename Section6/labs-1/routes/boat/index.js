'use strict'


const { boat } = require('../../model')
const { promisify } = require('util');

const read = promisify(boat.read);
const create = promisify(boat.create);

module.exports = async function (fastify, opts) {
  fastify.get('/:id', async function (request, reply) {
    const id = request.params.id;
    try {
        const data =  await read(id);
        reply.type('application/json').code(200);
        data.uid=id;
        return data;
    } catch (e) {
      if (e.message === 'not found')
         throw fastify.httpErrors.notFound();

       throw e;
    }
  })

  fastify.post('/',async function(request,response){
        const id = boat.uid();
        const {data} = request.body;
       
        try{
          await create(id,data);
          response.code(201);
          return data;
        }catch(e){
          if (e.message === 'not found')
          throw fastify.httpErrors.notFound();
         throw e;
        }
  })

}
