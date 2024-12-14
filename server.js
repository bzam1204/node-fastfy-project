import { fastify } from 'fastify';

import { DatabaseMemory } from './database-postgres.js';

const server = fastify();

const db = new DatabaseMemory();

server.post('/videos', async (request, reply) => {
    const { title, description, duration } = request.body;

    await db.create({
        title,
        description,
        duration,
    });

    return reply.status(201).send();
});

server.get('/videos', async (req) => {
    const search = req.query.search;
    console.log(search);
    const videos = await db.list(search);

    return videos;
});

server.put('/videos/:id', async (request, reply) => {
    const id = request.params.id;
    const { title, description, duration } = request.body;

    await db.update(id, {
        title,
        description,
        duration,
    });

    return reply.status(204).send();
});

server.delete('/videos/:id', async (request, reply) => {
    const id = request.params.id;

    await db.delete(id);

    return reply.status(204).send();
});

server.listen({
    port: process.env.PORT ?? 9241,
});
