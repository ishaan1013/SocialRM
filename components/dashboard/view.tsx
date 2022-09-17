import { useState, useEffect, Fragment } from "react";
import { FaChevronLeft, FaChevronRight, FaTrash } from "react-icons/fa";
import { Listbox, Transition } from "@headlessui/react";
import { HiSelector } from "react-icons/hi";
import coGenerate from "../../pages/api/cohere";
interface Props {
  username: string;
  contact: any;
  setIsOpen: (val: boolean) => void;
}

const View: React.FC<Props> = ({ username, contact, setIsOpen }) => {
  const [results, setResults] = useState([]);
  const [currentMessage, setCurrentMessage] = useState(0);
  useEffect(() => {
    coGenerate(username, contact.name, contact.tone, contact.intention).then(
      (res: any) => {
        setResults(res);
      }
    );
  }, []);

  return (
    <>
      <div className="h-screen w-screen fixed top-0 left-0 flex flex-col items-center justify-start pt-20 px-6 bg-[#f6f6fd]/70 backdrop-blur-lg z-50">
        <button
          className="absolute top-6 left-6"
          onClick={() => setIsOpen(false)}
        >
          <FaChevronLeft className="w-9 h-9 p-2 rounded-md bg-white hover:bg-white/70 duration-200 text-purple-600" />
        </button>
        <button
          className="absolute top-6 right-6"
          // onClick={() => setIsOpen(false)}
        >
          <FaTrash className="w-9 h-9 p-2.5 rounded-md bg-red-100 hover:bg-red-200/70 duration-200 text-red-500" />
        </button>

        <h1 className="text-lg font-bold text-slate-700">Viewing Contact</h1>

        <div className="flex items-center mt-6 mb-4 w-2/3 sm:w-1/2 md:w-1/3 xl:w-1/4 justify-between">
          <p className="text-slate-600 text-sm font-normal">
            Name
          </p>
          <p className="text-slate-600 font-bold ml-6">{contact.name}</p>
        </div>

        <div className="flex items-center mb-4 w-2/3 sm:w-1/2 md:w-1/3 xl:w-1/4 justify-between">
          <p className="text-slate-600 text-sm font-normal">
            Email
          </p>
          <p className="text-slate-600 font-bold ml-6">{contact.email}</p>
        </div>

        <div className="flex items-center mb-4 w-2/3 sm:w-1/2 md:w-1/3 xl:w-1/4 justify-between">
          <p className="text-slate-600 text-sm font-normal">
            Circle
          </p>
          <p className="text-slate-600 font-bold ml-6">{contact.circle}</p>
        </div>

        <div className="flex items-center mb-4 w-2/3 sm:w-1/2 md:w-1/3 xl:w-1/4 justify-between">
          <p className="text-slate-600 text-sm font-normal">
            Frequency
          </p>
          <p className="text-slate-600 font-bold ml-6">{contact.freq}</p>
        </div>

        <div className="flex items-center mb-4 w-2/3 sm:w-1/2 md:w-1/3 xl:w-1/4 justify-between">
          <p className="text-slate-600 text-sm font-normal">
            Tone
          </p>
          <p className="text-slate-600 font-bold ml-6">{contact.tone}</p>
        </div>

        <div className="mt-6 mb-10 flex flex-col justify-start items-center w-3/4 sm:w-2/3 md:w-1/2 xl:w-1/4">
          <textarea className="w-full min-h-[150px] max-h-[300px] resize-y rounded-md p-2 border-2 border-slate-300 focus:outline-none focus-visible:ring focus-visible:ring-purple-600 focus-visible:ring-opacity-75" value={results[currentMessage]}></textarea>
          
          <div className="w-full justify-center space-x-4 flex items-center px-1 mt-2">

            {
            currentMessage ? 
            <>
              <button className="font-medium text-sm text-slate-600 py-0.5 px-2 rounded-md border-2 border-slate-300 bg-transparent duration-200 hover:border-purple-400"
                onClick={() =>
                  setCurrentMessage((currentMessage - 1) % results.length)
                }
              >
                <FaChevronLeft />
              </button>
              <p className="font-medium text-sm text-slate-600">
                {currentMessage % results.length + 1} / 5
              </p>
              <button className="font-medium text-sm text-slate-600 py-0.5 px-2 rounded-md border-2 border-slate-300 bg-transparent duration-200 hover:border-purple-400"
                onClick={() =>
                  setCurrentMessage((currentMessage + 1) % results.length)
                }
              >
                <FaChevronRight />
              </button>
            </>
            :
            <>
              <button className="font-medium text-sm text-slate-600 py-0.5 px-2 rounded-md border-2 border-slate-300 bg-transparent cursor-progress">
                <FaChevronLeft />
              </button>
              <p className="font-medium text-sm text-slate-600">
                Loading...
              </p>
              <button className="font-medium text-sm text-slate-600 py-0.5 px-2 rounded-md border-2 border-slate-300 bg-transparent cursor-progress">
                <FaChevronRight />
              </button>
            </>
            }
            
          </div>
        </div>

        <button
          onClick={() => {
            console.log("Send email");
          }}
        >activate</button>
      </div>
    </>
  );
};

export default View;
