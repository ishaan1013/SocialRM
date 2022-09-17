import coGenerate from "../../pages/api/cohere";
import { Disclosure } from "@headlessui/react";

import Nav from "../nav";
import { FaChevronUp, FaPlus } from "react-icons/fa";
import New from "./new";
import { useState } from "react";
import Contact from "./contact";
import View from "./view";

interface Props {
  auth: any;
  signOut: any;
  user: any;
}

const Dashboard: React.FC<Props> = ({ auth, signOut, user }) => {

  const [isCreating, setIsCreating] = useState(false)
  const [isViewing, setIsViewing] = useState(false)

  return (
    <>
      <Nav user={user} signOut={signOut} />
      {isCreating && <New setIsOpen={setIsCreating} /> }
      {isViewing && <View setIsOpen={setIsViewing} /> }
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

        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between items-center rounded-lg bg-purple-100 px-4 py-2 text-left text-base font-medium text-slate-700 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-600 focus-visible:ring-opacity-75">
                <span>Friends</span>
                <FaChevronUp
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-4 w-4 text-purple-600`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="pt-4 pb-2">
                <Contact setViewing={setIsViewing} />
                <div className="w-full h-[1px] bg-slate-200 mt-6" />
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-4">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between items-center rounded-lg bg-purple-100 px-4 py-2 text-left text-base font-medium text-slate-700 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-600 focus-visible:ring-opacity-75">
                <span>Family</span>
                <FaChevronUp
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-4 w-4 text-purple-600`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="pt-4 pb-2">
                <p className="text-sm text-slate-500">
                  If you're unhappy with your purchase for any reason, email us
                  within 90 days and we'll refund you in full, no questions
                  asked.
                </p>
                <div className="w-full h-[1px] bg-slate-200 mt-6" />
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-4">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between items-center rounded-lg bg-purple-100 px-4 py-2 text-left text-base font-medium text-slate-700 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-600 focus-visible:ring-opacity-75">
                <span>Acquaintances</span>
                <FaChevronUp
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-4 w-4 text-purple-600`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="pt-4 pb-2">
                <p className="text-sm text-slate-500">
                  If you're unhappy with your purchase for any reason, email us
                  within 90 days and we'll refund you in full, no questions
                  asked.
                </p>
                <div className="w-full h-[1px] bg-slate-200 mt-6" />
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-4">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between items-center rounded-lg bg-purple-100 px-4 py-2 text-left text-base font-medium text-slate-700 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-600 focus-visible:ring-opacity-75">
                <span>Colleagues</span>
                <FaChevronUp
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-4 w-4 text-purple-600`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="pt-4 pb-2">
                <p className="text-sm text-slate-500">
                  If you're unhappy with your purchase for any reason, email us
                  within 90 days and we'll refund you in full, no questions
                  asked.
                </p>
                <div className="w-full h-[1px] bg-slate-200 mt-6" />
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </main>
    </>
  );
};

export default Dashboard;
