import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import axios from "axios";
import { IPost } from "interfaces/post.interface";
import Post from "components/Post";
import Dan from "../public/images/dan.jpg";
import styles from "./HomePage.module.scss";

interface HomePageProps {
  posts: IPost[];
}

const HomePage: NextPage<HomePageProps> = ({ posts }) => {
  return (
    <>
      <section className={styles.danSection}>
        <div className={styles.danImage}>
          <Image src={Dan} alt="Dan Abramov" layout="fill" />
        </div>
        <p>
          Personal blog by{" "}
          <a
            href="https://mobile.twitter.com/dan_abramov"
            target="_blank"
            rel="noreferrer"
          >
            Dan Abramov
          </a>
          .<span>I explain with words and code.</span>
        </p>
      </section>

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
