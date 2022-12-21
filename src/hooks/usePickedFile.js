import { useState } from "react";

export const usePickedFile = () => {
  const [file, setFile] = useState("");

  const pickedHandler = (event) => {
    if (event.target.files && event.target.files.length === 1) {
      setFile(event.target.files[0]);
    }
  };

  return {
    file,
    setFile,
    pickedHandler,
  };
};
