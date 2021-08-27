import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/Home.module.scss";
import Menu from "../components/menu";

const Home: NextPage = () => {
  return (
    <div className={styles.HomeBigFrame}>
      <Image
        src="/behrouz-sasani-1B22UBPK1Pw-unsplash.jpg"
        alt=""
        width={300}
        height={400}
      />
    </div>
  );
};

export default Home;
