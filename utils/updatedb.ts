import { doc, setDoc, deleteDoc } from "firebase/firestore";
import { db } from "./firebase";

export const addNew = async (
  user: any,
  name: string,
  email: string,
  circle: string,
  tone: string,
  freq: string,
  intention: string
) => {
  await setDoc(doc(db, "users", user.email, "contacts", email), {
    name: name,
    email: email,
    circle: circle,
    tone: tone,
    freq: freq,
    intention: intention,
  });
};

export const deleteOld = async (user: any, email: any) => {
  await deleteDoc(doc(db, "users", user.email, "contacts", email));
};
