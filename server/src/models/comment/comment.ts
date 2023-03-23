import db from '../../db/connector';
import {GetDateForTimestamp} from "../../common/util";
import {Expose} from "class-transformer";
import {IsDefined, Length} from "class-validator";

@Expose()
class CommentDto {
    commentId: number;
    @IsDefined()
    postId: number;
    @Length(1, 256)
    @IsDefined()
    body: string;

    @Length(1, 64)
    @IsDefined()
    writer: string;
    createdAt: Date;
}

class CommentInPost {
    private readonly postId: number;
    private readonly body: string;
    private readonly writer: string;

    constructor(postId: number, body: string, writer: string) {
        this.postId = postId;
        this.body = body;
        this.writer = writer;
    }

    async Save() {
        const sql = `INSERT INTO comment(postId, body, writer, createdAt) VALUES('${this.postId}', '${this.body}', '${this.writer}', '${GetDateForTimestamp(new Date())}')`;

        return db.execute(sql);
    }

    static async GetCommentsInPost(postId: number): Promise<CommentDto[]> {
        const sql = `SELECT comment.commentId, comment.postId, comment.body, comment.writer, comment.createdAt FROM comment, post WHERE comment.postId = post.id`;

        const [result]: [CommentDto[]] = await db.execute(sql);

        return result;
    }
}

export default CommentInPost;
export {CommentDto};