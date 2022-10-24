import { doc, setDoc } from "firebase/firestore";
import { db, auth } from "../firebase";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { toastNotification } from "../components/Toast/Toast";


export const userRegistration = async (data) => {
  try {
    const res = await createUserWithEmailAndPassword(
      auth,
      data.email,
      data.password
    );
    const user = res.user;
    await setDoc(doc(db, "users", user.uid), { uid: user.uid, role: "USER", ...data });
    toastNotification("success", "User successfully created!");

  } catch (err) {
    toastNotification("error", `${err.message}`);
  }
};



export const signIn = (email, password) => {
  const auth = getAuth();
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log("User successfully login!", user);
      toastNotification("success", "User successfully login!");
    })
    .catch((error) => {
      toastNotification("error", error.message);
    });
};
