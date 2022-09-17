import { useState, Fragment } from 'react'
import { FaChevronLeft, FaTrash } from 'react-icons/fa'
import { Listbox, Transition } from '@headlessui/react'
import { HiSelector } from "react-icons/hi"

interface Props {
    setIsOpen: (val: boolean) => void
}

const View:React.FC<Props> = ({setIsOpen}) => {
    
    return (
        <>
            <div className="h-screen w-screen fixed top-0 left-0 flex flex-col items-center justify-start pt-20 px-6 bg-[#f6f6fd]/70 backdrop-blur-lg z-50">
                <button
                className="absolute top-6 left-6"
                onClick={() => setIsOpen(false)}
                >
                    <FaChevronLeft className="w-9 h-9 p-2 rounded-md bg-purple-600 hover:bg-purple-600/80 duration-200 text-white" />
                </button>
                <button
                className="absolute top-6 right-6"
                // onClick={() => setIsOpen(false)}
                >
                    <FaTrash className="w-9 h-9 p-2 rounded-md bg-red-500 hover:bg-red-500/80 duration-200 text-white" />
                </button>

                <h1 className="text-lg font-bold text-slate-700">Viewing Contact</h1>

                <p className="mt-4 text-slate-600 text-sm font-medium mb-2">Name</p>
                <p className="text-slate-600 font-semibold mb-1">NAME</p>

            </div>
        </>
    )
}

export default View