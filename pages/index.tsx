import type { GetStaticProps, NextPage } from "next";
import axios from "axios";
import { IPost } from "interfaces/post.interface";
import Post from "components/Post";
import Introduce from "components/Introduce/Introduce";

interface HomePageProps {
  posts: IPost[];
}

const HomePage: NextPage<HomePageProps> = ({ posts }) => {
  return (
    <>
      <Introduce />
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data } = await axios(`https://jsonplaceholder.typicode.com/posts`);

  return {
    props: {
      posts: data.reverse(),
      seo: {
        title: "Cloned by Moein Alizadeh!",
        description:
          "Overreacted Blog by Dan Abramov, Cloned by Moein Alizadeh for RoomVu as CoolReacted.",
      },
    },
    revalidate: 60,
  };
};

export default HomePage;
