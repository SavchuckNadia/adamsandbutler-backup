import { Box, Button, TextField, Fab, LinearProgress } from "@mui/material";

import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../../components/Header";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import { useEffect, useRef, useState } from "react";
import { db, storage } from "../../../../firebase";
import { collection, doc, setDoc, updateDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import useInput from "../../../../hooks/useInput";

const CreateExperience = (props) => {
  let currentSlide = props.updatingSlide;
  let isUpdate = props.isUpdate;

  console.log("currentSlide!!!!", currentSlide);
  const [progress, setProgress] = useState(null);
  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState();
  const [img, setImg] = useState();
  const filePickerRef = useRef();
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const {
    value: enteredLink,
    setEnteredValue: setEnteredLink,
    isValid: enteredLinkIsValid,
    hasError: linkInputHasError,
    valueChangeHandler: linkChangeHandler,
    inputBlurHandler: linkBlurHandler,
    reset: resetLinkInput,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredInfo,
    setEnteredValue: setEnteredInfo,
    isValid: enteredInfoIsValid,
    hasError: infoInputHasError,
    valueChangeHandler: infoChangeHandler,
    inputBlurHandler: infoBlurHandler,
    reset: reseInfoInput,
  } = useInput((value) => value.trim() !== "");

  const [enteredLinkTouched, setEnteredLinkTouched] = useState(false);
  const [enteredInfoTouched, setEnteredInfoTouched] = useState(false);

  useEffect(() => {
    const uploadFile = () => {
      const storageRef = ref(storage, file.name);
      const uploadTask = uploadBytesResumable(storageRef, file);
      setLoading(true);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
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
          console.log(error);
          setLoading(false);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setImg(downloadURL);
          });
        }
      );
    };
    file && uploadFile();
  }, [file]);

  const addDataToDatabase = async () => {
    const newSlide = doc(collection(db, "home_experience-carousel"));
    try {
      const data = {
        link: enteredLink,
        info: enteredInfo,
        img: img,
      };
      await setDoc(newSlide, { ...data, id: newSlide.id });
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  const updateSlide = async () => {
    const slideRef = doc(db, "home_experience-carousel", currentSlide.id);
    console.log(slideRef);
    setEnteredInfo();
    const data = {
      link: enteredLink,
      info: enteredInfo,
      img: img,
    };
    await updateDoc(slideRef, data);
  };

  useEffect(() => {
    if (isUpdate) {
      if (currentSlide) {
        setEnteredInfo(currentSlide["info"]);
        setEnteredLink(currentSlide["link"]);
        setImg(currentSlide["img"]);
      }
    }
  }, [currentSlide, isUpdate]);

  let formIsValid = false;

  if (enteredLinkIsValid && enteredInfoIsValid && img) {
    formIsValid = true;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setEnteredLinkTouched(true);
    setEnteredInfoTouched(true);

    if (formIsValid && !isUpdate) {
      addDataToDatabase();
    }
    if (formIsValid && isUpdate) {
      updateSlide();
    }
    resetLinkInput();
    reseInfoInput();
    setImg(null);
    props.setIsUpdate(false);
    props.setUpdatingSlide(null);
    currentSlide = null;
  };

  const pickedHandler = (event) => {
    let pickedFile;
    if (event.target.files && event.target.files.length === 1) {
      pickedFile = event.target.files[0];
      setFile(pickedFile);
    }
  };

  return (
    <Box m="20px">
      <Header
        title={props.isUpdate ? "EDIT EXPERIENCE" : "CREATE EXPERIENCE"}
        subtitle="Create a new slide in carousel"
      />
      <form onSubmit={handleSubmit}>
        <Box
          display="grid"
          gap="30px"
          gridTemplateColumns="repeat(4, minmax(0, 1fr))"
          sx={{
            "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
          }}
        >
          <Box sx={{ gridColumn: "span 2" }}>
            <TextField
              fullWidth
              variant="filled"
              type="text"
              label="Link"
              onChange={linkChangeHandler}
              onBlur={linkBlurHandler}
              value={enteredLink}
              name="link"
            />
            {linkInputHasError && (
              <p className="error-text">Link must not be empty</p>
            )}
          </Box>

          <Box sx={{ gridColumn: "span 2" }}>
            <TextField
              fullWidth
              variant="filled"
              type="text"
              label="Information"
              onChange={infoChangeHandler}
              onBlur={infoBlurHandler}
              value={enteredInfo}
              name="info"
            />
            {infoInputHasError && (
              <p className="error-text">Information must not be empty</p>
            )}
          </Box>

          <Box display="grid" gap="30px" sx={{ gridColumn: "span 4" }}>
            <label htmlFor="upload-photo">
              <input
                ref={filePickerRef}
                style={{ display: "none" }}
                id="upload-photo"
                name="img"
                type="file"
                accept=".jpg,.png,.jpeg"
                onChange={pickedHandler}
              />
              <Fab
                color="secondary"
                size="small"
                component="span"
                aria-label="add"
                variant="extended"
              >
                <AddCircleOutlineOutlinedIcon />{" "}
                {!isUpdate ? "Add image" : "Edit image"}
              </Fab>
            </label>

            {loading && progress < 100 && (
              <LinearProgress
                color="secondary"
                variant="determinate"
                value={progress}
              />
            )}
            <img src={img} alt="" style={{ width: "150px" }} />
          </Box>
        </Box>
        <Box display="flex" justifyContent="end" mt="20px">
          <Button
            type="submit"
            color="secondary"
            variant="contained"
            disabled={!formIsValid}
          >
            {!isUpdate ? "Create New Slide" : "Edit Slide"}
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default CreateExperience;
