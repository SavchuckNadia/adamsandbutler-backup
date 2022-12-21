import { doc, getDoc } from 'firebase/firestore'
import  { useState } from 'react'
import { db } from '../../../../firebase'
import CreateExperience from './CreateExperience'
import ExperiencesTable from './ExperiencesTable'

const Experiences = () => {
  const [updatingSlide, setUpdatingSlide ] = useState()
  const [isUpdate, setIsUpdate] = useState(false)

  const getUpdatingSlide = async(id) => {
    const slideRef = doc(db, "home_experience-carousel", id);
    const docSnap = await getDoc(slideRef);

    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
      setUpdatingSlide(docSnap.data())
    } else {
      console.log("No such document!");
    }
  }

  return (
    <>
        <CreateExperience updatingSlide={updatingSlide} isUpdate={isUpdate} setIsUpdate={setIsUpdate} setUpdatingSlide={setUpdatingSlide} />
        <ExperiencesTable getUpdatingSlide={getUpdatingSlide} setIsUpdate={setIsUpdate} />
    </>
  )
}

export default Experiences