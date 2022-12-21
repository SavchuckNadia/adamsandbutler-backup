import { Box, Button, CircularProgress, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../../theme";

import Header from "../../../components/Header";
import { useEffect, useState } from "react";

import AlertDialogSlide from "../../../../components/Modal/Modal";
import { deleteData, getData } from "../../../../services/data";

interface ExperiencesTableProps {
  getUpdatingSlide: (id: string) => {},
  setIsUpdate: (isUpdate: boolean) => {}
}

const ExperiencesTable = (props: ExperiencesTableProps) => {
  const [slides, setSlides] = useState([]);
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns: Array<any> = [
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
      renderCell: (params: any) => {
        return <img src={params.value} alt="" style={{ width: "100px" }} />;
      },
      flex: 1,
    },
    {
      field: "Actions",
      headerName: "Actions",
      headerAlign: "left",
      align: "left",
      renderCell: (params: any) => {
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
    getData("home_experience-carousel", setSlides, setProgress, setLoading)
  }, []);

  const deleteSlide =  (id: string) => {
    // console.log("Delete");
    // console.log(id);
    // try {
    //   const docRef = doc(db, "home_experience-carousel", id);
    //   deleteDoc(docRef)
    //     .then(() => {
    //       console.log("Entire Document has been deleted successfully.");
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //     });

    //   setSlides(slides.filter((slide) => slide.id !== id));
    // } catch (error) {
    //   console.log(error);
    // }

    deleteData(id, "home_experience-carousel", slides, setSlides)
  };

  const updateHandler = (id: string) => {
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
