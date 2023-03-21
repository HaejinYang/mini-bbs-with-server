import db from '../../db/connector';
import moment from "moment";

interface PostDto {
    id: number;
    title: string;
    body: string;
    writer: string;
    createdAt: Date;
}

class Post {
    private title: string;
    private body: string;
    private writer: string;
    constructor(title: string, body: string, writer: string) {
        this.title = title;
        this.body = body;
        this.writer = writer;
    }

    async Save() {
        const sql: string = `
            INSERT INTO post(title, body, writer, createdAt) 
            VALUES('${this.title}', '${this.body}', '${this.writer}', '${moment(Date.now()).format('YYYY-MM-DD HH:mm:ss')}')`;

        await db.execute(sql);
    }

    static async FindAll(): Promise<PostDto[]> {
        const sql: string = "SELECT * FROM post";

        const [posts]: [PostDto[]] = await db.execute(sql);
        console.log(posts);

        return posts;
    }
}

export default Post;