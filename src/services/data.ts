import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";

export const getData = (
  collectionName: string,
  dataType: any,
  setCollection: any,
  setProgress?: any,
  setLoading?: any
) => {
  setLoading && setLoading(true);

  const unsub = onSnapshot(
    collection(db, collectionName),
    (snapshot: any) => {
      let list: Array<typeof dataType> = [];
      snapshot.docs.forEach((doc: typeof dataType) => {
        list.push({ id: doc.id, ...doc.data() });
      });
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      setProgress && setProgress(progress);
      setCollection(list);
      setLoading && setLoading(false);
    },
    (error) => {
      console.log(error);
      setLoading(false);
    }
  );

  return () => {
    unsub();
  };
};
