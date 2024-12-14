import { randomUUID } from 'node:crypto';

import sql from './db.js';

export class DatabaseMemory {
    async list(search) {
        console.log(search ? `WHERE title ILIKE %${search}%` : '');

        if (search) {
            return await sql`SELECT * FROM videos WHERE title ILIKE ${
                '%' + search + '%'
            };`;
        }

        return await sql`SELECT * FROM videos;`;
    }

    async create({ title, description, duration }) {
        const newVideo =
            await sql`INSERT INTO videos (id, title, description, duration) VALUES (${randomUUID()}, ${title}, ${description}, ${duration});`;

        return newVideo;
    }

    async update(id, { title, description, duration }) {
        return await sql`UPDATE videos SET title = ${title}, description = ${description}, duration = ${duration} WHERE id = ${id}`;
    }

    // delete(id) {}
}
