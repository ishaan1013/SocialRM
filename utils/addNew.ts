import { doc, setDoc } from "firebase/firestore";
import { db } from "./firebase";

const addNew = async (
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

export default addNew;
