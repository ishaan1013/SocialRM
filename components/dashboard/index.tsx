import { useState, useEffect } from "react";

import { getAuth, signOut } from "firebase/auth";

import Nav from "../nav";
import Send from "../send";
interface Props {
  auth: any;
  signOut: any;
  user: any;
}

const Dashboard: React.FC<Props> = ({ auth, signOut, user }) => {
  return (
    <>
      <Nav user={user} />
      <main>
        <h1>Dashboard</h1>
        <button
          onClick={() => signOut()}
          className="w-full sm:w-auto text-sm sm:text-base px-0 sm:px-10 py-2 flex justify-center items-center rounded-lg bg-purple-500 hover:bg-purple-500/90 text-white font-semibold duration-200"
        >
          Sign Out
        </button>
        <Send category="Friend" name="Ryan" style="informal" />
      </main>
    </>
  );
};

export default Dashboard;
