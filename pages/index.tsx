import React from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import {
  useTypedQuery,
  useTypedMutation,
} from "../utils/generated/zeus/apollo";
import styles from "../styles/Home.module.css";
import { useStoreActions, useStoreState } from "../store";

const Home: NextPage = () => {
  const [name, setName] = React.useState("naters");
  const [email, setEmail] = React.useState("PopCorn@pop.com");
  const [password, setPassword] = React.useState("123");
  const signup = useStoreActions((actions) => actions.signup);
  const user = useStoreState((state) => state.user);
  const isAuthed = useStoreState((state) => state.auth.isLoggedIn);

  const [muSignup, { called }] = useTypedMutation({
    signup: [
      {
        name,
        email,
        password,
      },
    ],
  });
  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("HI");
    // muSignup();
    signup({ name, email, password });
  };

  const { data, loading, error } = useTypedQuery({
    user: [
      {},
      {
        name: true,
      },
    ],
  });
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error.message}</p>}
        {data && <p>Hello {data.user.map((u) => u.name)}</p>}
        <form>
          <input value={name} onChange={(e) => setName(e.target.value)} />
          <input value={email} onChange={(e) => setEmail(e.target.value)} />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleSignup}>Sign Up</button>
        </form>
        {isAuthed && <p>You are logged in {user?.name}</p>}
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
};

export default Home;
