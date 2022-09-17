import coGenerate from "../../pages/api/cohere";
import { Disclosure } from "@headlessui/react";

import Nav from "../nav";
import { FaChevronUp, FaPlus } from "react-icons/fa";
import New from "./new";
import Send from "../send";
interface Props {
  auth: any;
  signOut: any;
  user: any;
}

const Dashboard: React.FC<Props> = ({ auth, signOut, user }) => {
  return (
    <>
      <Nav user={user} signOut={signOut} />
      <Send
        username={user.displayName}
        category="friends"
        name="Ryan"
        tone="Politely and caringly"
      />
    </>
  );
};

export default Dashboard;
