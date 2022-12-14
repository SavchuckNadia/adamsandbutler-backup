import { doc, setDoc, getDoc } from "firebase/firestore";
import { db, auth } from "../firebase";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { toastNotification } from "../components/Toast/Toast";

export const userRegistration = async (email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = res.user;
    await setDoc(doc(db, "users", user.uid), {
      uid: user.uid,
      role: "USER",
      email,
      password
    });
    toastNotification("success", "User successfully created!");
  } catch (err) {
    toastNotification("error", `${err.message}`);
  }
};

export const userSignIn = (email, password) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      // const user = userCredential.user;
      // console.log("User successfully login!", user);
      toastNotification("success", "User successfully login!");
    })
    .catch((error) => {
      toastNotification("error", error.message);
    });
};

export const userLogOut = async () => {
  try {
    await signOut(auth);
    toastNotification("success", "User successfully sign out!");
    return true;
  } catch (error) {
    toastNotification("error", "Something went wrong!");
    return false;
  }
};


export const getUserInfo = async (user) => {
  
  const docRef = doc(db, "users", user["uid"]);
  
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    console.log("Document data:", docSnap.data());
    return docSnap.data();
  } else {
    console.log("No such document!");
  }
};
