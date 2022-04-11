import React from "react";
import { GedungProvider, useGedungContext } from "./Context";
import Count from "./Count";
// import Component from './Component';
import DialogKonfirmasi from "../../Components/DialogKonfirmasi";
import Notif from "../../Components/Notification";
import CompPopup from "../../Components/ComponentPopup";
import Grid from "./DataGrid";
import Button from "@mui/material/Button";
import AddCircleOutline from "@mui/icons-material/AddCircleOutline";
import { Form } from "./Form";

function Container() {
  const {
    openDelete,
    dialogDeleteApakahTampil,
    setNotif,
    idHapus,
    openPopup,
    dialogEditTampil,
    dataForm,
    setdataForm,
    rows,
    setRows,
    openForm,
    dialogTambahTampil,
  } = useGedungContext();
  const handleTambahClick = () => {
    dialogTambahTampil(true);
    setdataForm({});
  };
  const hapusData = () => {
    setNotif(true);

    let indexdata = rows.findIndex((item) => item.id === idHapus);
    console.log(idHapus, 1);
    let semuadata = [...rows];
    semuadata.splice(indexdata, 1);
    setRows(semuadata);
  };
  return (
    <>
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
        open={openForm}
        title="Tambah Data Gedung"
        setOpen={dialogTambahTampil}
        action="Simpan"
        action2="Batal"
      >
        <Form
          setData={setdataForm}
          setOpen={dialogTambahTampil}
          rows={rows}
          setRows={setRows}
          cmd="tambah"
        />
      </CompPopup>

      <Grid />
      <DialogKonfirmasi
        open={openDelete}
        title="Anda Yakin Ingin Menghapus?"
        setOpen={dialogDeleteApakahTampil}
        onConfirm={hapusData}
      />
      <Notif />
      <CompPopup />
    </>
  );
}

const Context = () => {
  return (
    <>
      <h2 style={{ textAlign: "center" }}>Tampilan Menu Gedung Context</h2>
      <GedungProvider>
        <Container />
      </GedungProvider>
    </>
  );
};

export default Context;
