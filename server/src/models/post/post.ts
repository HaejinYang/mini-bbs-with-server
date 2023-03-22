import db from '../../db/connector';

interface PostDto {
    id: number;
    title: string;
    body: string;
    writer: string;
    createdAt: Date;
}

class Post {
    private readonly title: string;
    private readonly body: string;
    private readonly writer: string;
    constructor(title: string, body: string, writer: string) {
        this.title = title;
        this.body = body;
        this.writer = writer;
    }

    async Save() {
        const sql: string = `
            INSERT INTO post(id, title, body, writer, createdAt) 
            VALUES(1, '${this.title}', '${this.body}', '${this.writer}', '${this.GetDateForTimestamp(new Date())}')`;

        // result.affectedRows;
        return db.execute(sql);
    }

    static async FindAll(): Promise<PostDto[]> {
        const sql: string = "SELECT * FROM post";
        const [posts]: [PostDto[]] = await db.execute(sql);
        // posts.length
        return posts;
    }

    static async Find(id: number): Promise<PostDto> {
        const sql: string = `SELECT * FROM post WHERE id = ${id}`;
        const [post]: [PostDto[]] = await db.execute(sql);
        // posts.length

        return post[0];
    }

    private GetDateForTimestamp(date: Date) {
        const YYYY = date.getFullYear();
        const MM = date.getMonth() + 1;
        const DD = date.getDate();
        const hh = date.getHours();
        const mm = date.getMinutes();
        const ss = date.getSeconds();

        return `${YYYY}-${MM}-${DD} ${hh}-${mm}-${ss}`;
    }
}

export default Post;