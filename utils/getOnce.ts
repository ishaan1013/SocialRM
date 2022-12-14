import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase";

const getOnce = async (email: string) => {
  let contacts: any = [];
  const res = await getDocs(collection(db, "users", email, "contacts"));
  res.forEach((doc) => {
    contacts.push(doc.data());
  });
  return contacts;
};

export default getOnce;
