import db from '../../db/connector';
import {GetDateForTimestamp} from "../../common/util";
import {Expose} from "class-transformer";
import {IsDefined, Length} from "class-validator";

@Expose()
class CommentDto {
    id: number;
    @Length(1, 256)
    @IsDefined()
    body: string;

    @Length(1, 64)
    @IsDefined()
    writer: string;
    createdAt: Date;
}

class CommentInPost {
    private readonly body: string;
    private readonly writer: string;

    constructor(body: string, writer: string) {
        this.body = body;
        this.writer = writer;
    }

    async Save() {
        const sql = `INSERT INTO comment(body, writer, createdAt) VALUES('${this.body}', '${this.writer}', '${GetDateForTimestamp(new Date())}')`;

        return db.execute(sql);
    }
}

export default CommentInPost;
export {CommentDto};