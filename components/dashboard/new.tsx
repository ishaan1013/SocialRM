import { useState, Fragment } from 'react'
import { FaCheck, FaChevronLeft, FaPlus } from 'react-icons/fa'
import { Listbox, Transition } from '@headlessui/react'
import { HiSelector } from "react-icons/hi"

interface Props {
    setIsOpen: (val: boolean) => void
}

const New:React.FC<Props> = ({setIsOpen}) => {

    
    const circles = [
        { circle: 'Friends' },
        { circle: 'Family' },
        { circle: 'Acquaintances' },
        { circle: 'Colleagues' },
    ]
    
    const tones = [
        { tone: 'Casual' },
        { tone: 'Formal' },
    ]
    
    const freqs = [
        { freq: '1' },
        { freq: '2' },
        { freq: '3' },
        { freq: '4' },
        { freq: '5' },
    ]
    
    const [selectedCircle, setSelectedCircle] = useState(circles[0])
    const [selectedTone, setSelectedTone] = useState(tones[0])
    const [selectedFreq, setSelectedFreq] = useState(freqs[0])
    
    return (
        <>
            <div className="h-screen w-screen fixed top-0 left-0 flex flex-col items-center justify-start pt-20 px-6 bg-[#f6f6fd]/70 backdrop-blur-lg z-50">
                <button
                className="absolute top-6 left-6"
                onClick={() => setIsOpen(false)}
                >
                    <FaChevronLeft className="w-9 h-9 p-2 rounded-md bg-purple-600 hover:bg-purple-600/80 duration-200 text-white" />
                </button>

                <h1 className="text-lg font-bold text-slate-700">Create New Contact</h1>

                <div className="grid grid-cols-2 gap-4 mt-6">
                    <div className="col-span-1">
                        <label className="pl-2 mt-4 text-slate-600 font-semibold mb-1">Name</label>
                        <input
                        className="text-slate-600 text-sm md:text-base w-full p-2 bg-white/75 border-2 rounded-md border-slate-300 focus:outline-none focus:ring-2 focus:ring-purple-600"
                        />
                    </div>
                    <div className="col-span-1">
                        <label className="pl-2 mt-2 text-slate-600 font-semibold mb-1">Email</label>
                        <input
                        className="text-slate-600 text-sm md:text-base w-full p-2 bg-white/75 border-2 rounded-md border-slate-300 focus:outline-none focus:ring-2 focus:ring-purple-600"
                        />
                    </div>
                    <div className="col-span-2">
                        <label className="pl-2 mt-2 text-slate-600 font-semibold mb-1">Talking Points (Brief)</label>
                        <input
                        className="text-slate-600 text-sm md:text-base w-full p-2 bg-white/75 border-2 rounded-md border-slate-300 focus:outline-none focus:ring-2 focus:ring-purple-600"
                        />
                    </div>
                    <div className="col-span-2">
                        <label className="pl-2 mt-2 text-slate-600 font-semibold mb-1">Social Circle</label>
                        <Listbox value={selectedCircle} onChange={setSelectedCircle}>
                            <div className="relative mt-1 w-full">
                                <Listbox.Button className="relative w-full cursor-default bg-white/75 border-2 rounded-md border-slate-300 py-2 pl-3 pr-10 text-left focus:outline-none focus:ring-2 focus:ring-purple-600 text-sm md:text-base">
                                    <span className="block truncate">{selectedCircle.circle}</span>
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
                                        className={({active}) =>
                                            `relative cursor-default select-none py-2 pl-10 pr-4 ${
                                            active ? 'bg-purple-100 text-purple-900' : 'text-slate-700'
                                            }`
                                        }
                                        value={circle}
                                        >
                                        {selectedCircle => (
                                            <>
                                            <span
                                                className={`block truncate ${
                                                'font-normal'
                                                }`}
                                            >
                                                {circle.circle}
                                            </span>
                                            {/* {selectedCircle ? (
                                                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-purple-600">
                                                <FaCheck className="h-5 w-5" aria-hidden="true" />
                                                </span>
                                            ) : null} */}
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
                        <label className="pl-2 mt-2 text-slate-600 font-semibold mb-1">Tone</label>
                        <Listbox value={selectedTone} onChange={setSelectedTone}>
                            <div className="relative mt-1 w-full">
                                <Listbox.Button className="relative w-full cursor-default bg-white/75 border-2 rounded-md border-slate-300 py-2 pl-3 pr-10 text-left focus:outline-none focus:ring-2 focus:ring-purple-600 text-sm md:text-base">
                                    <span className="block truncate">{selectedTone.tone}</span>
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
                                    {tones.map((tone, toneIdx) => (
                                        <Listbox.Option
                                        key={toneIdx}
                                        className={({active}) =>
                                            `relative cursor-default select-none py-2 pl-10 pr-4 ${
                                            active ? 'bg-purple-100 text-purple-900' : 'text-slate-700'
                                            }`
                                        }
                                        value={tone}
                                        >
                                        {selectedTone => (
                                            <>
                                            <span
                                                className={`block truncate ${
                                                'font-normal'
                                                }`}
                                            >
                                                {tone.tone}
                                            </span>
                                            {/* {selectedCircle ? (
                                                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-purple-600">
                                                <FaCheck className="h-5 w-5" aria-hidden="true" />
                                                </span>
                                            ) : null} */}
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
                        <label className="pl-2 mt-2 text-slate-600 font-semibold mb-1">Contact Frequency</label>
                        <Listbox value={selectedFreq} onChange={setSelectedFreq}>
                            <div className="relative mt-1 w-full">
                                <Listbox.Button className="relative w-full cursor-default bg-white/75 border-2 rounded-md border-slate-300 py-2 pl-3 pr-10 text-left focus:outline-none focus:ring-2 focus:ring-purple-600 text-sm md:text-base">
                                    <span className="block truncate">{selectedFreq.freq}</span>
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
                                        className={({active}) =>
                                            `relative cursor-default select-none py-2 pl-10 pr-4 ${
                                            active ? 'bg-purple-100 text-purple-900' : 'text-slate-700'
                                            }`
                                        }
                                        value={freq}
                                        >
                                        {selectedFreq => (
                                            <>
                                            <span
                                                className={`block truncate ${
                                                'font-normal'
                                                }`}
                                            >
                                                {freq.freq}
                                            </span>
                                            {/* {selectedCircle ? (
                                                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-purple-600">
                                                <FaCheck className="h-5 w-5" aria-hidden="true" />
                                                </span>
                                            ) : null} */}
                                            </>
                                        )}
                                        </Listbox.Option>
                                    ))}
                                    </Listbox.Options>
                                </Transition>
                            </div>
                        </Listbox>
                    </div>

                    <button 
                    className="col-span-2 mt-3 flex items-center justify-center w-full p-2 duration-200 bg-purple-600 rounded-lg hover:bg-purple-600/80 mb-4 font-bold text-white text-center"
                    >
                        <FaPlus className="w-4 h-4 mr-2" />
                        Create Contact
                    </button>

                </div>
                
            </div>
        </>
    )
}

export default New