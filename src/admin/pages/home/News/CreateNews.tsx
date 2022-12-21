import { Box, Button, TextField, Fab, LinearProgress } from "@mui/material";

import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../../components/Header";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import React, { useEffect, useRef, useState } from "react";
import useInput from "../../../../hooks/useInput";
import {
  addDataToDatabase,
  updateData,
  uploadFile,
} from "../../../../services/data";
import { usePickedFile } from "../../../../hooks/usePickedFile";
import { INewsPost } from "../../../../interfaces/INewsPost";

interface CreateNewsProps {
  updatingPost:INewsPost | null,
   isUpdate:boolean,
    setIsUpdate:(isUpdate: boolean) => {},
    setUpdatingPost:(post: INewsPost | null) => {}
}

const CreateNews = (props: CreateNewsProps) => {
  let currentPost = props.updatingPost;
  let isUpdate = props.isUpdate;

  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(false);
  const { file, pickedHandler } = usePickedFile();
  const [img, setImg] = useState<string | null>('');
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
  } = useInput((value: string) => value.trim() !== "");

  const {
    value: enteredCategory,
    setEnteredValue: setEnteredCategory,
    isValid: enteredCategoryIsValid,
    hasError: categoryInputHasError,
    valueChangeHandler: categoryChangeHandler,
    inputBlurHandler: categoryBlurHandler,
    reset: resetCategoryInput,
  } = useInput((value: string) => value.trim() !== "");

  const {
    value: enteredTitle,
    setEnteredValue: setEnteredTitle,
    isValid: enteredTitleIsValid,
    hasError: titleInputHasError,
    valueChangeHandler: titleChangeHandler,
    inputBlurHandler: titleBlurHandler,
    reset: resetTitleInput,
  } = useInput((value: string) => value.trim() !== "");

  useEffect(() => {
    file && uploadFile(file, setLoading, setProgress, setImg);
  }, [file]);

  const updateSlide = () => {
    const data = {
      link: enteredLink,
      category: enteredCategory,
      title: enteredTitle,
      img: img,
    };

    updateData("home_news", data, currentPost);
  };

  useEffect(() => {
    if (isUpdate) {
      if (currentPost) {
        setEnteredCategory(currentPost["category"]);
        setEnteredTitle(currentPost["title"]);
        setEnteredLink(currentPost["link"]);
        setImg(currentPost["img"] as string);
      }
    }
  }, [currentPost, isUpdate]);

  let formIsValid = false;

  if (
    enteredCategoryIsValid &&
    enteredTitleIsValid &&
    enteredLinkIsValid &&
    img
  ) {
    formIsValid = true;
  }



  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (formIsValid && !isUpdate) {
      const data = {
        link: enteredLink,
        category: enteredCategory,
        title: enteredTitle,
        img: img,
      };

      addDataToDatabase("home_news", data);
    }
    if (formIsValid && isUpdate) {
      updateSlide();
    }
    resetLinkInput();
    resetCategoryInput();
    resetTitleInput();
    setImg(null);

    props.setIsUpdate(false);
    props.setUpdatingPost(null);
    currentPost = null;
  };


  return (
    <Box m="20px">
      <Header
        title={props.isUpdate ? "EDIT THE NEWS POST " : "CREATE A NEWS POST"}
        subtitle="Create a new post"
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
              label="Category"
              onChange={categoryChangeHandler}
              onBlur={categoryBlurHandler}
              value={enteredCategory}
              name="category"
            />
            {categoryInputHasError && (
              <p className="error-text">Category must not be empty</p>
            )}
          </Box>

          <Box sx={{ gridColumn: "span 2" }}>
            <TextField
              fullWidth
              variant="filled"
              type="text"
              label="Title"
              onChange={titleChangeHandler}
              onBlur={titleBlurHandler}
              value={enteredTitle}
              name="title"
            />
            {titleInputHasError && (
              <p className="error-text">Title must not be empty</p>
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
            {!isUpdate ? "Create New Post" : "Edit Post"}
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default CreateNews;
