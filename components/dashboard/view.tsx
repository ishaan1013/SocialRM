import { useState, useEffect, Fragment } from "react";
import { FaChevronLeft, FaChevronRight, FaTrash } from "react-icons/fa";
import { Listbox, Transition } from "@headlessui/react";
import { HiSelector } from "react-icons/hi";
import coGenerate from "../../pages/api/cohere";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import { deleteContact } from "../../utils/updatedb";
interface Props {
  user: any;
  contact: any;
  setIsOpen: (val: boolean) => void;
}

const View: React.FC<Props> = ({ user, contact, setIsOpen }) => {
  const [results, setResults] = useState([]);
  const [currentMessage, setCurrentMessage] = useState(0);
  const { width } = useWindowDimensions();

  const trimEmail = (email: string) => {
    if (width && email.length > width / 35) {
      return email.slice(0, Math.floor(width / 35)) + "...";
    }
    return email;
  };

  useEffect(() => {
    coGenerate(
      user.displayName,
      contact.name,
      contact.tone,
      contact.intention
    ).then((res: any) => {
      setResults(res);
    });
  }, []);
  return (
    <>
      <main className="h-screen w-screen fixed top-0 left-0 flex flex-col items-center justify-center py-14 px-6 bg-[#f6f6fd]/70 backdrop-blur-lg z-50">
        <button
          className="absolute top-6 left-6"
          onClick={() => setIsOpen(false)}
        >
          <FaChevronLeft className="w-9 h-9 p-2 rounded-md bg-white hover:bg-white/70 duration-200 text-violet-600" />
        </button>
        <button
          className="absolute top-6 right-6"
          onClick={() => {
            setIsOpen(false);
            deleteContact(user, contact.email);
          }}
        >
          <FaTrash className="w-9 h-9 p-2.5 rounded-md bg-red-100 hover:bg-red-200/70 duration-200 text-red-500" />
        </button>

        <h1 className="text-lg font-bold mb-2 text-slate-700">
          Viewing Contact
        </h1>
        {[
          ["Name", contact.name],
          ["Email", trimEmail(contact.email)],
          ["Circle", contact.circle],
          ["Frequency", contact.freq],
          ["Tone", contact.tone],
          ["Intention", contact.intention],
        ].map(([label, value]) => (
          <div
            className="flex items-center mt-1.5 mb-1.5 w-2/3 sm:w-1/2 md:w-1/3 xl:w-1/4 justify-between"
            key={label}
          >
            <p className="text-left text-slate-600 text-sm font-normal">
              {label}
            </p>
            <p className="text-right text-slate-600 font-bold ml-6">{value}</p>
          </div>
        ))}
        <div className="my-6 flex flex-col justify-start items-center w-3/4 sm:w-2/3 md:w-1/2 xl:w-1/4">
          <textarea
            className="w-full min-h-[125px] max-h-[250px] resize-y rounded-md p-2 border-2 border-slate-300 focus:outline-none focus-visible:ring focus-visible:ring-violet-600 focus-visible:ring-opacity-75"
            value={results[currentMessage]}
          />
          <div className="w-full justify-center space-x-4 flex items-center px-1 mt-3">
            {results.length > 0 ? (
              <>
                <button
                  className="font-medium text-sm text-slate-600 py-0.5 px-2 rounded-md border-2 border-slate-300 bg-transparent duration-200 hover:border-violet-400"
                  onClick={() =>
                    setCurrentMessage((currentMessage - 1) % results.length)
                  }
                >
                  <FaChevronLeft />
                </button>
                <p className="font-medium text-sm text-slate-600">
                  {(currentMessage % results.length) + 1} / 5
                </p>
                <button
                  className="font-medium text-sm text-slate-600 py-0.5 px-2 rounded-md border-2 border-slate-300 bg-transparent duration-200 hover:border-violet-400"
                  onClick={() =>
                    setCurrentMessage((currentMessage + 1) % results.length)
                  }
                >
                  <FaChevronRight />
                </button>
              </>
            ) : (
              <>
                <button className="font-medium text-sm text-slate-400 py-0.5 px-2 rounded-md border-2 border-slate-300 bg-transparent cursor-progress">
                  <FaChevronLeft />
                </button>
                <p className="font-medium text-sm text-slate-600">Loading...</p>
                <button className="font-medium text-sm text-slate-400 py-0.5 px-2 rounded-md border-2 border-slate-300 bg-transparent cursor-progress">
                  <FaChevronRight />
                </button>
              </>
            )}
          </div>
        </div>
        <button
          onClick={() => {
            console.log("Send email");
          }}
          className="px-3 py-1 duration-200 bg-violet-600 rounded-lg hover:bg-violet-600/80 font-bold text-white text-center"
        >
          Select!
        </button>
      </main>
    </>
  );
};

export default View;
