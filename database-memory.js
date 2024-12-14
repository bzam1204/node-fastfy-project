import { randomUUID } from 'node:crypto';

export class DatabaseMemory {
    #videos = new Map();

    list(search) {
        return Array.from(this.#videos.entries())
            .map((videoArray) => {
                const id = videoArray[0];
                const data = videoArray[1];

                return {
                    id,
                    ...data,
                };
            })
            .filter((v) => (search ? v.title.includes(search) : true));
    }

    create(video) {
        console.log(video);
        const videoId = randomUUID();

        this.#videos.set(videoId, video);
    }

    update(id, video) {
        this.#videos.set(id, video);
    }

    delete(id) {
        this.#videos.delete(id);
    }
}
