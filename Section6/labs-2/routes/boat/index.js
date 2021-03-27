'use strict'

const {promisify} = require('util');
const {boat} =require('../../model');

const read = promisify(boat.read);
const create = promisify(boat.create);
const del = promisify(boat.del);

module.exports = async function (fastify, opts) {
  fastify.get('/:id', async function (request, reply) {
     const id = request.params.id;
     try{
       return  await read(id);
     }catch(e){
        if(e.massage === 'not found')
         reply.notFound();
         else
        throw e;
     }
  })

  fastify.post('/',async function(req,res){
      const {data} = req.body;
      const uid=boat.uid();
      try{
        await create(uid,data);
         res.code(201);
        return data;
      }catch(e){
        if(e.massage == 'not found')
        reply.notFound();
        else throw e;
      }
  })

  fastify.delete('/:id',async function(req,res){
      const id=req.params.id;
      try{
          await del(id);
          res.code(204);
      }catch(e){
        if(e.massage == 'not found')
        reply.notFound();
        else throw e;
      }
  });
}
