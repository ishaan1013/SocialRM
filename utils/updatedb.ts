import { doc, setDoc, deleteDoc, Timestamp } from "firebase/firestore";
import { db } from "./firebase";

const freqs = [13148730000, 5259492000, 2629746000, 1209600000, 604800000]

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
    current: Timestamp.now(),
    next: Timestamp.fromMillis(Date.now() + freqs[parseInt(freq)-1])
  });
};

export const deleteOld = async (user: any, email: any) => {
  await deleteDoc(doc(db, "users", user.email, "contacts", email));
};
