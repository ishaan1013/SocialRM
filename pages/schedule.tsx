import type { GetServerSideProps, NextPage } from "next";
import { useEffect, useState } from "react";
import Head from "next/head";
import Router from "next/router";
import Nav from "../components/nav";

import { getAuth, onAuthStateChanged } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { firebaseConfig, db } from "../utils/firebase";

import getOnce from "../utils/getOnce"

interface Contact {
  name: string
  email: string
  circle: string
  tone: string
  freq: string
  current: any
}

const Schedule: NextPage = () => {
  const [user, setUser] = useState<any>(null);
  const [contacts, setContacts] = useState<any>(null);

  const app = initializeApp(firebaseConfig);
  const auth = getAuth()

  const freqs = ["every 5 months", "every 2 months", "every month", "every 2 weeks", "every week"]

  useEffect(() => {

    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        if (user.email) {
          getOnce(user.email).then((res) => {
            setContacts(res)
            console.log("res", res)
            console.log(res[0].current.toDate())
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
      <main className="p-6 flex flex-col justify-start items-center md:pl-[22rem] sm:pt-8 md:pt-12">
        <h1 className="w-full text-center mb-6 text-lg font-bold text-slate-700">
          Upcoming Connections 🤝
        </h1>

        {
          contacts ? 
          contacts.map((contact: any) => (
            <div className="mb-4 flex w-full justify-between items-center rounded-lg bg-purple-100 px-4 py-3 text-base font-medium text-slate-700 hover:bg-purple-200">
              <div>
                <p className="font-bold text-base text-slate-600">{contact.name}</p>
                <p className="font-medium text-[0.72rem] text-slate-500 -mb-1">{(contact.email.length > 16) ? contact.email.slice(0, 16-1) + '...' : contact.email}</p>
                <p className="font-medium text-[0.72rem] text-slate-500">{contact.circle}</p>
              </div>
              <div>
                <p className="font-bold text-[0.72rem] text-slate-600 -mb-1 w-full text-end">Sending {contact.next.toDate().getDate()}-{contact.next.toDate().getMonth()}-{contact.next.toDate().getYear()+1900}</p>
                <p className="font-bold text-[0.72rem] text-slate-600">Repeats {freqs[contact.freq -1]}</p>
              </div>
            </div>
          ))
          :
          <p>Loading...</p>
        }

      </main>
    </div>
  );
};

export default Schedule;
