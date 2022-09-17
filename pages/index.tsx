import type { NextPage } from 'next'
import Head from 'next/head'
import { useState } from 'react'

import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged, GoogleAuthProvider, signInWithPopup } from "firebase/auth"
import { firebaseConfig } from '../utils/firebase'

import Account from '../components/account'

const Home: NextPage = () => {

  const app = initializeApp(firebaseConfig);

  const [user, setUser] = useState<string|null>(null)

  const auth = getAuth()
  const provider = new GoogleAuthProvider();
  provider.addScope('https://www.googleapis.com/auth/contacts.readonly');

  const signIn = () => {
    signInWithPopup(auth, provider)
    .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        if (credential) {
          const token = credential.accessToken
          console.log("token:", token)
        }
        else {
          const token = null
          console.log("token is null")
        }
        const user = result.user;
        console.log(user)
    }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("error:", errorCode, errorMessage)
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
    });
  }

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setUser(user.uid)
    } else {
      setUser(null)
    }
  })

  return (
    <div className="w-screen h-screen">
      <Head>
        <title>SocialRM</title>
        <meta name="description" content="Your AI-based, automated social relationship manager!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* {user ? 
      <main className="w-screen h-screen">
      </main>
      : 
      <Account /> 
      } */}

      <Account signIn={signIn} />



    </div>
  )
}

export default Home
