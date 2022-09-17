import { useState } from 'react'
import { IoClose, IoMenu } from 'react-icons/io5'
import { CgProfile } from 'react-icons/cg'
import Link from 'next/link'
import { FaChevronLeft } from 'react-icons/fa'

// interface Props {

// }

const New:React.FC = ({}) => {
// const Nav:React.FC<Props> = ({}) => {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <div className="h-screen w-screen fixed top-0 left-0 flex flex-col justify-start pt-24 px-6 bg-gradient-to-br from-purple-700 to-purple-500 z-50">
                <button
                className="absolute top-6 left-6"
                onClick={() => setIsOpen(false)}
                >
                    <FaChevronLeft className="w-9 h-9 p-2 rounded-lg bg-white/10 hover:bg-white/20 duration-200 text-white" />
                </button>

                
            </div>
        </>
    )
}

export default New