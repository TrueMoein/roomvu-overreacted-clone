import { FC } from "react";
import styles from "./Introduce.module.scss";
import Image from "next/image";
import Dan from "../../public/images/dan.jpg";

const Introduce: FC = () => {
  return (
    <section className={styles.intro}>
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
  );
};

export default Introduce;
