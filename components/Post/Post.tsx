import { FC } from "react";
import { IPost } from "interfaces/post.interface";
import Link from "next/link";
import { calculateReadingTime, splitWords } from "helpers/text";
import styles from "./Post.module.scss";
import { getFakeDateByPostId } from "helpers/date";

interface PostProps {
  post: IPost;
}

const Post: FC<PostProps> = ({ post }) => {
  return (
    <article className={styles.root}>
      <h3>
        <Link href={`/${post.id}`}>
          <a>{splitWords(post.title, 5)}</a>
        </Link>
      </h3>
      <small>
        {getFakeDateByPostId(post.id)} . {calculateReadingTime(post.body)}
      </small>
      <p>{splitWords(post.body, 10)}</p>
    </article>
  );
};

export default Post;
