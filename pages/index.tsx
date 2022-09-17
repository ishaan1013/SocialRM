import type { NextPage } from 'next'
import Head from 'next/head'
import { useEffect, useState } from 'react'

import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth"
import { firebaseConfig, db } from '../utils/firebase'

import Account from '../components/account'
import Dashboard from '../components/dashboard';

export const signOutFunc = (auth:any) => {
  signOut(auth).then(() => {
    console.log("signed out")
  }).catch((error) => {
    console.log("error")
  });
}

const Home: NextPage = () => {

  const app = initializeApp(firebaseConfig);

  const [user, setUser] = useState<any>(null)

  const auth = getAuth()
  const provider = new GoogleAuthProvider();

  provider.addScope('https://www.googleapis.com/auth/gmail.compose');
  provider.addScope('https://www.googleapis.com/auth/gmail.readonly');

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
        setUser(user)
        console.log(user)
    }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("error:", errorCode, errorMessage)
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
    });
  }


  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user)
      } else {
        setUser(null)
      }
    })
  }, [])

  return (
    <div className="w-screen h-screen">
      <Head>
        <title>SocialRM</title>
        <meta name="description" content="Your AI-based, automated social relationship manager!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {user ? 
      <Dashboard auth={auth} user={user} />
      : 
      <Account signIn={signIn} />
      }




    </div>
  )
}

export default Home
