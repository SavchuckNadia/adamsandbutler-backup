import { Box, Button, CircularProgress, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../../theme";

import Header from "../../../components/Header";
import { useEffect, useState } from "react";

import AlertDialogSlide from "../../../../components/Modal/Modal";
import { deleteData, getData } from "../../../../services/data";

interface NewsTableProps {
  getUpdatingPost: (id: string) => {},
  setIsUpdate: (isUpdate: boolean) => {}
}

const NewsTable = (props: NewsTableProps) => {
  const [posts, setPosts] = useState([]);
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
      field: "category",
      headerName: "Category",
      headerAlign: "left",
      align: "left",
      flex: 1,
    },
    {
      field: "title",
      headerName: "Title",
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
                modalTitle="Are you sure to delete this post ?"
              >
                <Button
                  variant="contained"
                  color="success"
                  sx={{
                    color: "#ffff",
                    marginRight: "15px",
                  }}
                  onClick={() => deletePost(params.id)}
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
    getData("home_news", setPosts, setProgress, setLoading)
  }, []);

  const deletePost = async (id: string) => {
    deleteData(id, "home_news", posts, setPosts)
  };

  const updateHandler = (id: string) => {
    props.setIsUpdate(true);
    props.getUpdatingPost(id);
  };

  return (
    <Box m="20px">
      <Header
        title="News home posts"
        subtitle="Managing the News posts"
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
        <DataGrid checkboxSelection rows={posts} columns={columns} />
      </Box>
    </Box>
  );
};

export default NewsTable;
