import coGenerate from "../../pages/api/cohere";
import { Disclosure } from "@headlessui/react";
import { collection, doc, onSnapshot, query } from "firebase/firestore";
import { db } from "../../utils/firebase";

import Nav from "../nav";
import { FaChevronUp, FaPlus } from "react-icons/fa";
import Editor from "./editor";
import { useEffect, useState } from "react";
import Contact from "./contact";
import View from "./view";

import Image from "next/image";
import Bg1 from "../../public/wave.svg";
import Bg2 from "../../public/circles.svg";
import Bg3 from "../../public/dots.svg";

const circles = ["Friends", "Family", "Acquaintances", "Colleagues"];
const emojis = ["🤙", "👨‍👩‍👧‍👦", "👋", "💼"];
interface Props {
  auth: any;
  user: any;
}

const Dashboard: React.FC<Props> = ({ auth, user }) => {
  const [isCreating, setIsCreating] = useState(false);
  const [isViewing, setIsViewing] = useState(false);
  const [contacts, setContacts] = useState<any>([[], [], [], []]);
  const [currentContact, setCurrentContact] = useState({});
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    onSnapshot(
      query(collection(db, "users", user.email, "contacts")),
      (querySnapshot) => {
        let newContacts: any = [[], [], [], []];
        querySnapshot.forEach((doc) => {
          const data: any = doc.data();
          const index = circles.indexOf(data.circle);
          newContacts[index].push(data);
        });
        setContacts(newContacts);
      }
    );
  }, []);

  return (
    <>
      <Nav user={user} auth={auth} />
      {isCreating && (
        <Editor
          setIsOpen={setIsCreating}
          user={user}
          edit={editing}
          contact={currentContact}
          setEditing={setEditing}
          contacts={contacts}
          setContacts={setContacts}
        />
      )}
      {isViewing && (
        <View
          user={user}
          contact={currentContact}
          setIsOpen={setIsViewing}
          contacts={contacts}
          setContacts={setContacts}
        />
      )}

      <main className="p-6 flex flex-col justify-start items-center md:pl-[22rem] sm:pt-8 md:pt-12">
        <div className=" fixed bottom-0 md:bottom-12 xl:bottom-24 opacity-20 h-52 scale-100 md:scale-110 xl:scale-[1.2]">
          <div className="relative w-screen h-full">
            <Image src={Bg1} />
          </div>
        </div>
        <div className=" fixed -bottom-60 sm:-bottom-52 lg:-bottom-48 translate-x-48 sm:translate-x-64 md:translate-x-96 opacity-10 scale-100 md:scale-110 xl:scale-[1.2]">
          <div className="relative w-[300px] h-[300px]">
            <Image src={Bg2} />
          </div>
        </div>
        <div className=" fixed -bottom-60 sm:-bottom-52 lg:-bottom-48 -translate-x-8 sm:translate-x-24 md:translate-x-36 opacity-30 scale-100 md:scale-110 xl:scale-[1.2]">
          <div className="relative w-[300px] h-[300px]">
            <Image src={Bg3} />
          </div>
        </div>

        <div className="w-full h-full z-10">
          <h1 className="w-full text-center mb-6 text-lg font-bold text-slate-700">
            Your Circles 🤝
          </h1>
          <button
            className="flex items-center justify-center w-full p-2 duration-200 bg-violet-600 rounded-lg hover:bg-violet-600/80 mb-4 font-bold text-white text-center"
            onClick={() => setIsCreating(true)}
          >
            <FaPlus className="w-4 h-4 mr-2" />
            Create Contact
          </button>
          {circles.map((circle, i) => (
            <Disclosure as="div" className="mt-4 w-full" key={circle}>
              {({ open }) => (
                <>
                  <Disclosure.Button className="duration-200 flex w-full justify-between items-center rounded-lg bg-violet-100 px-4 py-2 text-left text-base font-medium text-slate-700 hover:bg-violet-200 focus:outline-none focus-visible:ring focus-visible:ring-violet-600 focus-visible:ring-opacity-75">
                    <span>
                      {circle} {emojis[i]}
                    </span>
                    <FaChevronUp
                      className={`${
                        open ? "" : "rotate-180 transform"
                      } h-4 w-4 text-violet-600`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel>
                    {!contacts[i].length ? (
                      <p className="text-center mt-3 text-sm font-medium text-slate-400">
                        No contacts yet
                      </p>
                    ) : (
                      <div className="pt-2 pb-2">
                        {contacts[i].map((contact: any, index: any) => (
                          <Contact
                            user={user}
                            contact={contact}
                            setViewing={setIsViewing}
                            setCurrentContact={setCurrentContact}
                            setEditing={setEditing}
                            setIsCreating={setIsCreating}
                            contacts={contacts}
                            setContacts={setContacts}
                            key={contact.name + String(index)}
                          />
                        ))}
                      </div>
                    )}
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          ))}
        </div>
      </main>
    </>
  );
};

export default Dashboard;
