import { useState } from 'react'
import { IoClose, IoMenu } from 'react-icons/io5'
import { CgProfile } from 'react-icons/cg'

interface Props {
    user: any
}

const Nav:React.FC<Props> = ({user}) => {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <div className="w-full p-4 border-b-[1px] border-slate-300 flex justify-between items-center">
                <h1 className="font-bold text-lg">SocialRM</h1>
                <button
                onClick={() => setIsOpen(true)}
                >
                    <IoMenu className="w-6 h-6" />
                </button>
            </div>
            {isOpen && 
            <nav className="h-screen w-screen fixed top-0 left-0 flex flex-col justify-start pt-24 px-8 bg-gradient-to-br from-purple-700 to-purple-500 z-50">
                <button
                className="absolute top-4 right-4"
                onClick={() => setIsOpen(false)}
                >
                    <IoClose className="w-9 h-9 p-2 rounded-lg bg-white/10 hover:bg-white/20 duration-200 text-white" />
                </button>

                <div className="flex items-center w-full">
                    <CgProfile className="w-8 h-8 text-white mr-3" />
                    <p className="text-white font-semibold">{user.email}</p>
                </div>
            </nav>
            }
        </>
    )
}

export default Nav