import { useState, Fragment } from "react";
import { FaChevronLeft, FaPlus } from "react-icons/fa";
import { ImPencil } from "react-icons/im";
import { Listbox, Transition } from "@headlessui/react";
import { HiSelector } from "react-icons/hi";
import { addContact } from "../../utils/updatedb";

interface Props {
  setIsOpen: (val: boolean) => void;
  user: any;
  edit: boolean;
  contact: any;
  setEditing: (val: boolean) => void;
}

const Editor: React.FC<Props> = ({
  setIsOpen,
  user,
  edit,
  contact,
  setEditing,
}) => {
  const circles = ["Friends", "Family", "Acquaintances", "Colleagues"];

  const freqs = ["1", "2", "3", "4", "5"];
  const freqInfo = [
    "(every 5 mo.)",
    "(every 2 mo.)",
    "(every mo.)",
    "(every 2 weeks)",
    "(every week)",
  ];

  const [name, setName] = useState(edit && contact.name ? contact.name : "");
  const [email, setEmail] = useState(
    edit && contact.email ? contact.email : ""
  );
  const [selectedCircle, setSelectedCircle] = useState(
    edit ? contact.circle : circles[0]
  );
  const [tone, setTone] = useState(edit && contact.tone ? contact.tone : "");
  const [selectedFreq, setSelectedFreq] = useState(
    edit && contact.freq ? contact.freq : freqs[0]
  );
  const [intention, setIntention] = useState(
    edit && contact.intention ? contact.intention : ""
  );

  const [invalid, setInvalid] = useState(false);
  const [emailInvalid, setEmailInvalid] = useState(false);
  const [lengthInvalid, setLengthInvalid] = useState(false);

  const validateForm = () => {
    const emptyTest = name === "" || email === "";
    setInvalid(emptyTest);
    const emailTest = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);
    setEmailInvalid(!emailTest);
    setLengthInvalid(
      name.length > 30 ||
        email.length > 35 ||
        tone.length > 30 ||
        intention.length > 40
    );
    return !emptyTest && emailTest;
  };

  return (
    <>
      <main className="h-screen w-screen fixed top-0 left-0 flex flex-col items-center justify-start pt-20 px-6 bg-[#f6f6fd]/70 backdrop-blur-lg z-50">
        <header>
          <button
            className="absolute top-6 left-6"
            onClick={() => {
              setIsOpen(false);
              setEditing(false);
            }}
          >
            <FaChevronLeft className="w-9 h-9 p-2 rounded-md bg-white hover:bg-white/70 duration-200 text-violet-600" />
          </button>

          <h1 className="text-lg font-bold text-slate-700">
            {edit ? "Edit " : "Create New "}Contact
          </h1>
        </header>
        <div className="grid grid-cols-2 gap-4 mt-6">
          <div className="col-span-1">
            <label className="text-left pl-2 mt-4 text-slate-600 font-semibold mb-1">
              Name
            </label>
            <input
              onChange={(event: any) => setName(event.target.value)}
              placeholder="Bob"
              value={name}
              className="text-slate-600 text-sm md:text-base w-full p-2 bg-white/75 border-2 rounded-md border-slate-300 focus:outline-none focus:ring-2 focus:ring-violet-600"
            />
          </div>
          <div className="col-span-1">
            <label className="text-left pl-2 mt-2 text-slate-600 font-semibold mb-1">
              Email
            </label>
            <input
              onChange={(event: any) => setEmail(event.target.value)}
              placeholder="bob@example.com"
              value={email}
              className="text-slate-600 text-sm md:text-base w-full p-2 bg-white/75 border-2 rounded-md border-slate-300 focus:outline-none focus:ring-2 focus:ring-violet-600"
            />
          </div>
          <div className="col-span-2">
            <label className="text-left pl-2 mt-2 text-slate-600 font-semibold mb-1">
              Social Circle
            </label>
            <Listbox value={selectedCircle} onChange={setSelectedCircle}>
              <div className="relative mt-1 w-full">
                <Listbox.Button className="relative w-full cursor-default bg-white/75 border-2 rounded-md border-slate-300 py-2 pl-3 pr-10 text-left focus:outline-none focus:ring-2 focus:ring-violet-600 text-sm md:text-base">
                  <span className="block truncate">{selectedCircle}</span>
                  <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                    <HiSelector
                      className="h-5 w-5 text-slate-300"
                      aria-hidden="true"
                    />
                  </span>
                </Listbox.Button>
                <Transition
                  as={Fragment}
                  leave="transition ease-in duration-100"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <Listbox.Options className="z-40 absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                    {circles.map((circle, circleIdx) => (
                      <Listbox.Option
                        key={circleIdx}
                        className={({ active }) =>
                          `relative cursor-default select-none py-2 pl-10 pr-4 ${
                            active
                              ? "bg-violet-100 text-violet-900"
                              : "text-slate-700"
                          }`
                        }
                        value={circle}
                      >
                        {(selectedCircle) => (
                          <>
                            <span className={`block truncate ${"font-normal"}`}>
                              {circle}
                            </span>
                          </>
                        )}
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                </Transition>
              </div>
            </Listbox>
          </div>
          <div className="col-span-1">
            <label className="text-left pl-2 mt-2 text-slate-600 font-semibold mb-1">
              Tone
            </label>
            <input
              onChange={(event: any) => setTone(event.target.value)}
              placeholder="e.g. caring, formal"
              value={tone}
              className="text-slate-600 text-sm md:text-base w-full p-2 bg-white/75 border-2 rounded-md border-slate-300 focus:outline-none focus:ring-2 focus:ring-violet-600"
            />
          </div>
          <div className="col-span-1">
            <label className="text-left pl-2 mt-2 text-slate-600 font-semibold mb-1">
              Frequency
            </label>
            <Listbox value={selectedFreq} onChange={setSelectedFreq}>
              <div className="relative w-full">
                <Listbox.Button className="relative w-full cursor-default bg-white/75 border-2 rounded-md border-slate-300 py-2 pl-3 pr-10 text-left focus:outline-none focus:ring-2 focus:ring-violet-600 text-sm md:text-base">
                  <span className="block truncate">{selectedFreq}</span>
                  <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                    <HiSelector
                      className="h-5 w-5 text-slate-300"
                      aria-hidden="true"
                    />
                  </span>
                </Listbox.Button>
                <Transition
                  as={Fragment}
                  leave="transition ease-in duration-100"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <Listbox.Options className="z-10 absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                    {freqs.map((freq, freqIdx) => (
                      <Listbox.Option
                        key={freqIdx}
                        className={({ active }) =>
                          `relative cursor-default select-none py-2 pl-10 pr-4 ${
                            active
                              ? "bg-violet-100 text-violet-900"
                              : "text-slate-700"
                          }`
                        }
                        value={freq}
                      >
                        {(selectedFreq) => (
                          <>
                            <span className={`block truncate ${"font-normal"}`}>
                              {freq} {freqInfo[freqIdx]}
                            </span>
                          </>
                        )}
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                </Transition>
              </div>
            </Listbox>
          </div>
          <div className="col-span-2">
            <label className="text-left pl-2 mt-2 text-slate-600 font-semibold mb-1">
              Intention
            </label>
            <input
              onChange={(event: any) => setIntention(event.target.value)}
              placeholder="e.g. coffee chat, hang out"
              value={intention}
              className="text-slate-600 text-sm md:text-base w-full p-2 bg-white/75 border-2 rounded-md border-slate-300 focus:outline-none focus:ring-2 focus:ring-violet-600"
            />
          </div>
          <button
            onClick={() => {
              if (validateForm()) {
                addContact(
                  user,
                  name,
                  email,
                  selectedCircle,
                  tone,
                  selectedFreq,
                  intention
                );

                setIsOpen(false);
                setEditing(false);
              }
            }}
            className="col-span-2 my-3 flex items-center justify-center w-full p-2 duration-200 bg-violet-600 rounded-lg hover:bg-violet-600/80 font-bold text-white text-center"
          >
            {edit ? (
              <>
                <ImPencil className="w-4 h-4 mr-2" />
                Edit Contact
              </>
            ) : (
              <>
                <FaPlus className="w-4 h-4 mr-2" />
                Create Contact
              </>
            )}
          </button>
          <div className="w-[90vw]">
            {invalid && (
              <p className="col-span-2 w-full text-center font-bold text-red-500">
                Please fill out all the fields.
              </p>
            )}
            {emailInvalid && (
              <p className="col-span-2 w-full text-center font-bold text-red-500">
                Please enter a valid email.
              </p>
            )}
            {lengthInvalid && (
              <p className="col-span-2 w-full text-center font-bold text-red-500">
                Parameters are too long.
              </p>
            )}
          </div>
        </div>
      </main>
    </>
  );
};

export default Editor;
