import { FaTrash } from "react-icons/fa";
import { ImPencil } from "react-icons/im";
import { deleteContact } from "../../utils/updatedb";

const circles = ["Friends", "Family", "Acquaintances", "Colleagues"];
interface Props {
  user: any;
  contact: any;
  setViewing: (val: boolean) => void;
  setCurrentContact: (val: any) => void;
  setEditing: (val: boolean) => void;
  setIsCreating: (val: boolean) => void;
  contacts: any;
  setContacts: (val: any) => void;
}

const Contact: React.FC<Props> = ({
  user,
  contact,
  setViewing,
  setCurrentContact,
  setEditing,
  setIsCreating,
  contacts,
  setContacts,
}) => {
  return (
    <div className="w-full mb-2 flex items-center justify-between h-full p-2 rounded-lg bg-white/75 backdrop-blur-md border-2 border-slate-300">
      <button
        onClick={() => {
          setViewing(true);
          setCurrentContact(contact);
        }}
        className="w-full h-full text-left"
      >
        <h3 className="text-smfont-semibold text-slate-500">{contact.name}</h3>
      </button>
      <div className="flex items-center">
        <button
          onClick={() => {
            setEditing(true);
            setCurrentContact(contact);
            setIsCreating(true);
          }}
          className="h-full"
        >
          <ImPencil className="text-slate-500 h-7 w-7 p-1.5 mr-2 rounded-md bg-slate-200 duration-200 hover:bg-slate-300/80" />
        </button>
        <button
          onClick={() => {
            deleteContact(user, contact.email);
            const newContacts = [...contacts];
            newContacts[circles.indexOf(contact.circle)] = newContacts[
              circles.indexOf(contact.circle)
            ].filter((c: any) => c.email !== contact.email);

            setContacts(newContacts);
          }}
          className="h-full"
        >
          <FaTrash className="text-red-500 h-7 w-7 p-2 rounded-md bg-red-100 duration-200 hover:bg-red-200/80" />
        </button>
      </div>
    </div>
  );
};

export default Contact;
