import type { GetServerSideProps, NextPage } from "next";
import { useEffect, useState } from "react";
import Head from "next/head";
import Router from "next/router";
import Nav from "../components/nav";

import { getAuth, onAuthStateChanged } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { firebaseConfig, db } from "../utils/firebase";

import getOnce from "../utils/getOnce"

const Schedule: NextPage = () => {
  const [user, setUser] = useState<any>(null);
  const [contacts, setContacts] = useState<any>(null);

  const app = initializeApp(firebaseConfig);
  const auth = getAuth()

  useEffect(() => {

    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        if (user.email) {
          getOnce(user.email).then((res) => {
            setContacts(res)
            console.log("res", res)
          })
        }
      } else {
        setUser(null);
        Router.push("/");
      }
    });


  }, []);

  return (
    <div className="w-screen h-screen">
      <Head>
        <title>SocialRM</title>
        <meta
          name="description"
          content="Your AI-based, automated social relationship manager!"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav user={user} auth={auth} />
      <main className="p-4">
        <h1 className="w-full text-center mb-6 text-lg font-bold text-slate-700">
          Upcoming Connections 🤝
        </h1>

        <div className="">

        </div>
      </main>
    </div>
  );
};

export default Schedule;
