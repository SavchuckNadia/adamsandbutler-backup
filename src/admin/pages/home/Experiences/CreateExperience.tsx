import { Box, Button, TextField, Fab, LinearProgress } from "@mui/material";

import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../../components/Header";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import { useEffect, useRef, useState } from "react";
import useInput from "../../../../hooks/useInput";
import { addDataToDatabase, updateData, uploadFile } from "../../../../services/data";
import { IExperienceSlide } from "../../../../interfaces/IExperienceSlide";
import { usePickedFile } from "../../../../hooks/usePickedFile";

interface CreateExperienceProps {
  updatingSlide:IExperienceSlide | null,
   isUpdate:boolean,
    setIsUpdate:(isUpdate: boolean) => {},
    setUpdatingSlide:(slide: IExperienceSlide | null) => {}
}

const CreateExperience = (props: CreateExperienceProps) => {
  let currentSlide = props.updatingSlide;
  let isUpdate = props.isUpdate;

  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(false);
  const { file, pickedHandler } = usePickedFile();
  const [img, setImg] = useState<string | null>();
  const filePickerRef = useRef<HTMLInputElement>(null);
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const {
    value: enteredLink,
    setEnteredValue: setEnteredLink,
    isValid: enteredLinkIsValid,
    hasError: linkInputHasError,
    valueChangeHandler: linkChangeHandler,
    inputBlurHandler: linkBlurHandler,
    reset: resetLinkInput,
  } = useInput((value:string) => value.trim() !== "");

  const {
    value: enteredInfo,
    setEnteredValue: setEnteredInfo,
    isValid: enteredInfoIsValid,
    hasError: infoInputHasError,
    valueChangeHandler: infoChangeHandler,
    inputBlurHandler: infoBlurHandler,
    reset: reseInfoInput,
  } = useInput((value:string) => value.trim() !== "");


  useEffect(() => {
    file && uploadFile(file, setLoading, setProgress, setImg);
  }, [file]);

  const updateSlide = async () => {
    const data = {
      link: enteredLink,
      info: enteredInfo,
      img: img,
    };

    updateData("home_experience-carousel", data, currentSlide);
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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (formIsValid && !isUpdate) {
      const data = {
        link: enteredLink,
        info: enteredInfo,
        img: img,
      };
      addDataToDatabase("home_experience-carousel", data);
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
            <img src={img as string} alt="" style={{ width: "150px" }} />
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
