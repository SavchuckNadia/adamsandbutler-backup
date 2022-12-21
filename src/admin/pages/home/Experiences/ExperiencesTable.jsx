import { Box, Button, CircularProgress, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../../theme";

import Header from "../../../components/Header";
import { useEffect, useState } from "react";
import { collection, deleteDoc, doc, onSnapshot } from "firebase/firestore";
import { db } from "../../../../firebase";

import AlertDialogSlide from "../../../../components/Modal/Modal";

const ExperiencesTable = (props) => {
  const [slides, setSlides] = useState([]);
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(null);

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "link",
      headerName: "Link",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "info",
      headerName: "Information",
      headerAlign: "left",
      align: "left",
      flex: 1,
    },
    {
      field: "img",
      headerName: "Image",
      renderCell: (params) => {
        return <img src={params.value} alt="" style={{ width: "100px" }} />;
      },
      flex: 1,
    },
    {
      field: "Actions",
      headerName: "Actions",
      headerAlign: "left",
      align: "left",
      renderCell: (params) => {
        return (
          <>
            <Button
              variant="contained"
              color="success"
              sx={{
                color: "#ffff",
                marginRight: "15px",
              }}
              onClick={() => updateHandler(params.id)}
            >
              Edit
            </Button>
            <Button variant="contained" color="error">
              <AlertDialogSlide
                btnTitle={"Delete"}
                modalTitle="Are you sure to delete this slide ?"
              >
                <Button
                  variant="contained"
                  color="success"
                  sx={{
                    color: "#ffff",
                    marginRight: "15px",
                  }}
                  onClick={() => deleteSlide(params.id)}
                >
                  Yes
                </Button>
              </AlertDialogSlide>
            </Button>
          </>
        );
      },
      flex: 1,
    },
  ];

  useEffect(() => {
    setLoading(true);
    const unsub = onSnapshot(
      collection(db, "home_experience-carousel"),
      (snapshot) => {
        let list = [];
        snapshot.docs.forEach((doc) => {
          list.push({ id: doc.id, ...doc.data() });
        });
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgress(progress);
        setSlides(list);
        setLoading(false);
      },
      (error) => {
        console.log(error);
        setLoading(false);
      }
    );

    return () => {
      unsub();
    };
  }, []);

  const deleteSlide = async (id) => {
    console.log("Delete");
    console.log(id);
    try {
      const docRef = doc(db, "home_experience-carousel", id);
      deleteDoc(docRef)
        .then(() => {
          console.log("Entire Document has been deleted successfully.");
        })
        .catch((error) => {
          console.log(error);
        });

      setSlides(slides.filter((slide) => slide.id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  const updateHandler = (id) => {
    props.setIsUpdate(true);
    props.getUpdatingSlide(id);
  };

  return (
    <Box m="20px">
      <Header
        title="Experience home carousel"
        subtitle="Managing the Experience slides"
      />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {loading && progress < 100 && (
          <CircularProgress value={progress} color="success" />
        )}
      </div>
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
        }}
      >
        <DataGrid checkboxSelection rows={slides} columns={columns} />
      </Box>
    </Box>
  );
};

export default ExperiencesTable;
