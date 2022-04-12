import { DataGrid } from "@mui/x-data-grid";
import { useLantaiContext } from "./Context";
import DeleteIcon from "@mui/icons-material/Delete";
import Create from "@mui/icons-material/Create";
import { IconButton } from "@material-ui/core";
import React from "react";
import axios from "axios";

function DataTable(props) {
  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={props.rows}
        columns={props.columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        getRowId={(row) => row.id}
      />
    </div>
  );
}

function Grid() {
  const {
    rows,
    setRows,
    openDelete,
    dialogDeleteApakahTampil,
    openPopup,
    dialogEditTampil,
    idHapus,
    setidHapus,
    dataForm,
    setdataForm,
  } = useLantaiContext();
  const handleDeleteClick = (param, event) => {
    // some action
    console.log(param, event);
    dialogDeleteApakahTampil(true);

    let current_id = param.row.id;
    setidHapus(current_id);
    console.log("tombol", openDelete);
  };

  const handleEditClick = (param, event) => {
    // some action
    console.log(param, event);
    dialogEditTampil(true);
    setdataForm(param.row);
    console.log("tombol", openPopup);
  };
  const columns = [
    { field: "id", headerName: "ID", width: 70, flex: 1 },
    {
      field: "NomorLantai",
      headerName: "Nomor Lantai",
      type: "number",
      textAlign: "right",
      width: 170,
      flex: 1,
    },
    { field: "NamaLantai", headerName: "Nama Lantai", width: 350, flex: 1 },
    {
      field: "age",
      headerName: "#",
      type: "icons",
      width: 90,
      flex: 1,
      renderCell: (params) => {
        return (
          <div
            className="d-flex justify-content-between align-items-center"
            style={{ cursor: "pointer" }}
          >
            <IconButton
              variant="outlined"
              aria-label="delete"
              onClick={(event) => {
                handleDeleteClick(params, event);
              }}
            >
              <DeleteIcon />
            </IconButton>
            <IconButton
              variant="outlined"
              aria-label="create"
              onClick={(event) => {
                handleEditClick(params, event);
              }}
            >
              <Create />
            </IconButton>
          </div>
        );
      },
    },
  ];

  const rowsGrid = [
    { id: 1, NomorLantai: "112B", NamaLantai: "Lower Ground" },
    { id: 2, NomorLantai: "07A", NamaLantai: "Lantai Atas" },
    { id: 3, NomorLantai: "81B", NamaLantai: "Upper Ground" },
    { id: 4, NomorLantai: "46C", NamaLantai: "Hardnest" },
    { id: 5, NomorLantai: "321A", NamaLantai: "Bougenfill" },
    { id: 6, NomorLantai: "711A", NamaLantai: "Struggle" },
    { id: 7, NomorLantai: "65D", NamaLantai: "Aster" },
    { id: 8, NomorLantai: "36A", NamaLantai: "Basement Tingkat 3" },
    { id: 9, NomorLantai: "212C", NamaLantai: "Ground Floor" },
  ];

  React.useEffect(() => {
    console.log(rows);
    if (rows === null) {
      axios.get("http://localhost:3004/lantai").then((result) => {
        console.log(result.data);
        setRows(result.data);
      });
    }
  });
  return (
    <>
      <DataTable rows={rows} columns={columns} />
    </>
  );
}

export default Grid;
