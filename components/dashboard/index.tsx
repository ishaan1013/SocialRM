import { getAuth, signOut } from "firebase/auth";
import coGenerate from "../../pages/api/cohere";

import Nav from "../nav";

interface Props {
  auth: any
  signOut: any
  user: any
}

const Dashboard: React.FC<Props> = ({ auth, signOut, user }) => {
  // coGenerate("Once upon a time there was a");

  return (
    <>
      <Nav user={user} signOut={signOut} />
      <main>
        <h1>Dashboard</h1>
      </main>
    </>
  );
};

export default Dashboard;
