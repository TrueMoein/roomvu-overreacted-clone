import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import axios from "axios";
import { getFakeDateByPostId } from "helpers/date";
import { splitWords } from "helpers/text";
import { IPost } from "interfaces/post.interface";
import styles from "./PostPage.module.scss";

interface PostPageProps {
  post: IPost;
}

const PostPage: NextPage<PostPageProps> = ({ post }) => {
  return (
    <article className={styles.root}>
      <h1>{post.title}</h1>
      <small>{getFakeDateByPostId(post.id)}</small>

      <p>{post.body}</p>
    </article>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data }: { data: IPost } = await axios(
    `https://jsonplaceholder.typicode.com/posts/${ctx?.params?.postId}`
  );

  return {
    props: {
      post: data,
      seo: {
        title: data.title,
        description: `${data.title} _ ${splitWords(data.body, 5)}`,
      },
    },
    revalidate: 60,
  };
};

export default PostPage;
