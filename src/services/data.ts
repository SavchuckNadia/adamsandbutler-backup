import {
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { db, storage } from "../firebase";
import { toastNotification } from "../components/Toast/Toast";

export const getData = (
  collectionName: string,
  setCollection: any,
  setProgress?: any,
  setLoading?: any
) => {
  setLoading && setLoading(true);

  const unsub = onSnapshot(
    collection(db, collectionName),
    (snapshot: any) => {
      let list: Array<any> = [];
      snapshot.docs.forEach((doc: any) => {
        list.push({ id: doc.id, ...doc.data() });
      });
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      setProgress && setProgress(progress);
      setCollection(list);
      setLoading && setLoading(false);
    },
    (error) => {
      toastNotification("error", error.message);
      setLoading(false);
    }
  );

  return () => {
    unsub();
  };
};

export const addDataToDatabase = async (collectionName: string, data: any) => {
  const newItem = doc(collection(db, collectionName));
  try {
    await setDoc(newItem, { ...data, id: newItem.id });
    toastNotification("success", `Document successfully created!`);
  } catch (error) {
    toastNotification("error", `Error adding document: ${error}`);
  }
};

export const updateData = async (
  collectionName: string,
  data: any,
  currentItem: any
) => {
  try {
    const itemRef = doc(db, collectionName, currentItem.id);
    await updateDoc(itemRef, data);
    toastNotification("success", `Document successfully updated!`);
  } catch (error) {
    toastNotification("error", `Error updating document: ${error}`);
  }
};

export const uploadFile = (
  file: any,
  setLoading: any,
  setProgress: any,
  setFile: any
) => {

  const storageRef = ref(storage, file.name);
  const uploadTask = uploadBytesResumable(storageRef, file);
  setLoading(true);

  uploadTask.on(
    "state_changed",
    (snapshot) => {
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      setProgress(progress);

      switch (snapshot.state) {
        case "paused":
          console.log("Upload is Pause");
          setLoading(false);

          break;
        case "running":
          console.log("Upload is Running");
          break;
        default:
          break;
      }
    },
    (error) => {
      toastNotification("error", `Error uploading file: ${error}`);
      setLoading(false);
    },
    () => {
      getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
        setFile(downloadURL);
      });
      toastNotification("success", `File successfully uploaded!`);
    }
  );
};

export const deleteData = async (
  id: string,
  collectionName: string,
  data: any,
  setData: any
) => {
  try {
    const docRef = doc(db, collectionName, id);
    deleteDoc(docRef)
      .then(() => {
        toastNotification(
          "success",
          "Entire Document has been deleted successfully."
        );
      })
      .catch((error) => {
        toastNotification("error", `Error deliting document: ${error}`);
      });

    setData(data.filter((item: any) => item.id !== id));
  } catch (error) {
    toastNotification("error", `Error deliting document: ${error}`);
  }
};
