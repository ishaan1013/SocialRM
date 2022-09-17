import type { NextPage } from 'next'
import Head from 'next/head'
import Router from 'next/router'
import { useEffect, useState } from 'react'

import { getAuth, onAuthStateChanged } from "firebase/auth"
import { initializeApp } from "firebase/app";
import { firebaseConfig, db } from '../utils/firebase'

import Nav from '../components/nav'

const Schedule: NextPage = () => {

    const [user, setUser] = useState<any>(null)

    const app = initializeApp(firebaseConfig);

    const auth = getAuth()

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            } else {
                setUser(null)
                Router.push('/')
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

        <Nav user={user} auth={auth} />

        <div>yeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeessir</div>




        </div>
    )
}

export default Schedule
