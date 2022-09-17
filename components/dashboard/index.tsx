import coGenerate from "../../pages/api/cohere";
import { Disclosure } from "@headlessui/react";

import Nav from "../nav";
import { FaChevronUp, FaPlus } from "react-icons/fa";
import New from "./new";
import { useState } from "react";
import Contact from "./contact";
import View from "./view";

const circles = ["Friends", "Family", "Acquaintances", "Colleagues"];
interface Props {
  auth: any;
  user: any;
}

const Dashboard: React.FC<Props> = ({ auth, user }) => {
  const [isCreating, setIsCreating] = useState(false);
  const [isViewing, setIsViewing] = useState(false);
  const [contacts, setContacts] = useState<any[][]>([[], [], [], []]);
  const [currentContact, setCurrentContact] = useState({});

  return (
    <>
      <Nav user={user} auth={auth} />
      {isCreating && (
        <New
          setIsOpen={setIsCreating}
          contacts={contacts}
          setContacts={setContacts}
        />
      )}
      {isViewing && (
        <View
          username={user.displayName}
          contact={currentContact}
          setIsOpen={setIsViewing}
        />
      )}
      <main className="p-4">
        <h1 className="w-full text-center mb-6 text-lg font-bold text-slate-700">
          Your Circles
        </h1>

        <button
          className="flex items-center justify-center w-full p-2 duration-200 bg-purple-600 rounded-lg hover:bg-purple-600/80 mb-4 font-bold text-white text-center"
          onClick={() => setIsCreating(true)}
        >
          <FaPlus className="w-4 h-4 mr-2" />
          Create Contact
        </button>

        {circles.map((circle, i) => (
          <Disclosure as="div" className="mt-4" key={circle}>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-between items-center rounded-lg bg-purple-100 px-4 py-2 text-left text-base font-medium text-slate-700 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-600 focus-visible:ring-opacity-75">
                  <span>{circle}</span>
                  <FaChevronUp
                    className={`${
                      open ? "rotate-180 transform" : ""
                    } h-4 w-4 text-purple-600`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="pt-4 pb-2">
                  {contacts[i].map((contact) => (
                    <Contact
                      contact={contact}
                      setViewing={setIsViewing}
                      setCurrentContact={setCurrentContact}
                      contacts={contacts}
                      setContacts={setContacts}
                      key={contact.name}
                    />
                  ))}
                  <div className="w-full h-[1px] bg-slate-200 mt-6" />
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        ))}
      </main>
    </>
  );
};

export default Dashboard;
