import { useState, Fragment } from 'react'
import { FaCheck, FaChevronLeft } from 'react-icons/fa'
import { Listbox, Transition } from '@headlessui/react'
import { HiSelector } from "react-icons/hi"

// interface Props {

// }

const New:React.FC = ({}) => {
// const Nav:React.FC<Props> = ({}) => {

    const [isOpen, setIsOpen] = useState(false)
    
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
            <div className="h-screen w-screen fixed top-0 left-0 flex flex-col items-center justify-start pt-20 px-6 bg-[#f6f6fd]/40 backdrop-blur-lg z-50">
                <button
                className="absolute top-6 left-6"
                onClick={() => setIsOpen(false)}
                >
                    <FaChevronLeft className="w-9 h-9 p-2 rounded-lg bg-purple-600 hover:bg-purple-600/80 duration-200 text-white" />
                </button>

                <h1 className="text-lg font-bold text-slate-700">Create New Contact</h1>

                <label className="mt-4 text-slate-600 font-semibold mb-1">Name</label>
                <input 
                className="text-slate-600 text-sm md:text-base w-full p-2 bg-white/75 border-2 rounded-lg border-slate-300 focus:outline-none focus:ring-2 focus:ring-purple-600" 
                />

                <label className="mt-2 text-slate-600 font-semibold mb-1">Email</label>
                <input 
                className="text-slate-600 text-sm md:text-base w-full p-2 bg-white/75 border-2 rounded-lg border-slate-300 focus:outline-none focus:ring-2 focus:ring-purple-600" 
                />

                <label className="mt-2 text-slate-600 font-semibold mb-1">Talking Points (Brief)</label>
                <input 
                className="text-slate-600 text-sm md:text-base w-full p-2 bg-white/75 border-2 rounded-lg border-slate-300 focus:outline-none focus:ring-2 focus:ring-purple-600" 
                />

                <label className="mt-2 text-slate-600 font-semibold mb-1">Social Circle</label>
                <Listbox value={selectedCircle} onChange={setSelectedCircle}>
                    <div className="relative mt-1 w-full">
                        <Listbox.Button className="relative w-full cursor-default bg-white/75 border-2 rounded-lg border-slate-300 py-2 pl-3 pr-10 text-left focus:outline-none focus:ring-2 focus:ring-purple-600 text-sm md:text-base">
                            <span className="block truncate">{selectedCircle.circle}</span>
                            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                <HiSelector
                                    className="h-5 w-5 text-gray-400"
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
                            <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                            {circles.map((circle, circleIdx) => (
                                <Listbox.Option
                                key={circleIdx}
                                className={({active}) =>
                                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                                    active ? 'bg-purple-100 text-purple-900' : 'text-slate-900'
                                    }`
                                }
                                value={circle}
                                >
                                {(selectedCircle:any) => (
                                    <>
                                    <span
                                        className={`block truncate ${
                                        selectedCircle ? 'font-medium' : 'font-normal'
                                        }`}
                                    >
                                        {circle.circle}
                                    </span>
                                    {selectedCircle == circle ? (
                                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-purple-600">
                                        <FaCheck className="h-5 w-5" aria-hidden="true" />
                                        </span>
                                    ) : null}
                                    </>
                                )}
                                </Listbox.Option>
                            ))}
                            </Listbox.Options>
                        </Transition>
                    </div>
                </Listbox>

                <label className="mt-2 text-slate-600 font-semibold mb-1">Tone</label>
                <input 
                className="text-slate-600 text-sm md:text-base w-full p-2 bg-white/75 border-2 rounded-lg border-slate-300 focus:outline-none focus:ring-2 focus:ring-purple-600" 
                />

                <label className="mt-2 text-slate-600 font-semibold mb-1">Contact Frequency</label>
                <input 
                className="text-slate-600 text-sm md:text-base w-full p-2 bg-white/75 border-2 rounded-lg border-slate-300 focus:outline-none focus:ring-2 focus:ring-purple-600" 
                />
                
            </div>
        </>
    )
}

export default New