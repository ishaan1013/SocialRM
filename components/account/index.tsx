import { FaGoogle } from 'react-icons/fa'

interface Props {
    signIn: () => void
}

const Account:React.FC<Props> = ({signIn}) => {

    return (
        <main className="w-full h-full flex items-center justify-center px-6">
            <div className="w-full sm:w-auto p-8 rounded-lg border-2 border-slate-300 bg-white flex flex-col items-center justify-start">
                <h1 className="text-slate-700 font-bold text-lg mb-6">Login To Your SocialRM</h1>
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