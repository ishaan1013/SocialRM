import { ProcessOptions } from "postcss";
import { FaTrash } from "react-icons/fa";
import { TbDots } from "react-icons/tb";

interface Props {
  contact: any;
  setViewing: (val: boolean) => void;
  setCurrentContact: (val: any) => void;
}

const Contact: React.FC<Props> = ({
  contact,
  setViewing,
  setCurrentContact,
}) => {
  return (
    <div className="mb-2 flex items-center justify-between h-full p-2 rounded-lg bg-white/75 backdrop-blur-md border-2 border-slate-300">
      <h1 className="text-sm font-semibold text-slate-500">{contact.name}</h1>
      <div className="flex items-center">
        <button
          onClick={() => {
            setViewing(true);
            setCurrentContact(contact);
          }}
        >
          <TbDots className="text-slate-500 h-7 w-7 p-1.5 mr-2 rounded-md bg-slate-200 duration-200 hover:bg-slate-300/80" />
        </button>
        <button
          onClick={
            () => {}
            // REMOVE FROM DB
          }
        >
          <FaTrash className="text-red-500 h-7 w-7 p-2 rounded-md bg-red-100 duration-200 hover:bg-red-200/80" />
        </button>
      </div>
    </div>
  );
};

export default Contact;
