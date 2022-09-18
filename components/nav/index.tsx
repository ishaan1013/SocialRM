import { useState } from "react";
import { IoClose, IoMenu } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { FaChevronLeft } from "react-icons/fa";
import Link from "next/link";
import { useRouter } from "next/router";

import { signOutFunc } from "../../pages/index";

import Lines from "../../public/lines1.svg"
import Image from "next/image";
import WhiteLogo from "../../public/whitelogo.svg"
import PurpleLogo from "../../public/purplelogo.svg"

interface Props {
  user: any;
  auth: any;
}

const Nav: React.FC<Props> = ({ user, auth }) => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  return (
    <>
      <header className="md:hidden w-full p-4 border-b-[1px] border-slate-200 flex justify-between items-center text-slate-700">
        <Link href="/">
          {/* <h1 className="font-bold text-lg cursor-pointer">SocialRM</h1> */}
          <div className="relative h-[40px] w-[135px] sm:h-[50px] sm:w-[180px]">
            <Image src={PurpleLogo} height={50} width={180} />
          </div>
        </Link>
        <button onClick={() => setIsOpen(true)}>
          <IoMenu className="w-9 h-9 p-2 rounded-lg bg-violet-200 hover:bg-violet-300/80 duration-200 text-slate-700" />
        </button>
      </header>
      {isOpen && (
        <nav className="md:hidden h-screen w-screen fixed top-0 left-0 flex flex-col justify-start pt-24 px-6 bg-gradient-to-br from-violet-700 to-violet-500 z-50">
          
          <div className="absolute bottom-4 left-2">
            <div className="relative w-96 h-96">
              <Image src={Lines} />
            </div>
          </div>
          
          <button
            className="absolute top-6 right-6"
            onClick={() => setIsOpen(false)}
          >
            <IoClose className="w-9 h-9 p-2 rounded-lg bg-white/10 hover:bg-white/20 duration-200 text-white" />
          </button>
          <Link href="/">
            <button
              onClick={() => {
                router.pathname == "/" && setIsOpen(false);
              }}
              className={`cursor-pointer w-full p-2 duration-200 rounded-lg ${router.pathname == "/" ? "bg-white/10 hover:bg-white/20" : "bg-transparent hover:bg-white/10"} mb-4 font-semibold flex justify-between items-center text-white`}
            >
              <p>Dashboard</p>
            </button>
          </Link>
          <Link href="/schedule">
            <button
              onClick={() => {
                router.pathname == "/schedule" && setIsOpen(false);
              }}
              className={`cursor-pointer w-full p-2 duration-200 ${router.pathname == "/schedule" ? "bg-white/10 hover:bg-white/20" : "bg-transparent hover:bg-white/10"} rounded-lg mb-6 font-semibold flex justify-between items-center text-white`}
            >
              Schedule
            </button>
          </Link>
          <div className="flex items-center w-full px-2">
            <CgProfile className="w-8 h-8 text-white mr-3" />
            <div>
              <p className="text-white font-semibold -mb-1">
                {user ? user.displayName : ""}
              </p>
              <p className="text-white/70 font-base text-sm">
                {user ? user.email : ""}
              </p>
            </div>
          </div>
          <button
            className="w-full p-2 duration-200 bg-white rounded-lg hover:bg-violet-100/90 mt-12 font-bold text-violet-600 text-center"
            onClick={() => signOutFunc(auth)}
          >
            Sign Out
          </button>
        </nav>
      )}

      {/* computer size below */}
      <nav className="hidden md:flex h-screen w-80 fixed top-0 left-0 flex-col justify-start pt-24 px-6 bg-gradient-to-br from-violet-700 to-violet-500 z-50">
        
        <div className="absolute -bottom-8 left-4 opacity-30">
          <div className="relative w-48 h-48">
            <Image src={Lines} layout="fill" />
          </div>
        </div>
        
        {/* <h1 className="absolute top-7 left-6 font-bold text-[1.35rem]  text-white">
          SocialRM
        </h1> */}
        <div className="absolute top-7 left-6">
          <div className="relative h-[40px] w-[135px] sm:h-[50px] sm:w-[180px]">
            <Image src={WhiteLogo} height={50} width={180} />
          </div>
        </div>

        <Link href="/">
          <button
            onClick={() => {
              router.pathname == "/" && setIsOpen(false);
            }}
            className={`cursor-pointer w-full p-2 duration-200 rounded-lg ${router.pathname == "/" ? "bg-white/10 hover:bg-white/20" : "bg-transparent hover:bg-white/10"} mb-4 font-semibold flex justify-between items-center text-white`}
            >
            <p>Dashboard</p>
          </button>
        </Link>
        <Link href="/schedule">
          <button
            onClick={() => {
              router.pathname == "/schedule" && setIsOpen(false);
            }}
            className={`cursor-pointer w-full p-2 duration-200 ${router.pathname == "/schedule" ? "bg-white/10 hover:bg-white/20" : "bg-transparent hover:bg-white/10"} rounded-lg mb-6 font-semibold flex justify-between items-center text-white`}
            >
            Schedule
          </button>
        </Link>

        <div className="flex items-center w-full px-2">
          <CgProfile className="w-8 h-8 text-white mr-3" />
          <div>
            <p className="text-white font-semibold -mb-1">
              {user ? user.displayName : ""}
            </p>
            <p className="text-white/70 font-base text-sm">
              {user ? user.email : ""}
            </p>
          </div>
        </div>

        <button
          className="w-full p-2 duration-200 bg-white rounded-lg hover:bg-violet-100/90 mt-12 font-bold text-violet-600 text-center"
          onClick={() => signOutFunc(auth)}
        >
          Sign Out
        </button>
      </nav>
    </>
  );
};

export default Nav;
