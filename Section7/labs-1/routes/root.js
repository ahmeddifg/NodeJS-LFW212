'use strict'

const  got = require('got');

const {  BOAT_SERVICE_PORT,  BRAND_SERVICE_PORT} = process.env

module.exports = async function (fastify, opts) {
  fastify.get('/', async function (request, reply) {
    return { root: true }
  })

  fastify.get('/:id', async function (request, reply) {
    const id = request.params.id;
    
    try{
      console.log(`http://localhost:${BOAT_SERVICE_PORT}/`+id);
    const boatData= await got(`http://localhost:${BOAT_SERVICE_PORT}/`+id).json();
    const brandId= boatData.brand;
    console.log("-------");
    console.log(boatData);
    const brandData= await got(`http://localhost:${BRAND_SERVICE_PORT}/`+brandId).json();
    reply.code(200);
    return {
      id: boatData.id,
      color: boatData.color,
      brand: brandData.name
    }
    }catch(e){
      if(!e.response)
      throw e;
      
      if(e.response.statusCode == 404)
      throw fastify.httpErrors.notFound();

      if(e.response.statusCode == 400)
      throw fastify.httpErrors.badRequest();

    }

  })
}
