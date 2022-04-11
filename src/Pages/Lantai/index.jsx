import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import DeleteIcon from "@mui/icons-material/Delete";
import Create from "@mui/icons-material/Create";
import { IconButton } from "@material-ui/core";
import DialogKonfirmasi from "../../Components/DialogKonfirmasi";
import Notif from "../../Components/Notification";
import { useState } from "react";
import Button from "@mui/material/Button";
import AddCircleOutline from "@mui/icons-material/AddCircleOutline";
import CompPopup from "../../Components/ComponentPopup";
import Form from "./Form";

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

const Lantai = () => {
  const [openDelete, dialogDeleteApakahTampil] = React.useState(false);
  const [openNotif, setNotif] = React.useState(false);
  const [openPopup, dialogEditTampil] = React.useState(false);
  const [openFrom, dialogTambahTampil] = React.useState(false);
  const [dataForm, setdataForm] = React.useState({});
  const [rows, setRows] = useState([]);
  const [idHapus, setidHapus] = useState(-1);

  const handleTambahClick = () => {
    // some action
    dialogTambahTampil(true);
    setdataForm({});
    console.log("tombol", openPopup);
  };

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

  const hapusData = () => {
    setNotif(true);

    let indexdata = rows.findIndex((item) => item.id === idHapus);
    console.log(idHapus, 1);
    let semuadata = [...rows];
    semuadata.splice(indexdata, 1);
    setRows(semuadata);
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

  React.useEffect(function () {
    setRows(rowsGrid);
  }, []);

  return (
    <div>
      <h2 style={{ textAlign: "center" }}> Tampilan Menu Lantai </h2>
      <Button
        variant="outlined"
        direction="row"
        spacing={2}
        mb={7}
        aria-label="Tambah"
        onClick={(event) => {
          handleTambahClick();
        }}
      >
        <AddCircleOutline />
        Tambah
      </Button>
      <DataTable rows={rows} columns={columns} />
      <DialogKonfirmasi
        open={openDelete}
        title="Anda yakin ingin menghapus?"
        setOpen={dialogDeleteApakahTampil}
        onConfirm={hapusData}
      />
      <Notif
        open={openNotif}
        title="Data berhasil dihapus"
        setOpen={setNotif}
      />
      <CompPopup
        open={openPopup}
        title="Create/Edit Data Gedung"
        setOpen={dialogEditTampil}
        action="Simpan"
        action2="Batal"
        action3="Draft"
      >
        <Form
          data={dataForm}
          setOpen={dialogEditTampil}
          setData={setdataForm}
          rows={rows}
          setRows={setRows}
          cmd="edit"
        />
      </CompPopup>
      <CompPopup
        open={openFrom}
        title="Tambah Data Lantai"
        setOpen={dialogTambahTampil}
        action="Simpan"
        action2="Batal"
      >
        <Form
          data={dataForm}
          setData={setdataForm}
          setOpen={dialogTambahTampil}
          rows={rows}
          setRows={setRows}
          cmd="tambah"
        />
      </CompPopup>
    </div>
  );
};

export default Lantai;
