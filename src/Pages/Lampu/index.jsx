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

const Lampu = () => {
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
      field: "JenisLampu",
      headerName: "Jenis Lampu",
      textAlign: "right",
      width: 170,
      flex: 1,
    },
    { field: "JumlahLampu", headerName: "Jumlah Lampu", width: 350, flex: 1 },
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
    { id: 1, JenisLampu: "Halogen", JumlahLampu: "Ruang Tamu" },
    { id: 2, JenisLampu: "LED", JumlahLampu: "Ruang Administrator" },
    { id: 3, JenisLampu: "Pillar", JumlahLampu: "Ruang Meeting" },
    { id: 4, JenisLampu: "Neon", JumlahLampu: "KP Lantai 3" },
    { id: 5, JenisLampu: "Pijar", JumlahLampu: "Parkiran Kantor Lama" },
    { id: 6, JenisLampu: "Meja", JumlahLampu: "Kantor Lama Lantai 1" },
    { id: 7, JenisLampu: "Tumbler", JumlahLampu: "Lantai 2 Mess KL" },
  ];

  React.useEffect(function () {
    setRows(rowsGrid);
  }, []);

  return (
    <div>
      <h2 style={{ textAlign: "center" }}> Tampilan Menu Lampu </h2>
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
        title="Create/Edit Data Lampu"
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
        title="Tambah Data Lampu"
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

export default Lampu;
