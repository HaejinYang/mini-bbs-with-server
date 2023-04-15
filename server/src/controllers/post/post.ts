import { Request, Response } from "express";
import Post, { PostDto } from "../../models/post/post";
import { plainToInstance } from "class-transformer";
import { validateOrReject } from "class-validator";

interface ResultMsg {
  result: boolean;
  msg: string;
}

interface ResultMsgGetAllPosts extends ResultMsg {
  posts: PostDto[];
}

interface ResultMsgWritePost extends ResultMsg {
  id: number;
}

interface ResultMsgGetPost extends ResultMsg {
  post: PostDto;
}

const GetAllPosts = async (req: Request, res: Response) => {
  const result = await Post.FindAll();
  const retMsg: ResultMsgGetAllPosts = {
    result: true,
    msg: "게시글 모두 가져오기 성공",
    posts: result,
  };

  res.status(200).json(retMsg);
};

const WritePost = async (req: Request, res: Response) => {
  const reqPost: PostDto = plainToInstance(PostDto, req.body, {
    excludeExtraneousValues: true,
  });
  try {
    await validateOrReject(reqPost, { skipMissingProperties: true }); // validateOrReject
    const post = new Post(reqPost.title, reqPost.body, reqPost.writer);
    const result = await post.Save();
    const retMsg: ResultMsgWritePost = {
      result: true,
      msg: "저장 성공",
      id: result[0].insertId,
    };

    res.status(200).json(retMsg);
  } catch (e) {
    const retMsg: ResultMsg = {
      result: false,
      msg: `저장 실패. ${JSON.stringify(e)}`,
    };
    res.status(500).json(retMsg);
  }
};

const GetPost = async (req: Request, res: Response) => {
  const id: number = parseInt(req.params.id);
  if (isNaN(id)) {
    const retMsg: ResultMsg = {
      result: false,
      msg: `invalid params ${id}`,
    };

    return res.status(400).json(retMsg);
  }

  try {
    const post = await Post.Find(id);
    const retMsg: ResultMsgGetPost = {
      result: true,
      msg: "게시글 하나 가져오기 성공",
      post: post,
    };
    res.status(200).json(retMsg);
  } catch (e) {
    res.status(500).json(e);
  }
};

export {GetAllPosts, WritePost, GetPost};