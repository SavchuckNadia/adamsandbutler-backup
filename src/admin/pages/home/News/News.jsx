import { doc, getDoc } from "firebase/firestore";
import React, { useState } from "react";
import { db } from "../../../../firebase";
import CreateNews from "./CreateNews";
import NewsTable from "./NewsTable";

const News = () => {

    const [updatingPost, setUpdatingPost ] = useState()
    const [isUpdate, setIsUpdate] = useState(false)
  
    const getUpdatingPost = async(id) => {
      const slideRef = doc(db, "home_news", id);
      const docSnap = await getDoc(slideRef);
  
      if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        setUpdatingPost(docSnap.data())
      } else {
        console.log("No such document!");
      }
    }

  return (
    <>
      <CreateNews updatingPost={updatingPost} isUpdate={isUpdate} setIsUpdate={setIsUpdate} setUpdatingPost={setUpdatingPost} />
      <NewsTable getUpdatingPost={getUpdatingPost} setIsUpdate={setIsUpdate} />
    </>
  );
};

export default News;
