import Image from 'next/image'
import { FaGoogle } from 'react-icons/fa'

import Bg from "../../public/loginbg.jpg"
import PurpleLogo from "../../public/purplelogo.svg"

interface Props {
    signIn: () => void
}

const Account:React.FC<Props> = ({signIn}) => {

    return (
        <main className="w-screen h-screen flex items-center justify-center px-6">

            <div className="w-screen h-screen absolute top-0 left-0 opacity-20">
                <div className="w-full h-full relative">
                    <Image src={Bg} layout="fill" objectFit='cover' priority placeholder='blur' />
                </div>
            </div>

            <div className="w-full sm:w-auto p-8 rounded-lg border-[1px] border-slate-300 bg-white/20 z-10 backdrop-blur-sm flex flex-col items-center justify-start">
                {/* <h1 className="text-slate-700 font-bold text-lg mb-6">Login To Your SocialRM</h1> */}
                <div className="relative h-[50px] w-[180px] sm:h-[70px] sm:w-[215px] mb-4">
                    <Image src={PurpleLogo} height={70} width={210} />
                </div>
                <button
                onClick={() => signIn()}
                className="w-full sm:w-auto text-sm sm:text-base px-0 sm:px-10 py-2 flex justify-center items-center rounded-lg bg-violet-500 hover:bg-violet-500/90 text-white font-semibold duration-200">
                    <FaGoogle className="text-white mr-2" />
                    Log In With Google
                </button>
            </div>
        </main>
    )
}

export default Account