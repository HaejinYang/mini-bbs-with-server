import db from '../../db/connector';
import {Expose} from "class-transformer";
import {IsDefined, Length} from "class-validator";
import {GetDateForTimestamp} from "../../common/util";

@Expose()
class PostDto {
    id: number;
    @Length(1, 32)
    @IsDefined()
    title: string;
    @Length(1, 128)
    @IsDefined()
    body: string;
    @Length(1, 16)
    @IsDefined()
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
            INSERT INTO post(title, body, writer, createdAt) 
            VALUES('${this.title}', '${this.body}', '${this.writer}', '${GetDateForTimestamp(new Date())}')`;

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
}

export default Post;
export {PostDto};